'use strict';
module.exports = {
    up: async(queryInterface, Sequelize) => {
        await queryInterface.createTable('ChekUp', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER
            },
            nama: {
                type: Sequelize.STRING
            },
            identity_number: {
                type: Sequelize.STRING
            },
            address: {
                type: Sequelize.STRING
            },
            complaint: {
                type: Sequelize.STRING
            },
            phone_number: {
                type: Sequelize.STRING
            },
            status: {
                type: Sequelize.ENUM("WAITING", "CHEKUP", "DONE")
            },
            createdAt: {
                allowNull: false,
                type: Sequelize.DATE
            },
            updatedAt: {
                allowNull: false,
                type: Sequelize.DATE
            }
        });
    },
    down: async(queryInterface, Sequelize) => {
        await queryInterface.dropTable('ChekUp');
    }
};