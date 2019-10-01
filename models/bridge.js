module.exports = function(sequelize, DataTypes) {
    const bridge = sequelize.define("Bridge", {
        userID: DataTypes.INTEGER,
        activityID: DataTypes.INTEGER,
        completedByDate: DataTypes.DATE,
        completed: DataTypes.BOOLEAN
    });

    return bridge
}