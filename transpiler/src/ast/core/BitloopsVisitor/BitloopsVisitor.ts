import BitloopsParserVisitor from '../../../../../grammar/BitloopsParserVisitor.js';
import BitloopsParser from '../../../../../grammar/BitloopsParser.js';
import {
  regularIntegerEvaluation,
  regularDecimalEvaluation,
  regularBooleanEvaluation,
  regularStringEvaluation,
} from '../bitloopsParserHelpers/index.js';

// import antlr4 from 'antlr4';

export default class BitloopsVisitor extends BitloopsParserVisitor {
  [x: string]: any;
  constructor() {
    super();
  }

  visitEqualityExpression(ctx: BitloopsParser.EqualityExpressionContext) {
    // console.log('EqualityExpression');
    const left = this.visit(ctx.expression(0));
    const right = this.visit(ctx.expression(1));
    const operator = ctx.op.text;
    const returnObject = {
      expression: {
        equalityExpression: {
          left: left.expression,
          right: right.expression,
          operator: operator,
        },
      },
    };
    return returnObject;
  }

  visitIdentifierName(ctx: BitloopsParser.IdentifierNameContext) {
    // console.log('IdentifierName');
    const identifier = ctx.Identifier().getText();
    // console.log('identifier:', identifier, typeof identifier);
    return identifier;
  }

  visitIdentifier(ctx: BitloopsParser.IdentifierContext) {
    // console.log('Identifier');
    const identifier = ctx.Identifier().getText();
    // console.log('identifier:', identifier, typeof identifier);
    return identifier;
  }

  visitRelationalExpression(ctx: BitloopsParser.RelationalExpressionContext) {
    // const left: string = this.visit(ctx.expression(0));
    const left = this.visit(ctx.expression(0));
    const right = this.visit(ctx.expression(1));
    const operator = ctx.op.text;
    const returnObject = {
      expression: {
        relationalExpression: {
          left: left.expression,
          right: right.expression,
          operator: operator,
        },
      },
    };
    return returnObject;
  }

  visitLogicalAndExpression(ctx: BitloopsParser.LogicalAndExpressionContext) {
    const left = this.visit(ctx.expression(0));
    const right = this.visit(ctx.expression(1));
    const returnObject = {
      expression: {
        logicalExpression: {
          andExpression: {
            left: left.expression,
            right: right.expression,
          },
        },
      },
    };
    return returnObject;
  }

  visitLogicalOrExpression(ctx: BitloopsParser.LogicalOrExpressionContext) {
    const left = this.visit(ctx.expression(0));
    const right = this.visit(ctx.expression(1));
    const returnObject = {
      expression: {
        logicalExpression: {
          orExpression: {
            left: left.expression,
            right: right.expression,
          },
        },
      },
    };
    return returnObject;
  }

  visitLogicalXorExpression(ctx: BitloopsParser.LogicalXorExpressionContext) {
    const left = this.visit(ctx.expression(0));
    const right = this.visit(ctx.expression(1));
    const returnObject = {
      expression: {
        logicalExpression: {
          xorExpression: {
            left: left.expression,
            right: right.expression,
          },
        },
      },
    };
    return returnObject;
  }

  visitNotExpression(ctx: BitloopsParser.NotExpressionContext) {
    const expression = this.visit(ctx.expression());
    const returnObject = {
      expression: {
        logicalExpression: { notExpression: expression.expression },
      },
    };
    return returnObject;
  }

  visitMultiplicativeExpression(ctx: BitloopsParser.MultiplicativeExpressionContext) {
    const left = this.visit(ctx.expression(0));
    const right = this.visit(ctx.expression(1));
    const operator = ctx.op.text;
    const returnObject = {
      expression: {
        multiplicativeExpression: {
          left: left.expression,
          right: right.expression,
          operator: operator,
        },
      },
    };
    return returnObject;
  }

  visitAdditiveExpression(ctx: BitloopsParser.AdditiveExpressionContext) {
    const left = this.visit(ctx.expression(0));
    const right = this.visit(ctx.expression(1));
    const operator = ctx.op.text;
    const returnObject = {
      expression: {
        additiveExpression: {
          left: left.expression,
          right: right.expression,
          operator: operator,
        },
      },
    };
    return returnObject;
  }

