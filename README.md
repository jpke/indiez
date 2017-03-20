# Task Manager

Task Manager displays, updates, creates and deletes tasks. Displayed tasks can be filtered by **end before** date and **created after** date.

##Task
Each task displays five items:
- title
- end date
- description
- created date
- creator

##Run
To develop this app locally:
- download or clone repo
- run `npm install`
- run `npm start`
  - this starts a development server on `localhost:3000`
- to communicate with the express server:
  - comment out line 5 and uncomment line 4 in `./src/actions/taskActions.js`
  - create a `.env` file in the root directory of this app
    - add `DATABASE_URI` :: connection to your mongo database `'mongodb://<database name>'`
  - open a new tab in terminal, then run `node server.js` in it

##Technologies

| **Tech** | **Description** |
|----------|-------|
|  [React](https://facebook.github.io/react/)  |   Javascript framework for single page apps   |
|  [Redux](http://redux.js.org/)  |   Application state management for react    |
|  [Express](http://expressjs.com/)  |   Server framework for Node   |
|  [MongoDB](https://www.mongodb.com/)  |   No-SQL database    |

## API
POST /task :: creates a new task
 - requires name, end, description and createdBy in request body

GET /task/:createdOrEnd/:date :: retrives selected tasks
  - /task/all/<any number> :: retrieves all tasks
  - /task/created/<UTC time> :: retrieves all tasks created after specified date
  - /task/end/<UTC time> :: retrieves all tasks ending before specified date

PUT /task :: updates task
 - requires _id, name, end, description, and createdBy in request body

DELETE /task/:taskID :: deletes specified task

##
Copyright (c) 2017 JP Earnest
