import app from "./src/app.js"
import envConfig from "./src/config/config.js"
import { syncAll } from "./src/config/schemas.js"

app.listen(envConfig.PORT, () => syncAll())
