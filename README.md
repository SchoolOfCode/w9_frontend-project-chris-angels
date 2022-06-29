# BOOTCAMP ADIUTOR

A centralised database for bootcampers to take notes, share resources, and receive help with a built in debugging tool. Built with React, JavaScript, Material UI, Auth0 and Css. Tested with jest, supertest and cypress.

## Project Status
This project is currently in development. Users can view and add entries to their diary, look for resources on specific topics, use the panic button to debug their code step by step and be given a list of names of people that are happy to help with a given topic.

## Project Screen Shots

Main Page:

<img src="https://user-images.githubusercontent.com/104023970/176168071-6a5f5480-92b4-4222-9c7d-fed646917e1d.PNG" width="400" height="auto">

Resources feature:

<img src="https://user-images.githubusercontent.com/104023970/176168091-b80685e6-4a20-41fc-a775-73e0fff66e1b.PNG" width="400" height="auto">

Diary feature:

<img src="https://user-images.githubusercontent.com/104023970/176168120-92e3dd7f-788f-4a5f-9033-2bfeff86aecc.PNG" width="400" height="auto">

Diary form:

<img src="https://user-images.githubusercontent.com/104023970/176168131-7b43e3ab-35f0-496c-9ba5-b22231766d69.PNG" width="400" height="auto">

## Installation and Setup Instructions

To get the full experience of the app on your computer, first go to [w9_backend-project-chris-angels](https://github.com/SchoolOfCode/w9_backend-project-chris-angels) and follow installation instructions there to set up your server and database.

Clone down this repository. You will need node and npm installed globally on your machine.

### Installation:

npm install

### To Run Test Suite:

npm test

### To Start the App:

npm start

### To Visit App:

localhost:3000

## Reflection
We identified two major problems for bootcampers of School of Code: a lack of long term note storage kept in a centralised database, and a lack of a concrete system for debugging and then asking for help. 

We decided to create a one-stop-shop app for bootcampers to take notes, share resources, and receive help with a built in debugging tool.

The biggest challange while developing this project was the short timeframe of 5 days given to complete it, as well as independent project management that turned out to be more challanging than expected. Trello, Miro and Jamboard proved to be invaluable help to organise our workflow and complete the task on time. Trello was particularly useful for creation and distribution of tickets.

## Tech stack used for this project:
- React
- [React router](https://reactrouter.com/)
- Javascript
- Heroku
- Postgress
- CSS
- [Material UI](https://mui.com/)
- [Express](https://expressjs.com/)
- [Auth0](https://auth0.com/)
- [Jest](https://jestjs.io/)
- [Supertest](https://www.npmjs.com/package/supertest)

We decided to use React due to it's flexibility as well as becasue it was the framework most familiar to all the team members. We supported it with Auth0 API to allow users to log-in securely. Material UI allowed us to implement well designed elements quickly which was a big factor in finishing the project on time. As with react, our choice of testing tools like Jest and Supertest relied on their flexibility and familiarity. On the backend we used PostgreSQL in tandem with Heroku because of their simplicity and cost-free implementation, it allowed us to deploy the server and databases for free with enough database storage capacity for our app's needs.

##Guidlines for setting up a heroku database:


<img src="https://user-images.githubusercontent.com/104023970/176413067-04db2da7-1340-4abc-9482-1204f638df25.png" width="300" height="auto">
<img src="https://user-images.githubusercontent.com/104023970/176413076-d7e2b0d3-bc72-4796-80fc-54b65cf281f8.png" width="300" height="auto">
<img src="https://user-images.githubusercontent.com/104023970/176413080-62b3fa1a-6f25-4e34-b7d4-69b9fb22583a.png" width="300" height="auto">
<img src="https://user-images.githubusercontent.com/104023970/176413088-47f03933-3fa8-4d87-ac64-ac275815f2f6.png" width="300" height="auto">
