exports.plugins = [
    "react"
];

exports.parserOptions = {
    ecmaFeatures: {
        jsx: true
    },
};

exports.rules = {
    "react/jsx-closing-bracket-location": "warn",
    "react/jsx-closing-tag-location": "warn",
    "react/jsx-curly-newline": "warn",
    "react/jsx-key": "error",
    "react/jsx-pascal-case": "warn",
    "react/jsx-tag-spacing": "warn",

    "react/jsx-newline": [
        "warn",
        {
            "prevent": true,
            "allowMultilines": false
        }
    ],
    "react/jsx-max-props-per-line": [
        "warn",
        {
            "maximum": 2
        }
    ],
    "react/jsx-sort-props": [
        "warn",
        {
            "callbacksLast": true,
            "shorthandFirst": true,
            "reservedFirst": ["key"],
            "noSortAlphabetically": true
        }
    ],
    "react/jsx-first-prop-new-line": [
        "warn",
        "multiline"
    ],
    "react/jsx-wrap-multilines": [
        "warn",
        {
            return: "parens-new-line",
            arrow: "parens-new-line",
            assignment: "parens-new-line"
        }
    ],

    "jsx-quotes": [
        "warn",
        "prefer-double"
    ],
}

exports.overrides = [{
    files: ["*.tsx"],
    rules: {
        "@typescript-eslint/naming-convention": [
            "warn",
            {
                selector: "default",
                format: ["camelCase"],
                leadingUnderscore: "allow",
                trailingUnderscore: "allow",
            },
            {
                selector: "objectLiteralProperty",
                format: null
            },
            {
                selector: "import",
                format: ["camelCase", "PascalCase"],
            },
            {
                // Allow for function components defined in JSX to be PascalCase
                selector: "function",
                format: ["camelCase", "PascalCase"]
            },
            {
                // Allow for local components wrapped in HOC to be PascalCase
                selector: "variable",
                format: ["camelCase", "UPPER_CASE", "PascalCase"],
                modifiers: ["const", "global"]
            },
            {
                selector: "variable",
                format: ["camelCase", "UPPER_CASE"],
                leadingUnderscore: "allow",
                trailingUnderscore: "allow"
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
            }
        ]
    }
}];
