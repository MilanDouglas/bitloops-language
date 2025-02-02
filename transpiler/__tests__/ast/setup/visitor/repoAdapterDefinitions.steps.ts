/**
 *  Bitloops Language CLI
 *  Copyright (C) 2022 Bitloops S.A.
 *
 *  This program is free software: you can redistribute it and/or modify
 *  it under the terms of the GNU General Public License as published by
 *  the Free Software Foundation, either version 3 of the License, or
 *  (at your option) any later version.
 *
 *  This program is distributed in the hope that it will be useful,
 *  but WITHOUT ANY WARRANTY; without even the implied warranty of
 *  MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 *  GNU General Public License for more details.
 *
 *  You should have received a copy of the GNU General Public License
 *  along with this program.  If not, see <https://www.gnu.org/licenses/>.
 *
 *  For further information you can contact legal(at)bitloops.com.
 */
import { BitloopsParser } from '../../../../src/parser/core/index.js';
import { IntermediateASTParser } from '../../../../src/ast/core/index.js';
import { isIntermediateASTValidationErrors } from '../../../../src/ast/core/guards/index.js';
import { isParserErrors } from '../../../../src/parser/core/guards/index.js';
import { IntermediateASTSetup, TBoundedContexts } from '../../../../src/ast/core/types.js';
import { BitloopsTypesMapping } from '../../../../src/helpers/mappings.js';
import { VALID_REPO_ADAPTER_DEFINITIONS } from '../mocks/repoAdapterDefinition/index.js';

const BOUNDED_CONTEXT = 'Hello world';
const MODULE = 'Demo';

describe('Repo Adapter definition is valid', () => {
  let setupResult: IntermediateASTSetup;
  let coreResult: TBoundedContexts;

  const parser = new BitloopsParser();
  const intermediateParser = new IntermediateASTParser();

  VALID_REPO_ADAPTER_DEFINITIONS.forEach((testRepoAdapter) => {
    test(`${testRepoAdapter.description}`, () => {
      const initialModelOutput = parser.parse({
        core: [
          {
            boundedContext: BOUNDED_CONTEXT,
            module: MODULE,
            fileId: 'fileId',
            fileContents: 'RepoPort TodoRepoPort<TodoEntity> extends CRUDRepoPort;',
          },
        ],
        setup: [
          {
            fileContents: testRepoAdapter.inputBLString,
            fileId: testRepoAdapter.fileId,
          },
        ],
      });

      if (!isParserErrors(initialModelOutput)) {
        const parseResult = intermediateParser.parse(initialModelOutput);
        if (!isIntermediateASTValidationErrors(parseResult)) {
          const result = intermediateParser.complete(parseResult);
          setupResult = result.setup;
          coreResult = result.core;
        }
      }
      // check setup
      const resultTree = setupResult[testRepoAdapter.fileId];
      const repoAdapterDefinitionNodes = resultTree.getRootChildrenNodesByType(
        BitloopsTypesMapping.TSetupRepoAdapterDefinition,
      );
      const setupValue = repoAdapterDefinitionNodes[0].getValue();

      expect(setupValue).toMatchObject(testRepoAdapter.setupRepoAdapterDefinition);

      // check core
      const coreTree = coreResult[BOUNDED_CONTEXT][MODULE];
      const repoAdapterNodes = coreTree.getRootChildrenNodesByType(
        BitloopsTypesMapping.TRepoAdapter,
      );
      const value = repoAdapterNodes[0].getValue();

      expect(value).toMatchObject(testRepoAdapter.repoAdapter);
    });
  });
});
