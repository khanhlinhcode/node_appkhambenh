'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Doctor_Clinic_Specialty extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
            /**
             * The static associate function is used to define associations between models in
             * JavaScript.
             * @param models - The `models` parameter typically refers to an object or a collection of
             * models in an application. These models represent different entities or resources in the
             * system, such as users, products, orders, etc. In the context of the `associate` method
             * you provided, it seems like it is used to establish
             */
               static associate(models) {
      // define association here
    }
  };
  Doctor_Clinic_Specialty.init({
    doctorId: DataTypes.INTEGER,
    clinicId: DataTypes.INTEGER,
    specialtyId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Doctor_Clinic_Specialty',
  });
  return Doctor_Clinic_Specialty;
};