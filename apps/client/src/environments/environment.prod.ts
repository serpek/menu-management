import {env} from './.env';

export const environment = {
  production: true,
  serverUrl: '/',
  version: env.npm_package_version,
};
