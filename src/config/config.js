import { config } from "dotenv"

config()

const env_config = {
    DATABASE_URL: process.env.DATABASE_URL,
    JWT_SECRET: process.env.JWT_SECRET,
    PORT: process.env.PORT
}

export default env_config
