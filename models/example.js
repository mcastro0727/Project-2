module.exports = function(sequelize, DataTypes) {
  var Users = sequelize.define("Users", {
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    username: DataTypes.STRING,
    email: DataTypes.STRING,
    lat: DataTypes.STRING,
    lon: DataTypes.STRING,
    surveyQ1: DataTypes.INTEGER,
    surveyQ2: DataTypes.INTEGER,
    surveyQ3: DataTypes.INTEGER,
    surveyQ4: DataTypes.INTEGER,
    surveyQ5: DataTypes.INTEGER
  });
  return Users;
};
