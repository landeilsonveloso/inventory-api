import app from "./src/app.js"
import env_config from "./src/config/config.js"

const PORT = env_config.PORT

app.listen(PORT, () => console.log("Servidor em execução: https://inventory-api-r2vx.onrender.com"))
