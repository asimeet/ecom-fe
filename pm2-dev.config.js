module.exports = {
    apps: [
      {
        name: "ECOM_FE_DEV",
        script: "npm",
        args : "run start",
        instances: 2,
        exec_mode: "cluster",
        env: { PORT: 5008 }
      }
    ]
};
  