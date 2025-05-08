import { config } from "dotenv"

config()

const env_config = {
    DATABASE_URL: process.env.DATABASE_URL,
    PORT: process.env.PORT
}

export default env_config
