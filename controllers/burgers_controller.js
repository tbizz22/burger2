// burgers_controller.js

var express = require("express");
var router = express.Router();

var burg = require("../models/burger.js");

router.get("/", function (req, res) {
    // get burg here
    burg.all(function (data) {
        var burgObject = {
            burg: data
        };
        console.log(burgObject);
        // draw the page with the burg data
        res.render("index", burgObject);
    });
});


router.post("/api/burger", function (req, res) {

    console.log(req.body);
    burg.create(["burger", "eaten"], [req.body.burger, req.body.eaten], function (result) {

        res.json({
            id: result.insertId
        });
    });
});

router.put("/api/burger/:id", function (req, res) {
    console.log(req.body);
    var condition = "ID= " + req.params.id;

    burg.update({
            EATEN: req.body.eaten
        },
        condition,
        function (result) {
            if (result.changedRows === 0) {
                return res.status(404).end();
            }
            res.status(200).end()
        }
    );
});




module.exports = router;