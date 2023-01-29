module.exports = {
    "env": {
        "browser": true,
        "es2022": true
    },
    "extends": [
        "eslint:recommended",
        "plugin:react/recommended"
    ],
    "parserOptions": {
        "ecmaFeatures": {
            "jsx": true
        },
        "ecmaVersion": 11,
        "sourceType": "module"
    },
    "plugins": [
        "react"
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
        "react-native/no-unused-styles": 2,
        "react-native/no-inline-styles": 2,
        "react/jsx-uses-react": "off",
        "react/react-in-jsx-scope": "off"
    }
}
