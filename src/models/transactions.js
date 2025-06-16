import database from "../config/database.js"
import { DataTypes } from "sequelize"

const Transaction = database.define("transaction", {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },

    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },

    date: {
        type: DataTypes.DATEONLY,
        allowNull: false
    },

    type: {
        type: DataTypes.STRING,
        allowNull: false
    },

    method: {
        type: DataTypes.STRING,
        allowNull: false
    },

    value: {
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

export default Transaction
