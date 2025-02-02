import prettier from 'prettier';

export const formatString = (code: string, config?: prettier.Options): string => {
  const defaultFormatterConfig = { semi: true, parser: 'typescript', singleQuote: true };
  const formatterConfig = config ?? defaultFormatterConfig;
  // console.log('code', code);
  return prettier.format(code, formatterConfig);
};
