import database from "../config/database.js"
import { DataTypes } from "sequelize"

const Transaction = database.define("transaction", {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },

    description: {
        type: DataTypes.STRING,
        allowNull: false,
    },

    date: {
        type: DataTypes.DATEONLY,
        allowNull: false
    },

    value: {
        type: DataTypes.DOUBLE,
        allowNull: false
    },

    method: {
        type: DataTypes.STRING,
        allowNull: false
    },

    type: {
        type: DataTypes.STRING,
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
