import {env} from './.env';

export const environment = {
  production: true,
  serverUrl: '/api',
  version: env.npm_package_version,
};
