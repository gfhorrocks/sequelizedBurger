var db = require("../models");

module.exports = function (app) {

  app.get("/api/burgers", function (req, res) {
    // express callback response by calling burger.selectAllBurger
    db.burgers.findAll({}).then(function (burgerData) {
      res.json(burgerData);
    });
  });

  // post route
  app.post("/api/burgers", function (req, res) {
    // takes the request object using it as input for burger.addBurger
    console.log(req.body);

    db.burgers.create({
      burger_name: req.body.burger_name,
      devoured: false
    }).then(function (burgerData) {
      res.json(burgerData);
    })
  });

  // put route
  app.put("/api/burgers/:id", function (req, res) {
    db.burgers.update({
      devoured: true
    },
    {
      where: {
        id: req.params.id
      }
    }).then(function(burgerData){
      res.json(burgerData);
    });
  });
}
