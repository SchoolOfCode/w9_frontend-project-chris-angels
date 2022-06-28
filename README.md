# BOOTCAMP ADIUTOR

A centralised database for bootcampers to take notes, share resources, and receive help with a built in debugging tool. Built with React, JavaScript, Material UI, Auth0 and Css. Tested with jest, supertest and cypress.

Project Status
This project is currently in development. Users can view and add entries to their diary, look for resources on specific topics, use the panic button to debug their code step by step and be given a list of names of people that are happy to help with a given topic.

## Project Screen Shots

###### Main Page:
<img src="https://user-images.githubusercontent.com/104023970/176168071-6a5f5480-92b4-4222-9c7d-fed646917e1d.PNG" width="400" height="auto">
###### Resources feature:
<img src="https://user-images.githubusercontent.com/104023970/176168091-b80685e6-4a20-41fc-a775-73e0fff66e1b.PNG" width="400" height="auto">
###### Diary feature:
<img src="https://user-images.githubusercontent.com/104023970/176168120-92e3dd7f-788f-4a5f-9033-2bfeff86aecc.PNG" width="400" height="auto">
###### Diary form:
<img src="https://user-images.githubusercontent.com/104023970/176168131-7b43e3ab-35f0-496c-9ba5-b22231766d69.PNG" width="400" height="auto">

## Installation and Setup Instructions

To get the full experience of the app on your computer, first go to [w9_backend-project-chris-angels](https://github.com/SchoolOfCode/w9_backend-project-chris-angels) and follow installation instructions there to set up your server and database.

Clone down this repository. You will need node and npm installed globally on your machine.

### Installation:

npm install

To Run Test Suite:

npm test

To Start the App:

npm start

To Visit App:

localhost:3000

Reflection
What was the context for this project? (ie: was this a side project? was this for Turing? was this for an experiment?)
What did you set out to build?
Why was this project challenging and therefore a really good learning experience?
What were some unexpected obstacles?
What tools did you use to implement this project?
This might seem obvious because you are IN this codebase, but to all other humans now is the time to talk about why you chose webpack instead of create react app, or D3, or vanilla JS instead of a framework etc. Brag about your choices and justify them here.
Example:
This was a 3 week long project built during my third module at Turing School of Software and Design. Project goals included using technologies learned up until this point and familiarizing myself with documentation for new features.

Originally I wanted to build an application that allowed users to pull data from the Twitter API based on what they were interested in, such as 'most tagged users'. I started this process by using the create-react-app boilerplate, then adding react-router-4.0 and redux.

One of the main challenges I ran into was Authentication. This lead me to spend a few days on a research spike into OAuth, Auth0, and two-factor authentication using Firebase or other third parties. Due to project time constraints, I had to table authentication and focus more on data visualization from parts of the API that weren't restricted to authenticated users.

At the end of the day, the technologies implemented in this project are React, React-Router 4.0, Redux, LoDash, D3, and a significant amount of VanillaJS, JSX, and CSS. I chose to use the create-react-app boilerplate to minimize initial setup and invest more time in diving into weird technological rabbit holes. In the next iteration I plan on handrolling a webpack.config.js file to more fully understand the build process.

Project Breif

National Bootcamp - Week Nine Project Brief
For your project, you’ll be using what you’ve learned on the course so far to try and improve the lives of your users. In this case, the users will be close to home: bootcampers!

To do this, you’ll need to take the time to understand your user (a bootcamper), their experiences, and their problems. Specifically, it might be good to focus on how to enhance the remote experience of a bootcamper, or what can help them with the vast amount of learning there is to do as a new developer. What do they need? What problem might they have that your application could solve for them? How can you get into the mindset of your user and keep them at the centre of your problem-solving?

The high level outcomes from this project should be:

A minimum viable product (MVP) showcasing an innovative full stack application which meets the user need you’ve identified
A presentation, complete with how you worked as a team and a demonstration of the project
Your project application might include the following:

Include a user experience created in React
Build a REST API which is used by your front-end
Be supported by a Postgresql database with multiple tables
Be built and managed in an agile way
Utilise testing for ensuring robust code
Remember, you only have a few days to code a solution, so being agile is key. That means brainstorming what you want to build, and working in sprints to deliver value each time. After each sprint, you can reassess and either continue on course or iterate towards a better solution. Have a plan which is incremental steps, rather than all or nothing.

Click the link to see the Project Guidelines
