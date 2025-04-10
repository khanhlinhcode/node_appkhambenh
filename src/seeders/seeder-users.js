'use strict';

import { QueryInterface } from 'sequelize';

export async function up(queryInterface, Sequelize) {
  return queryInterface.bulkInsert('Users', [
    {
      email: 'admin@gmail.com',
      password: '12345',
      firstName: 'KhanhLinh',
      lastName: 'To',
      address: 'VN',
      gender: 1,
      typeRole: 'ROLE',
      keyRole: 'R1',
      createdAt: new Date(),
      updatedAt: new Date()
    }
  ]);
}
export async function down(QueryInterface, Sequelize) {}
