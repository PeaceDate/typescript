// Inclusion and exclusion of files in the compilation

    // files - list of files to include in the compilation
    // include - list of files to include in the compilation. Can be a glob pattern
    // exclude - list of files to exclude from the compilation. Can be a glob pattern
    // extends - path to the base tsconfig.json file to inherit from

// Compilation output

    // outDir - path to the output directory
    // removeComments - remove comments from the output
    // noEmit - do not emit any output
    // noEmitOnError - do not emit output if there are any errors
    // sourceMap - generate source map. Source map is a file that maps the output code to the original source code
    // inlineSourceMap - generate source map as a data URL
    // inlineSources - include source code in the source map
    // declaration - generate declaration files
    // declarationMap - generate source map for declaration files
    // declarationDir - path to the output directory for declaration files
    // preserveConstEnums - preserve const enums. Const enums are removed during compilation

// Language and environment

    // target - target language version. Can be ES3, ES5, ES6, ES2015, ES2016, ES2017, ES2018, ES2019, ES2020, ESNext

// Modules

    // module - module system to use. Can be none, commonjs, amd, system, umd, es2015, es2020, esnext
    // rootDir - path to the root directory of the project
    // baseUrl - base directory to resolve non-relative module names
    // paths - mapping from module names to locations

// Strict mode

    // strict - enable all strict mode options
    // noImplicitAny - optional typing for any
    // strictNullChecks - enable strict null checks
    // strictFunctionTypes - enable strict checking of function types
    // strictBindCallApply - enable strict 'bind', 'call', and 'apply' methods on functions
    // strictPropertyInitialization - enable strict checking of property initialization in classes
    // noImplicitThis - enable error reporting for 'this' expressions with an implied 'any' type
    // useUnknownInCatchVariables - enable error reporting for catch clause variables with an implied 'any' type
    // alwaysStrict - parse in strict mode and emit "use strict" for each source file

// Code checking

    // noUnusedLocals - report errors on unused locals
    // noUnusedParameters - report errors on unused parameters
    // exactOptionalPropertyTypes - enable exact checking of optional property types
    // noImplicitReturns - report error when not all code paths in function return a value
    // noFallthroughCasesInSwitch - report errors for fallthrough cases in switch statement
    // allowUnreachableCode - disable error reporting for unreachable code
    // noUncheckedIndexedAccess - enable error reporting for code that accesses an array using an out-of-bounds index
    // noPropertyAccessFromIndexSignature - enable error reporting for code that accesses an object using an index signature
    // noImplicitOverride - ensure overriding members in derived classes are marked with an override modifier

