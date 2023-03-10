'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class user extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      user.hasMany(models.users_on_apps, {
        foreignKey: "user_id"
      })

      user.hasMany(models.tags_on_apps, {
        foreignKey: "user_id"
      })

      user.hasMany(models.teacher, {
        foreignKey: "user_id"
      })

      user.hasMany(models.student, {
        foreignKey: "user_id"
      })
    }
  }
  user.init({
    username: DataTypes.STRING,
    password: DataTypes.STRING,
    role: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'user',
    underscored: true,
  });
  return user;
};