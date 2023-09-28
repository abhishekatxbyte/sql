module.exports = {
  HOST: "localhost",
  USER: "abhishek",
  PASSWORD: "Abhi@290",
  DB: "tutorial",
  dialect: "mysql",
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
};
