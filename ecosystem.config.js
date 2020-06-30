module.exports = {
  apps: [{
    name: "server",
    script: "npm",
    args: "-- run nest:start",
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
