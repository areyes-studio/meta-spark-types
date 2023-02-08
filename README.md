# Meta Spark Types
This repository contains type definitions for IntelliSense to provide a more comfortable experience while working with **Meta Spark Studio** in custom programming workflows.

## Usage
In order to use these types, you will need to install them as a dev dependency in your project:

    npm i @areyes-studio/meta-spark-types

Then, in your project's tsconfig.json file, add the following under the compilerOptions key:

    "paths": {
        "*": [
            "../node_modules/@areyes-studio/meta-spark-types/Types/*"
        ]
    }

This will ensure that the type definitions are available for use in your project.

## Contributions
If you find any issues or would like to contribute to this repository, please feel free to open a pull request or issue on the GitHub repository.