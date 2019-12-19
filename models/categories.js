"use strict";
module.exports = (sequelize, DataTypes) => {
  const categories = sequelize.define(
    "categories",
    {
      name: DataTypes.STRING,
      is_published: DataTypes.TINYINT,
      is_archived: DataTypes.TINYINT
    },
    {}
  );
  categories.associate = function(models) {
    categories.belongsToMany(models.users, {
      through: models.articles,
      foreignKey: "category_id"
    });
  };
  return categories;
};
