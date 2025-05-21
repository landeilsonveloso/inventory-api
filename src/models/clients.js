import database from "../config/database.js"
import { DataTypes } from "sequelize"

const Client = database.define("client", {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },

    name: {
        type: DataTypes.STRING,
        allowNull: false
    },

    nickname: {
        type: DataTypes.STRING,
        allowNull: false
    },

    contact: {
        type: DataTypes.STRING
    },

    userId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {model: "users"}
    }
}, 

    {
        timestamps: false
    }
)

export default Client
