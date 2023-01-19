'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class student extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      student.hasMany(models.student_active, {
        foreignKey: "student_id"
      })

      student.belongsTo(models.user, {
        foreignKey: "student_id",
        as: "users"
      })
    }
  }
  student.init({
    name: DataTypes.STRING,
    nis: DataTypes.STRING,
    status: DataTypes.STRING,
    user_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'student',
    underscored: true,
  });
  return student;
};