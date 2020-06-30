module.exports = {
  apps: [{
    name: "server",
    script: "./dist/server/main.js",
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
