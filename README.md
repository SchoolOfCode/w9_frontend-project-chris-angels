# BOOTCAMP ADIUTOR

A centralised database for bootcampers to take notes, share resources, and receive help with a built in debugging tool. Built with React, JavaScript, Material UI, Auth0 and Css. Tested with jest, supertest and cypress.

## Project Status
This project is currently in development. Users can view and add entries to their diary, look for resources on specific topics, use the panic button to debug their code step by step and be given a list of names of people that are happy to help with a given topic.

## Project Screen Shots

Main page:

<img src="https://user-images.githubusercontent.com/104023970/176476180-433a3081-d055-4c64-bad8-7d2ed39752ca.PNG" width="400" height="auto">

Resources feature:

<img src="https://user-images.githubusercontent.com/104023970/176476197-85b8b01f-a594-4d0a-9b03-87eed5b41706.PNG" width="400" height="auto">

Diary feature:

<img src="https://user-images.githubusercontent.com/104023970/176476207-c3ce59c7-b207-4594-bba3-64b325867992.PNG" width="400" height="auto">

Note form feature:

<img src="https://user-images.githubusercontent.com/104023970/176476221-8a96bfb9-814d-44ba-83be-3198500a2dbe.PNG" width="400" height="auto">

## Installation and Setup Instructions

Clone down this repository. You will need node and npm installed globally on your machine. You will also need a free heroku account and a running heroku database app (instructions for setting it up at the bottom of the document).

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
