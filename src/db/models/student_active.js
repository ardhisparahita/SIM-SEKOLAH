'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class student_active extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      student_active.belongsTo(models.student, {
        foreignKey: "student_id",
        as: "students"
      })
    }
  }
  student_active.init({
    tahun_pelajaran: DataTypes.INTEGER,
    kelas: DataTypes.INTEGER,
    student_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'student_active',
    underscored: true,
  });
  return student_active;
};