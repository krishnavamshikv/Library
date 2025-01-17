"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("Books", [
      {
        name: "The Hobbit",
        author: "J.R.R. Tolkien",
        year_published: 1937,
      },
      {
        name: "Harry Potter and the Philosopher's Stone",
        author: "J.K. Rowling",
        year_published: 1997,
      },
      {
        name: "1984",
        author: "George Orwell",
        year_published: 1949,
      },
      {
        name: "The Great Gatsby",
        author: "F. Scott Fitzgerald",
        year_published: 1925,
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Books", null, {});
  },
};
