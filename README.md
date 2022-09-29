# MERN BoilerPlate App

## Info

This app contains a boiler plate set up with basic authentication already implemented.
A basic User model has already been created, A basic Redux store has already been created.

Main Technologies used includes:
- React
- Redux
- Express 
- MongoDB (Mongoose) 
- SCSS
- JsonWebToken
- GSAP

## Getting Started

- Make sure you have NodeJS and MongoDB installed locally (local MongoDB is used during development)
- After cloning the repo, cd to both client and server folders and install the dependencies with `npm install` in both directories


## Running the application

- Rename the `.exampleEnv` to `.env`
- Open two terminals
- Start the react frontend with `npm start`
- Start the express backend with `npm run start:dev`

 
## Middleware Info
A middleware function will add a `user` object/property to the `req` object.  
If the user is authenticated, the user object will be filled with the users mongo _id and isAuth set to true

example:
```
req.user  { _id: '123456789', isAuth: true };
```
