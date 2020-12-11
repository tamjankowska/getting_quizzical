const express = require("express");
const router = express.Router();
const Results = require("../models/schemas/results");
const Users = require("../models/schemas/users");

router.get("/", (req, res) => {
    Results.find({}, (err, results) => {
      if (err) {
        console.log(err);
        res.status(500).json({ status: 'Not OK', err });
      } else {
        res.status(200).json({ status: 'OK', results });
      }
    });
});

router.post("/save", (req, res) => {
    new Results(req.body).save((err, result) => {
        if (err) {
            console.log(err);
            res.status(500).json({status: 'Not OK', err })
        } else {
            res.status(200).send({ status: 'OK', result });
        }
    });
});

router.post("/search", (req, res) => {
    const query = {};
    if (req.body.points) {
        query.points = req.body.points;
    }
    if (req.body.category) {
        query.category = req.body.category;
    }
    if (req.body.difficulty) {
        query.difficulty = req.body.difficulty;
    }
    if (req.body.quizType) {
        query.quizType = req.body.quizType;
    }

    Results.find(query, (err, results) => {
        if (err) {
            console.log(err);
            res.status(500).json({status: 'Not OK', err});
        } else if (!results) {
            res.status(404).json({status: 'Not OK', msg: 'Not found'});
        } else {
            res.status(200).json({status: 'OK', results})
        }
    });
});

router.get('/user/:id', (req, res) => {
    Results.find({userID: req.params.id}, async (err, results) => {
        if (err) {
            console.log(err);
            res.status(500).json({status: 'Not OK', err});
        } else if (!results) {
            res.status(404).json({status: 'Not OK', msg: 'Not found'});
        } else {
            const user = await Users.findOne({_id: req.params.id}).exec();
            res.status(200).json({status: 'OK', results, username: user.username, userID: user._id})
        }
    });
});

module.exports = router;
