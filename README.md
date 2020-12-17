## Let's Get Quizzical
![Our Let's Get Quizzical Logo](https://letsget-quizzical.herokuapp.com/static/media/invquizzical_logowink.b1d103f6.svg)

**Let's Get Quizzical** is a quiz app inspired by Olivia Newton John's 1981 hit, Let's Get Physical, in terms of the name and the 80s design.

This app allows a user to create and delete an account and sign in. Users are able to choose either easy, medium or hard difficulties, and between multiple choice or true and false quiz types. User's quiz results can then be viewed on a leaderboard or their own user history page. 

This is a student-built project app made by Katie, Tam and Emily during Code Nation's 12 Week bootcamp. [See here](https://wearecodenation.com/event/master-coding/) for more information.

To build this app we used the MERN stack. A combination of MongoDB, Express JS, React JS and Node JS. We also used Axios to connect the server and client together through Express JS. 

## How To View The App

 - To view the app, click [HERE](https://letsget-quizzical.herokuapp.com/about)
 - Create an account using our signup component with an email address, username and password.

## Cloning The App

 - To clone our app, go to https://github.com/tamjankowska/lets-get-quizzical
 - git clone the repository into your local directory


## How To Install The Dependencies

 - npm run bootstrap (this installs all dependencies in the frontend and backend)

## How To Run The App

 - npm run dev (this concurrently runs the frontend and backend)
 - npm run backend (runs the backend only)
 - npm start (runs the frontend only)

## Connection String

 - For security reasons we used our own Mongo Atlas string which is stored in a .env file. 
 - You will need to set your own connection string up in order to store and retrieve your own data, but your environmental variable must be called, '**mongoConnectionString**'.