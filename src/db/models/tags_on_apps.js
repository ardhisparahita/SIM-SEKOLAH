'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class tags_on_apps extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      tags_on_apps.belongsTo(models.apps, {
        foreignKey: "app_id",
        as: "apps"
      })

      tags_on_apps.belongsTo(models.user, {
        foreignKey: "user_id",
        as: "users"
      })
    }
  }
  tags_on_apps.init({
    tags: DataTypes.STRING,
    app_id: DataTypes.INTEGER,
    user_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'tags_on_apps',
    underscored: true,
  });
  return tags_on_apps;
};