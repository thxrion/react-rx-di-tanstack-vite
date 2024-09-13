exports.extends = [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
];

exports.parser = "@typescript-eslint/parser";

exports.plugins = [
    "@typescript-eslint",
];

exports.rules = {
    "max-lines": "off",
    "max-lines-per-function": "off",
    "space-before-function-paren": "off",
    "space-before-blocks": "off",
    "semi": "off",
    "quotes": "off",
    "padding-line-between-statements": "off",
    "no-shadow": "off",
    "no-magic-numbers": "off",
    "lines-between-class-members": "off",
    "indent": "off",
    "func-call-spacing": "off",
    "brace-style": "off",

    "@typescript-eslint/explicit-module-boundary-types": "off",
    "@typescript-eslint/no-namespace": "off",
    "@typescript-eslint/no-use-before-define": "off",
    "require-atomic-updates": "off",

    // Default-configured
    "@typescript-eslint/type-annotation-spacing": "warn",
    "@typescript-eslint/space-before-blocks": "warn",
    "@typescript-eslint/semi": "warn",
    "@typescript-eslint/no-this-alias": "warn",
    "@typescript-eslint/no-shadow": "error",
    "@typescript-eslint/no-non-null-assertion": "off",
    "@typescript-eslint/no-explicit-any": "warn",
    "@typescript-eslint/member-delimiter-style": "warn",
    "@typescript-eslint/lines-between-class-members": "warn",
    "@typescript-eslint/func-call-spacing": "warn",
    "arrow-body-style": "warn",
    "curly": "warn",
    "eqeqeq": "warn",
    "keyword-spacing": "warn",
    "no-else-return": "warn",
    "no-multi-assign": "warn",
    "no-multi-spaces": "warn",
    "no-return-await": "error",
    "no-throw-literal": "warn",
    "no-unused-labels": "warn",
    "no-useless-return": "warn",
    "no-var": "warn",
    "object-property-newline": "warn",
    "yoda": "warn",
    "prefer-const": "warn",

    // Custom-configured
    "@typescript-eslint/consistent-type-definitions": [
        "warn",
        "interface"
    ],
    "@typescript-eslint/brace-style": [
        "warn",
        "1tbs",
        {
            "allowSingleLine": false
        }
    ],
    "@typescript-eslint/explicit-function-return-type": [
        "off",
        {
            "allowConciseArrowFunctionExpressionsStartingWithVoid": false,
            "allowDirectConstAssertionInArrowFunctions": true,
            "allowExpressions": true,
            "allowHigherOrderFunctions": true,
            "allowTypedFunctionExpressions": true,
        }
    ],
    "@typescript-eslint/explicit-member-accessibility": [
        "off",
        {
            accessibility: "explicit",
            overrides: {
                constructors: "no-public",
                parameterProperties: "no-public"
            }
        }
    ],
    "@typescript-eslint/indent": [
        "warn",
        4,
        {
            "flatTernaryExpressions": true,
            "SwitchCase": 1
        }
    ],
    "@typescript-eslint/padding-line-between-statements": [
        "warn",
        {
            "blankLine": "always",
            "prev": "*",
            "next": ["return", "continue", "break", "for", "while", "if", "throw", "try"]
        },
        {
            "blankLine": "always",
            "next": ["interface", "type", "class", "function", "export"],
            "prev": "*"
        }
    ],
    "@typescript-eslint/naming-convention": [
        "warn",
        {
            selector: "default",
            format: ["camelCase"],
            leadingUnderscore: "allow",
            trailingUnderscore: "allow",
        },
        {
            selector: "variable",
            format: ["camelCase", "UPPER_CASE"],
            leadingUnderscore: "allow",
            trailingUnderscore: "allow",
        },
        {
            selector: "variable",
            format: ["camelCase", "UPPER_CASE", "PascalCase"],
            modifiers: ["exported"]
        },
        {
            selector: "classProperty",
            modifiers: ["static"],
            format: ["camelCase", "UPPER_CASE", "PascalCase"],
        },
        {
            selector: "typeLike",
            format: ["PascalCase"],
        },
        {
            selector: "enumMember",
            format: ["UPPER_CASE"],
        },
        {
            selector: ["import"],
            format: ["camelCase", "PascalCase"],
        },
        {
            selector: ["typeProperty", "objectLiteralProperty"],
            format: null
        }
    ],
    "@typescript-eslint/no-magic-numbers": [
        "warn",
        {
            "ignore": [-1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
            "ignoreArrayIndexes": true,
            "ignoreEnums": true,
            "ignoreNumericLiteralTypes": true,
            "ignoreReadonlyClassProperties": true,
            "ignoreTypeIndexes": true
        }
    ],
    "@typescript-eslint/no-unused-vars": [
        "error",
        {
            "args": "after-used",
            "argsIgnorePattern": "^_$",
        }
    ],
    "@typescript-eslint/space-before-function-paren": [
        "warn",
        {
            "anonymous": "never",
            "named": "never",
            "asyncArrow": "never"
        }
    ],
    "@typescript-eslint/quotes": [
        "warn",
        "double",
        {
            "allowTemplateLiterals": true
        }
    ],
    "complexity": [
        "error",
        10
    ],
    "lines-around-comment": [
        "warn",
        {
            "allowArrayEnd": false,
            "allowArrayStart": true,
            "allowBlockEnd": false,
            "allowBlockStart": true,
            "allowClassEnd": false,
            "allowClassStart": true,
            "allowObjectEnd": false,
            "allowObjectStart": true,
            "beforeBlockComment": true,
            "beforeLineComment": true
        }
    ],
    "max-classes-per-file": [
        "error",
        1
    ],
    "max-params": [
        "warn",
        3
    ],
    "max-statements-per-line": [
        "warn",
        {
            "max": 1
        }
    ],
    "no-multiple-empty-lines": [
        "warn",
        {
            "max": 1
        }
    ],
    "function-paren-newline": [
        "warn",
        "multiline-arguments"
    ],
    "object-curly-newline": [
        "warn",
        {
            "ExportDeclaration": {
                "consistent": true,
                "minProperties": 3,
                "multiline": true
            },
            "ImportDeclaration": "never",
            "ObjectExpression": {
                "consistent": true,
                "minProperties": 2,
                "multiline": true
            },
            "ObjectPattern": {
                "consistent": true,
                "multiline": true
            }
        }
    ],
    "spaced-comment": [
        "warn",
        "always"
    ],
};