  visitThisExpression(ctx: BitloopsParser.ThisExpressionContext) {
    // console.log('ThisExpression');
    const thisExpression: string = ctx.This().getText();
    return thisExpression;
  }

  visitParenthesizedExpression(ctx: BitloopsParser.ParenthesizedExpressionContext) {
    // console.log('ParenthesizedExpression');
    const expression = this.visit(ctx.expression());
    const returnObject = {
      expression: {
        parenthesizedExpression: expression.expression,
      },
    };
    return returnObject;
  }

  visitEvaluationExpression(ctx: BitloopsParser.EvaluationExpressionContext) {
    // console.log('EvaluationExpression');
    const evaluation = this.visit(ctx.evaluation())[0];
    const returnObject = {
      expression: {
        evaluation: evaluation,
      },
    };
    return returnObject;
  }

  visitRegularEvaluation(ctx: BitloopsParser.RegularEvaluationContext) {
    // console.log('RegularEvaluation');
    const regularEvaluation: string = this.visitChildren(ctx)[0];
    const returnObject = {
      regularEvaluation: regularEvaluation,
    };
    return returnObject;
  }

  visitThisVariableEvaluationString(ctx: BitloopsParser.ThisVariableEvaluationStringContext) {
    // console.log('ThisVariableEvaluationString');
    const value = ctx.ThisVariableEvaluation().getText();
    const returnObject = {
      type: 'variable',
      value: value,
    };
    return returnObject;
  }

  visitRegularVariableEvaluationString(ctx: BitloopsParser.RegularVariableEvaluationStringContext) {
    // console.log('RegularVariableEvaluationString');
    const value = ctx.RegularVariableEvaluation().getText();
    const returnObject = {
      type: 'variable',
      value: value,
    };
    return returnObject;
  }

  visitIdentifierString(ctx: BitloopsParser.IdentifierStringContext) {
    // console.log('IdentifierString');
    const returnObject = {
      type: 'variable',
      value: ctx.Identifier().getText(),
    };
    return returnObject;
  }

  visitRegularIntegerEvaluation(ctx: BitloopsParser.RegularIntegerEvaluationContext) {
    // console.log('RegularIntegerEvaluation');
    const returnObject = regularIntegerEvaluation(ctx.IntegerLiteral().getText());
    return returnObject;
  }

  visitRegularDecimalEvaluation(ctx: BitloopsParser.RegularDecimalEvaluationContext) {
    // console.log('RegularDecimalEvaluation');
    const returnObject = regularDecimalEvaluation(ctx.DecimalLiteral().getText());
    return returnObject;
  }

  visitRegularBooleanEvaluation(ctx: BitloopsParser.RegularBooleanEvaluationContext) {
    // console.log('RegularBooleanEvaluation');
    const returnObject = regularBooleanEvaluation(ctx.BooleanLiteral().getText());
    return returnObject;
  }

  visitRegularStringEvaluation(ctx: BitloopsParser.RegularStringEvaluationContext) {
    // console.log('RegularStringEvaluation');
    const returnObject = regularStringEvaluation(ctx.StringLiteral().getText());
    return returnObject;
  }

  visitCondition(ctx: BitloopsParser.ConditionContext) {
    // console.log('Condition');
    const condition = this.visit(ctx.expression());
    const returnObject = {
      condition: condition,
    };
    return returnObject;
  }

  visitIfStatement(ctx: BitloopsParser.IfStatementContext) {
    // console.log('IfStatement');
    const condition = this.visit(ctx.expression());
    const thenStatements = this.visit(ctx.statement(0));
    const returnObject = {
      ifStatement: {
        condition: condition,
        thenStatements: thenStatements,
      },
    };
    if (ctx.statement(1)) {
      const elseStatements = this.visit(ctx.statement(1));
      returnObject.ifStatement['elseStatements'] = elseStatements;
    }
    return returnObject;
  }

