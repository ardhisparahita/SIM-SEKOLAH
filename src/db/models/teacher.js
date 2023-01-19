'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class teacher extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      teacher.belongsTo(models.user, {
        foreignKey: "user_id",
        as: "users"
      })
    }
  }
  teacher.init({
    name: DataTypes.STRING,
    nip: DataTypes.STRING,
    status: DataTypes.STRING,
    user_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'teacher',
    underscored: true,
  });
  return teacher;
};