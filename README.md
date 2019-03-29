# StarWars App
## Introduction
>With StarWars app you can search for information about films and characters of the StarWars saga
>
>So when you travel to a new city you can catch the favourites places of your friends or the ones you have already saved.
>
>MyMarkers is deployed at Heroku and here you have the link [MyMarkers](https://mymarkers.herokuapp.com/)

## Installation 
- Clone the repositorie
- On client folder `npm install`
- On server folder `npm install`

- At client folder, create a `.env.development` file and set this var: `REACT_APP_API_URL=http://localhost:5000`

- At server folder, create a `.env`file and ser this `PORT=5000 ENV=development`

- On the terminal on client folder run `npm run start`
- On the terminal on server folder run `npm run dev`

>If you make that, the app will generate automatically a Collection called StarWars at mongo in `mongodb://localhost/StarWars`, run MongoDB Compass to check it out

## Instructions 

>As a beta phase at StarWars you can Sign Up and Log In at the landing page, for the sign up you will need to enter an email format, go to the Log In and fill the form 

>Once you are loggedin you can search for a film of StarWars and watch the films you have already seacherd before

## Comming features 
As you can see we are already developing some improvements in order to finish our MVP, the main goals are to:

* Finish Look&Feel  
* Add a component to render the characters of the Star Wars saga
* Make a deployment at Heroku 

## Technologies used
- NodeJS
- Express
- Passport
- Bcrypt
- MongoDB
- Mongoose
- MongoDB
- JavaScript
- SWAPI, for collecting data