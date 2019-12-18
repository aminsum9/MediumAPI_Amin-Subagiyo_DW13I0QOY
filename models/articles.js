"use strict";
module.exports = (sequelize, DataTypes) => {
  const articles = sequelize.define(
    "articles",
    {
      title: DataTypes.STRING,
      content: DataTypes.TEXT,
      image: DataTypes.STRING,
      category_id: DataTypes.INTEGER,
      is_published: DataTypes.TINYINT,
      is_archived: DataTypes.TINYINT,
      author_id: DataTypes.INTEGER
    },
    {}
  );
  articles.associate = function(models) {
    articles.belongsTo(models.categories, {
      foreignKey: "category_id",
      sourceKey: "id"
    });
    articles.belongsTo(models.users, {
      forreignKey: "author_id",
      sourceKey: "id"
    });
  };
  return articles;
};
