const express = require("express");
const router = express.Router();
const Users = require("../models/schemas/users");
const Results = require("../models/schemas/results");
const bcrypt = require('bcrypt');

router.get("/", (req, res) => {
  Users.find({}, (err, users) => {
    if (err) {
      console.log(err);
      res.status(500).json({ status: 'Not OK', err });
    } else {
      res.status(200).json({ status: 'OK', users });
    }
  });
});

router.post("/signup", async (req, res) => {
  if (req.body.password !== req.body.passwordCheck) {
    return res.status(400).json({ status: 'Not OK', err: 'Passwords Don\'t match' })
  }
  req.body.password = await bcrypt.hash(req.body.password, 10)
  new Users(req.body).save((err, result) => {
    if (err) {
      console.log(err);
      res.status(500).json({ status: 'Not OK', err });
    } else {
      res.status(200).send({ status: 'OK', result });
    }
  });
});

router.post("/search", (req, res) => {
  const query = {};
  if (req.body.username) {
    query.username = req.body.username;
  }
  if (req.body.emailAddress) {
    query.emailAddress = req.body.emailAddress;
  }
  Users.find(query, (err, results) => {
    if (err) {
      console.log(err);
      res.status(500).json({ status: 'Not OK', err });
    } else if (!results) {
      res.status(404).json({ status: 'Not OK', msg: 'No users found!' });
    } else {
      res.status(200).json({ status: 'OK', results });
    }
  });
});

router.get("/id/:id", (req, res) => {
  Users.findOne({ _id: req.params.id }, (err, user) => {
    if (err) {
      console.log(err);
      res.status(500).json({ status: 'Not OK', err });
    } else if (!user) {
      res.status(404).json({ status: 'Not OK', err: `The user ${req.params.id} does not exist!` });
    } else {
      res.status(200).json({ status: 'OK', user });
    }
  });
});

router.delete("/id/:id", (req, res) => {
  Users.findOneAndDelete({ _id: req.params.id }, (err, user) => {
    if (err) {
      console.log(err);
      res.status(500).json({ status: 'Not OK', err });
    } else if (!user) {
      console.log(err);
      res.status(404).json({ status: 'Not OK', err: `The user ${req.params.id} you are trying to delete does not exist!` });
    } else {
      res.status(200).json({ status: 'OK', user, msg: `${req.params.id} has been deleted` });
    }
  });
});

router.post("/login", async (req, res) => {
  const { email, password } = req.body;
  if (await Users.checkPassword(email, password)) {
    Users.findOne({ emailAddress: email }, (err, user) => {
      if (err) {
        console.log(err);
        res.status(500).json({ status: "Not OK", err });
      } else if (!user) {
        res.status(404).json({ status: "Not OK", err: `User doesn't exist.` });
      } else {
        res.status(200).json({ status: `OK`, emailAddress: user.emailAddress, username: user.username });
      }
    });
    return;
  }
  res.status(401).json({ status: "Not OK", err: `Unauthorised.` });
});

router.get('/:id', function (req, res) {
  Users.findOne({ _id: req.params.id }, (err, user) => {
    if (err) {
      console.log(err);
      res.status(500).json({ status: "Not OK", err });
    } else {
      res.status(200).json({status: 'OK', user});
    }
  });
})

router.post('/leaderboard', (req, res) => {
    Users.find({}, async (err, users) => {
        if (err) {
            console.log(err);
            res.status(500).json({status: 'Not OK', err});
        } else {
            const results = await Promise.all(users.map(async (user) => {
                const results = await Results.find({userID: user._id}).exec()
                return {username: user.username, results}
            }));
            res.status(200).json({status: 'OK', results});
        }
    });
})
module.exports = router;
