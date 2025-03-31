'use strict';

const { QueryInterface } = require("sequelize");

module.exports = {
    up: async (queryInterface, Sequelize) => {
        return queryInterface.bulkInsert('Users',[{
            email: 'admin@gmail.com',
            password: '12345',
            firstName:'KhanhLinh',
            lastName:'To',
            address:'VN',
            gender:1,
            typeRole:'ROLE',
            keyRole:'R1',
            createdAt: new Date(),
            updatedAt: new Date()
        }]);
    },
    down: async(QueryInterface, Sequelize) => {

    }
};
