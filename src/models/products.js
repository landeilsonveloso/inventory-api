import database from "../config/database.js"
import { DataTypes } from "sequelize"

const Product = database.define("product", {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },

    name: {
        type: DataTypes.STRING,
        allowNull: false
    },

    description: {
        type: DataTypes.STRING,
        allowNull: false
    },

    price: {
        type: DataTypes.DOUBLE,
        allowNull: false
    },

    quantity: {
        type: DataTypes.INTEGER,
        allowNull: false
    },

    categoryId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {model: "categories"}
    },

    supplierId: {
        type: DataTypes.INTEGER,
        references: {model: "suppliers"}
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

export default Product
