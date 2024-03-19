import { Sequelize } from "sequelize";
const { PASSWORD, DB_USER, DB_NAME } = process.env;

const database = new Sequelize(DB_NAME, DB_USER, PASSWORD, {
  host: "localhost",
  dialect: "postgres",
  logging: false,
});

export default database;
