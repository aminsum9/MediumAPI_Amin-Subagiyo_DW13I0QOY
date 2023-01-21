"use strict";
module.exports = (sequelize, DataTypes) => {
  const follow = sequelize.define(
    "follow",
    {
      user_id: DataTypes.INTEGER,
      follower_user_id: DataTypes.INTEGER
    },
    {}
  );
  follow.associate = function(models) {
    follow.belongsTo(models.users, {
      foreignKey: "follower_user_id",
      as: "users",
      sourceKey: "id"
    });
  };
  return follow;
};
