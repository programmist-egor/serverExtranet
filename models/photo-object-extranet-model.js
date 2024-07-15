import { DataTypes } from 'sequelize';
import {sequelizeExtranet} from '../config/db-connect.js';


const PhotoObjectExtranet = sequelizeExtranet.define('Photo-Object-Extranet', {
    idTable: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    hotelId: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    idImg: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    nameObject: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    preview: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    url: {
        type: DataTypes.STRING,
        allowNull: false,
    },
});

export default PhotoObjectExtranet;