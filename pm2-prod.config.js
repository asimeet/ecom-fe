module.exports = {
    apps: [
      {
        name: "ECOM_FE_PROD",
        script: "npm",
        args : "run start-prod",
        env: { PORT: 3000 }
      }
    ]
};
  