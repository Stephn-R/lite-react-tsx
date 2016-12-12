module.exports = function (wallaby) {
  return {
    files: [
      'src/**',
      {pattern: 'src/**/*spec.ts*', ignore: true}
    ],

    tests: [
      'src/**/*spec.ts*'
    ],

    env: {
      type: 'node'
    },

    compilers: {
      '**/*.ts?(x)': wallaby.compilers.typeScript({
        module: 'commonjs',
        jsx: 'React'
      })
    },

    setup: () => {
      global.React = require('react');
      global.ReactDOM = require('react-dom');
    },

    testFramework: 'mocha'
  };
};
