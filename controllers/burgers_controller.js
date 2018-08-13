// burgers_controller.js

// use sequelize models
var db = require("../models");

module.exports = function (app) {

    app.get("/", function (req, res) {
        // get burg here
        db.Burger.findAll({
            order: [
                ["burger", "ASC"]
            ]
        }).then(function (burgObject) {
            // draw the page with the burg data
            res.render("index", {
                burger: burgObject
            });
        }).catch(function (err) {
            res.json(err);
        });
    });


    app.post("/api/burger", function (req, res) {
        console.log(req.body);
        db.Burger.create({
            burger: req.body.burger,
            eaten: req.body.eaten
        }).then(function (burgObject) {
            res.json(burgObject);
        }).catch(function (err) {
            res.json(err)
        })
    });


    app.put("/api/burger/:id", function (req, res) {
        console.log(req.body);
        db.Burger.update({
            eaten: req.body.eaten
        }, {
            where: {
                id: req.params.id
            }
        }).then(function (burgObject) {
            res.json(burgObject);
        }).catch(function (err) {
            res.json(err);
        });
    });
};
