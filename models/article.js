'use strict';
module.exports = (sequelize, DataTypes) => {
  const Article = sequelize.define('Article', {
    title: DataTypes.STRING,
    content: DataTypes.TEXT,
    image: DataTypes.STRING,
    category_id: DataTypes.INTEGER,
    category_name: DataTypes.STRING,
    is_published: DataTypes.TINYINT,
    is_archived: DataTypes.TINYINT,
    slug: DataTypes.STRING,
    author_id: DataTypes.INTEGER
  }, {});
  Article.associate = function(models) {
    // associations can be defined here
  };
  return Article;
};