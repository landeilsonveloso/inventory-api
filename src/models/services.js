import database from "../config/database.js"
import { DataTypes } from "sequelize"

const Service = database.define("service", {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },

    description: {
        type: DataTypes.STRING,
        allowNull: false
    },

    cost: {
        type: DataTypes.DECIMAL,
        allowNull: false
    },

    price: {
        type: DataTypes.DECIMAL,
        allowNull: false
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

export default Service
