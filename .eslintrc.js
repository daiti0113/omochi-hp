module.exports = {
    "env": {
        "browser": true,
        "es2022": true
    },
    "extends": [
        "eslint:recommended",
        "plugin:react/recommended"
    ],
    "parser": "@typescript-eslint/parser",
    "parserOptions": {
        "ecmaVersion": "latest",
        "sourceType": "module"
    },
    "plugins": [
        "react",
        "@typescript-eslint"
    ],
    "rules": {
        "linebreak-style": ["error", "unix"],
        "quotes": ["error", "double"],
        "semi": ["error", "never"],
        "no-unused-vars": 2,
        "react/jsx-uses-vars": 2,
        "react/jsx-indent": ["error", 4],
        "react/jsx-indent-props": ["error", 4],
        "react/prop-types": [0],
        "jsx-quotes": ["warn", "prefer-double"],
        "indent": ["error", 4, {"SwitchCase": 1}],
        "max-lines-per-function": ["error", 30],
        "max-statements": ["error", 15],
        "max-depth": ["error", 2],
        "complexity": ["error", 5],
        "no-delete-var": "error",
        "no-var": "error",
        "block-spacing": ["error", "never"],
        "object-curly-spacing": ["error", "never"],
        "comma-dangle": ["error", "never"],
        "react/jsx-uses-react": "off",
        "react/react-in-jsx-scope": "off"
    },
    "globals": {
        "process": true,
        "module": true,
        "require": true
    }
}
