import { Sequelize } from "sequelize";

const db = new Sequelize("database_app", "root", "", {
  // const db = new Sequelize("test", "root", "", {
  host: "localhost",
  dialect: "mysql",
});
export default db;
