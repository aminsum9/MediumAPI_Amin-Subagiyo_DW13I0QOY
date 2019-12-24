"use strict";
module.exports = (sequelize, DataTypes) => {
  const users = sequelize.define(
    "users",
    {
      fullname: DataTypes.STRING,
      username: DataTypes.STRING,
      email: DataTypes.STRING,
      password: DataTypes.STRING,
      is_active: DataTypes.TINYINT
    },
    {}
  );
  users.associate = function(models) {
    users.belongsToMany(models.categories, {
      through: models.articles,
      foreignKey: "author_id"
    });
    users.hasMany(models.follow, {
      foreignKey: "user_id"
    });
    users.hasMany(models.follow, {
      foreignKey: "follower_user_id"
    });
  };
  return users;
};
