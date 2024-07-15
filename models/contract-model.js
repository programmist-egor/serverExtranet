import {sequelizeExtranet} from "../config/db-connect.js";
import {DataTypes} from "sequelize";

const ContractExtranet = sequelizeExtranet.define('Contract-Extranet', {
    idTable: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    hotelId: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    userId: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    director: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    typeOrganization: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    city: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    phone: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    note: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    nameObject: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    contract: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    date: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    requisites: {
        type: DataTypes.JSON,
        allowNull: false,
    },
    confirmContract: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
    },
});

export default ContractExtranet;