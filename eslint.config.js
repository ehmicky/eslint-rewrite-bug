import {fixupPluginRules} from '@eslint/compat';
import fp from 'eslint-plugin-fp';

export default [
  {
    plugins: {
      fp: fixupPluginRules(fp),
    },
    rules: {
      'fp/no-mutating-methods': ['error', {allowedObjects: ['state']}]
    },
  },
];
