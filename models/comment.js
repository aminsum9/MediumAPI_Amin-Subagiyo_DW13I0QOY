'use strict';
module.exports = (sequelize, DataTypes) => {
  const comment = sequelize.define('comment', {
    is_published: DataTypes.TINYINT,
    is_archived: DataTypes.TINYINT,
    article_id: DataTypes.INTEGER,
    user_id: DataTypes.INTEGER,
    comment: DataTypes.TEXT
  }, {});
  comment.associate = function(models) {
    // associations can be defined here
  };
  return comment;
};