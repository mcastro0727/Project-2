var db = require("../models");

module.exports = function(app) {
  // Get all examples
  app.get("/api/top", (req, res) => {
    db.Bridge.findAll({
      group: ['activityID'],
      attributes: ['activityID', [db.sequelize.fn('COUNT', 'activityID'), 'activityIDCount']]
    })
    .then((data) => res.json(data))
  });

  // Create a new example
  app.post("/api/adduser", (req, res) => {
    db.users.create({
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      userName: req.body.userName,
      email: req.body.email,
      lat: req.body.lat,
      lon: req.body.lon,
      surveyQ1: req.body.surveyQ1,
      surveyQ2: req.body.surveyQ2,
      surveyQ3: req.body.surveyQ3,
      surveyQ4: req.body.surveyQ4,
      surveyQ5: req.body.surveyQ5
    })
    .then((data) => res.json(data))
  })

  app.put("/api/complete/", (req, res) => {
    console.log(req.body);
    
    db.Bridge.update({
      completed: 1
    },{
      where: {
        userID: req.body.userID,
        activityID: req.body.activityID
      }
    })
    .then((dbBridge) => {
      console.log(dbBridge);
      res.json(dbBridge)
    }
    )
  })
}
