
## Description

Angular dynamic module loader and web api project.

## Installation

```bash
    $ npm install
```

## Running the app

```bash
# development
    $ npm run prebuild          /* Clean dist folder */
    $ npm run nest:start        /* Api development start */
    $ npm run ng:env            /* Web application generate environment file */
    $ npm run ng:nswag          /* Web application swagger to angular service generator */
    $ npm run ng:start          /* Web application start */
    $ npm run ng:deploy         /* Web application github pages deployment */

# watch mode
    $ npm run nest:start:dev    /* Api watch mode serve */
    $ npm run nest:start:debug  /* Api watch mode and debug serve */

# production mode
    $ npm run nest:build        /* Api build */
    $ npm run nest:start:prod   /* Api production mode start */
    $ npm run ng:build          /* Web application build */
```

## Config files

```bash
angular.json        : Angular configuration file
ecosystem.config.js : pm2 process manager configuration file
nest-cli.json       : Nestjs node framework configuration file
ngcc.config.js      : Angular Compatibility Compiler configuration file
nswag.json          : Swagger service generator configuration file (https://github.com/RicoSuter/NSwag)
package.json        : Npm package manager configuration file
tsconfig.json       : Typescript compiler configuration file
tsconfig.client.json: Angular project typescript compiler configuration file
tsconfig.server.json: Nestjs project typescript compiler configuration file
```

## Support

This is an MIT-licensed open source project.

## Stay in touch

- Author - [Mustafa Serpek](https://github.com/serpek)

## License

   [MIT licensed](LICENSE).
