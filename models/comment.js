"use strict";
module.exports = (sequelize, DataTypes) => {
  const comment = sequelize.define(
    "comment",
    {
      is_published: DataTypes.TINYINT,
      is_archived: DataTypes.TINYINT,
      article_id: DataTypes.INTEGER,
      user_id: DataTypes.INTEGER,
      comment: DataTypes.TEXT
    },
    {}
  );
  comment.associate = function(models) {
    comment.belongsTo(models.articles, {
      foreignKey: "article_id",
      sourceKey: "id"
    });
    comment.belongsTo(models.users, {
      foreignKey: "user_id",
      sourceKey: "id"
    });
  };
  return comment;
};
