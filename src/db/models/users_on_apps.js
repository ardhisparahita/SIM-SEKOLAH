'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class users_on_apps extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      users_on_apps.belongsTo(models.apps, {
        foreignKey: "app_id",
        as: "apps"
      })

      users_on_apps.belongsTo(models.user, {
        foreignKey: "user_id",
        as: "users"
      })
    }
  }
  users_on_apps.init({
    app_id: DataTypes.INTEGER,
    user_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'users_on_apps',
    underscored: true,
  });
  return users_on_apps;
};