"use strict";
module.exports = (sequelize, DataTypes) => {
  const Categories = sequelize.define(
    "Categories",
    {
      name: DataTypes.STRING,
      is_published: DataTypes.TINYINT,
      is_archived: DataTypes.TINYINT
    },
    {}
  );
  Categories.associate = function(models) {
    Categories.belongsTo(models.Article, {
      foreignKey: "id",
      sourceKey: "category_id"
    });
  };
  return Categories;
};
