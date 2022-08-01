'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class ChekUp extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
        }
    };
    ChekUp.init({
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        nama: DataTypes.STRING,
        identity_number: DataTypes.STRING,
        address: DataTypes.STRING,
        complaint: DataTypes.STRING,
        phone_number: DataTypes.STRING,
        status: DataTypes.ENUM("WAITING", "CHEKUP", "DONE")
    }, {
        sequelize,
        modelName: 'ChekUp',
        tableName: 'ChekUp',
    });
    return ChekUp;
};