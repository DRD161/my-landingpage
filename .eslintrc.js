module.exports = {
    rules: {
        semi: 'error',
        'prefer-const': 'error',
    },
    parser: '@babel/eslint-parser',
    parserOptions: {
        requireConfigFile: false,
        babelOptions: {
            babelrc: false,
            configFile: false,
            // your babel options
            presets: ['@babel/preset-react'],
        },
    },
    extends: ['prettier'],
};
