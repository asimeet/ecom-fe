module.exports = {
    apps: [
      {
        name: "ECOM_FE_PROD",
        script: "npm",
        args : "run start-prod",
        instances: 2,
        exec_mode: "cluster",
        env: { PORT: 3000 }
      }
    ]
};
  