  visitStatement(ctx: BitloopsParser.StatementContext) {
    // console.log('Statement');
    const statement = this.visitChildren(ctx)[0];
    return statement;
  }

  visitStatementList(ctx: BitloopsParser.StatementListContext) {
    // console.log('StatementList');
    const statementList = this.visitChildren(ctx);
    for (let i = 0; i < statementList.length; i++) {
      if (statementList[i] === undefined) {
        statementList.splice(i, 1);
      }
    }
    return statementList;
  }

  visitBlock(ctx: BitloopsParser.BlockContext) {
    // console.log('Block');
    const block = this.visitChildren(ctx)[1];
    return block;
  }
  visitConstDeclaration(ctx: BitloopsParser.ConstDeclarationContext) {
    // console.log('ConstDeclaration');
    const left = this.visit(ctx.identifier());
    const right = this.visit(ctx.expression());
    const returnObject = {
      constDeclaration: {
        name: left,
        expression: right.expression,
      },
    };
    if (ctx.typeAnnotation()) {
      const typeAnnotation = this.visit(ctx.typeAnnotation());
      returnObject.constDeclaration['type'] = typeAnnotation;
    }
    return returnObject;
  }

  visitVariableDeclaration(ctx: BitloopsParser.VariableDeclarationContext) {
    // console.log('VariableDeclaration');
    const left = this.visit(ctx.identifier());
    const right = this.visit(ctx.expression());
    const typeAnnotation = this.visit(ctx.typeAnnotation());
    const returnObject = {
      variableDeclaration: {
        name: left,
        expression: right.expression,
        type: typeAnnotation,
      },
    };
    return returnObject;
  }

  visitTypeAnnotation(ctx: BitloopsParser.TypeAnnotationContext) {
    // console.log('TypeAnnotation');
    const type = ctx.type_().getText();
    return type;
  }

  visitThisDeclaration(ctx: BitloopsParser.ThisDeclarationContext) {
    // console.log('ThisDeclaration');
    const thisDeclaration = ctx.ThisVariableEvaluation().getText();
    const expression = this.visit(ctx.expression());
    const returnObject = {
      thisDeclaration: {
        name: thisDeclaration,
        expression: expression.expression,
      },
    };
    return returnObject;
  }

  visitSwitchStatement(ctx: BitloopsParser.SwitchStatementContext) {
    // console.log('SwitchStatement');
    const expressionObject = this.visit(ctx.expression());
    const caseObject = this.visit(ctx.caseBlock());
    const returnObject = {
      switchStatement: {
        expression: expressionObject.expression,
        cases: caseObject.cases,
        defaultCase: caseObject.defaultCase,
      },
    };
    return returnObject;
  }

  visitCaseBlock(ctx: BitloopsParser.CaseBlockContext) {
    // console.log('CaseBlock');
    const caseClauses = this.visit(ctx.caseClauses(0));
    if (ctx.caseClauses(1)) {
      caseClauses.push(this.visit(ctx.caseClauses(1)));
    }
    const defaultClause = this.visit(ctx.defaultClause());
    const returnObject = {
      cases: caseClauses,
      defaultCase: defaultClause,
    };
    return returnObject;
  }

  visitCaseClauses(ctx: BitloopsParser.CaseClausesContext) {
    const caseClauses = this.visitChildren(ctx);
    return caseClauses;
  }

  visitCaseClause(ctx: BitloopsParser.CaseClauseContext) {
    // console.log('CaseClause');
    const caseValue = ctx.expression().getText();
    const caseStatement = this.visit(ctx.statementList())[0];
    const returnObject = {
      statements: caseStatement,
      caseValue: caseValue,
    };
    return returnObject;
  }

  visitDefaultClause(ctx: BitloopsParser.DefaultClauseContext) {
    // console.log('DefaultClause');
    const defaultStatement = this.visit(ctx.statementList())[0];
    console.log(defaultStatement);
    const returnObject = {
      statements: defaultStatement,
    };
    return returnObject;
  }

  visitBreakStatement() {
    // console.log('BreakStatement');
  }
}
