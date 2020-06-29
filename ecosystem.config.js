module.exports = {
  apps: [{
    name: "server",
    script: "./dist/apps/server/main.js",
    watch: true,
    env: {
      NODE_ENV: "development",
    },
    env_production: {
      NODE_ENV: "production",
    }
  }/*,{
    name       : "client",
    script     : "./api.js",
    instances  : 4,
    exec_mode  : "cluster"
  }*/]
};
