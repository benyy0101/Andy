module.exports = {
    "env": {
        "browser": true,
        "es2021": true,
        "node": true
    },
    "extends": [
        "eslint:recommended",
        "plugin:@typescript-eslint/recommended",
        "plugin:react/recommended",
        "airbnb",
        "airbnb-base/legacy",
        'airbnb-typescript',
        "next/core-web-vitals",
        "prettier",
    ],
    "plugins": [
        "import",
        "jsx-a11y",
        "babel",
        "prettier",
        "react-hooks",
        "@typescript-eslint",
        "react"
    ],
    "overrides": [
        {
            "env": {
                "node": true
            },
            "files": [
                ".eslintrc.{js,cjs}"
            ],
            "parserOptions": {
                "sourceType": "script"
            }
        }
    ],
    "parser": "@typescript-eslint/parser",
    "parserOptions": {
        project: ['tsconfig.json'],
        "ecmaVersion": "latest",
        "sourceType": "module"
    },
    
    "rules": {
        'linebreak-style': ["error", "windows"],
        "import/no-extraneous-dependencies": ["error", { devDependencies: true }],
        "react/jsx-props-no-spreading": "off",
        "no-console": "error",
        "import/prefer-default-export": "off"
    },
    "ignorePatterns": ["build", "dist", "public"],
    "root": false
}
