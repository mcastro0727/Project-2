var db = require("../models");

module.exports = function(app) {
 
  // PUT route for updating todos. We can get the updated todo data from req.body
  app.put("/api/bridge", function (req, res) {

    // Update takes in an object describing the properties we want to update, and
    // we use where to describe which objects we want to update
    db.Bridge.update({
      completed: true
    }, {
      where: {
        userID: req.body.userID,
        activityID: req.body.activityID
      }
    }).then(function (dbBridge) {
      res.json(dbBridge);
    });
      
  });
};
