import env_config from "./config.js"
import Sequelize from "sequelize"

const database_url = env_config.DATABASE_URL

const database = new Sequelize(database_url)

database.authenticate().then(() => console.log("Conexão realizada com sucesso!")).catch((err) => console.log(err.message))

export default database
