module.exports = {
  // env: {
  //   es6: true
  // },
  // parserOptions: {
  //   ecmaVersion: 6,
  //   sourceType: 'module',
  //   ecmaFeatures: {
  //     generators: false,
  //     objectLiteralDuplicateProperties: false
  //   }
  // },

  rules: {
    // enforces no braces where they can be omitted
    // https://eslint.org/docs/rules/arrow-body-style
    // TODO: enable requireReturnForObjectLiteral?
    'ter-arrow-body-style': [true, 'as-needed', {
      requireReturnForObjectLiteral: false,
    }],

    // require parens in arrow function arguments
    // https://eslint.org/docs/rules/arrow-parens
    'ter-arrow-parens': [true, 'as-needed', {
      requireForBlockBody: true,
    }],

    // require space before/after arrow function's arrow
    // https://eslint.org/docs/rules/arrow-spacing
    'ter-arrow-spacing': [true, { before: true, after: true }],

    // verify super() callings in constructors
    // 'constructor-super': 'error', NOT-APPLICABLE

    // enforce the spacing around the * in generator functions
    // https://eslint.org/docs/rules/generator-star-spacing
    // 'generator-star-spacing': ['error', { before: false, after: true }], NO-SUPPORT

    // disallow modifying variables of class declarations
    // https://eslint.org/docs/rules/no-class-assign
    // 'no-class-assign': 'error', NO-SUPPORT

    // disallow arrow functions where they could be confused with comparisons
    // https://eslint.org/docs/rules/no-confusing-arrow
    // 'no-confusing-arrow': ['error', {
    //   allowParens: true,
    // }],

    // disallow modifying variables that are declared using const
    // 'no-const-assign': 'error', NOT-APPLICABLE

    // disallow duplicate class members
    // https://eslint.org/docs/rules/no-dupe-class-members
    // 'no-dupe-class-members': 'error', NOT-APPLICABLE

    // disallow importing from the same path more than once
    // https://eslint.org/docs/rules/no-duplicate-imports
    // replaced by https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-duplicates.md
    // 'no-duplicate-imports': 'off', NOT-APPLICABLE

    // disallow symbol constructor
    // https://eslint.org/docs/rules/no-new-symbol
    // 'no-new-symbol': 'error', NO-SUPPORT

    // disallow specific imports
    // https://eslint.org/docs/rules/no-restricted-imports
    // 'no-restricted-imports': 'off', NO-SUPPORT

    // disallow to use this/super before super() calling in constructors.
    // https://eslint.org/docs/rules/no-this-before-super
    // 'no-this-before-super': 'error', NOT-APPLICABLE

    // disallow useless computed property keys
    // https://eslint.org/docs/rules/no-useless-computed-key
    // 'no-useless-computed-key': 'error', NO-SUPPORT

    // disallow unnecessary constructor
    // https://eslint.org/docs/rules/no-useless-constructor
    // 'no-useless-constructor': 'error', NO-SUPPORT

    // disallow renaming import, export, and destructured assignments to the same name
    // https://eslint.org/docs/rules/no-useless-rename
    // 'no-useless-rename': ['error', { NO-SUPPORT
    //   ignoreDestructuring: false,
    //   ignoreImport: false,
    //   ignoreExport: false,
    // }],

    // require let or const instead of var
    'no-var-keyword': true,

    // require method and property shorthand syntax for object literals
    // https://eslint.org/docs/rules/object-shorthand
    'object-literal-shorthand': true,

    // suggest using arrow functions as callbacks
    'ter-prefer-arrow-callback': [true, {
      allowNamedFunctions: false,
      allowUnboundThis: true,
    }],

    // suggest using of const declaration for variables that are never modified after declared
    'prefer-const': [true, {
      destructuring: 'any',
    }],

    // Prefer destructuring from arrays and objects
    // https://eslint.org/docs/rules/prefer-destructuring
    // 'prefer-destructuring': ['error', { NO-SUPPORT
    //   VariableDeclarator: {
    //     array: false,
    //     object: true,
    //   },
    //   AssignmentExpression: {
    //     array: true,
    //     object: true,
    //   },
    // }, {
    //   enforceForRenamedProperties: false,
    // }],

    // disallow parseInt() in favor of binary, octal, and hexadecimal literals
    // https://eslint.org/docs/rules/prefer-numeric-literals
    // 'prefer-numeric-literals': 'error', NO-SUPPORT

    // suggest using Reflect methods where applicable
    // https://eslint.org/docs/rules/prefer-reflect
    // 'prefer-reflect': 'off', NO-SUPPORT

    // use rest parameters instead of arguments
    // https://eslint.org/docs/rules/prefer-rest-params
    // 'prefer-rest-params': 'error', NO-SUPPORT

    // suggest using the spread operator instead of .apply()
    // https://eslint.org/docs/rules/prefer-spread
    // 'prefer-spread': 'error', NO-SUPPORT

    // suggest using template literals instead of string concatenation
    // https://eslint.org/docs/rules/prefer-template
    // 'prefer-template': 'error', NO-SUPPORT

    // disallow generator functions that do not have yield
    // https://eslint.org/docs/rules/require-yield
    // 'require-yield': 'error', NO-SUPPORT

    // enforce spacing between object rest-spread
    // https://eslint.org/docs/rules/rest-spread-spacing
    // 'rest-spread-spacing': ['error', 'never'], NO-SUPPORT

    // import sorting
    // https://eslint.org/docs/rules/sort-imports
    'sort-imports': [false, {
      'ignore-case': false,
      'ignore-member-sort': false,
      'member-syntax-sort-order': ['none', 'all', 'multiple', 'single'],
    }],

    // require a Symbol description
    // https://eslint.org/docs/rules/symbol-description
    // 'symbol-description': 'error', NO-SUPPORT

    // enforce usage of spacing in template strings
    // https://eslint.org/docs/rules/template-curly-spacing
    // 'template-curly-spacing': 'error', NO-SUPPORT

    // enforce spacing around the * in yield* expressions
    // https://eslint.org/docs/rules/yield-star-spacing
    // 'yield-star-spacing': ['error', 'after'] NO-SUPPORT
  }
};
