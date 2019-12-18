'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    
      return queryInterface.bulkInsert('categories', [{
        name: 'Programming',
        is_published: '1',
        is_archived: '2'
      }], {});
    */
  },

  down: (queryInterface, Sequelize) => {
    
      return queryInterface.bulkDelete('categories', null, {});

  }
};
