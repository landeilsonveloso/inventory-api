import env_config from "./config"
import Sequelize from "sequelize"
import postgres from "pg"
import env_config from "./config"


const database_url = env_config.INTERNAL_DATABASE_URL

const dbConfig = {
    dialect: "postgres",
    dialectModule: postgres,
    dialectOptions: {
        ssl: {
          require: true,
          rejectUnauthorized: false
        }
    }
}

const database = new Sequelize(database_url, dbConfig)

database.authenticate().then(() => console.log("Conexão realizada com sucesso!")).catch((err) => console.log(err.message))
  
export default database
