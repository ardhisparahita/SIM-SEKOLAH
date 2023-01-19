'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class apps extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      apps.hasMany(models.users_on_apps, {
        foreignKey: "app_id"
      })

      apps.hasMany(models.tags_on_apps, {
        foreignKey: "app_id"
      })
    }
  }
  apps.init({
    name: DataTypes.STRING,
    url: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'apps',
    underscored: true,
  });
  return apps;
};