import { config } from "dotenv"

config()

const env_config = {
    EXTERNAL_DATABASE_URL: process.env.EXTERNAL_DATABASE_URL,
    INTERNAL_DATABASE_URL: process.env.INTERNAL_DATABASE_URL,
    PORT: process.env.PORT
}

export default env_config
