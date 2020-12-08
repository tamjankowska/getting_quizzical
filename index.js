const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const session = require("express-session");
const app = express();
const mongoose = require('mongoose');

const indexRouter = require('./routes/indexRouter');
const usersRouter = require('./routes/usersRouter');
const resultsRouter = require('./routes/resultsRouter');

require("dotenv").config();

mongoose.connect(process.env.mongoConnectionString, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})

const connection = mongoose.connection;

connection.once('open', function () {
    console.log('MongoDB database connection established successfully!');
})

if (process.env.NODE_ENV === 'production' || process.env.NODE_ENV === 'staging') {
    app.use(express.static('frontend/build'));
    app.get('*', (req, res) => {
      res.sendFile(path.join(__dirname + '/frontend/build/index.html'));
    });
}

app.use(cors());
app.use(session({resave: true, saveUninitialized: true, secret: 'asdf'}));
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.use('/api/', indexRouter);
app.use('/api/users', usersRouter);
app.use('/api/results', resultsRouter);

app.listen(process.env.PORT || 5000, () => {
    console.log('App is online.');
});
