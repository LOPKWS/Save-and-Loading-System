//Importing Libaries
const express = require('express')
const Datastore = require('nedb')

var liveServer = require("live-server");

var params = {
	port: 800, // Set the server port. Defaults to 8080.
	host: "192.168.1.70", // Set the address to bind to. Defaults to 0.0.0.0 or process.env.IP.
	root: "./public/main", // Set root directory that's being served. Defaults to cwd.
  open: false
};
liveServer.start(params);

//Seeting the Local Host to a variable
const port = 800

//creating an express server
const app = express();

//creatinga nedb data base and naming it Login_info
const database = new Datastore('Login_info.db');

//Creating a setup function to set initial files for specific urls
//and accesing the data base
function setup(){
  //listeinng at our set port value
  app.listen(port, () => console.log(`Listening at ${port}`));

  //At our base url 'l' loading the static index.html file
  //And other files related to it from the path public/main
  app.use(express.static('public/main'))

  //At the url /Login loading the static index.html file
  //And other files related to it from the path public/login
  app.use('/Login', express.static('public/login'))

  //At the url /Signin loading the static index.html file
  //And other files related to it from the path public/sign_in
  app.use('/Signin', express.static('public/sign_in'))

  //Allowing our server to read and respond json files
  app.use(express.json( ))

  //Loading our data base and if ir dosent exist it makes it
  database.loadDatabase();
}
setup()

//Getting the user information from our data base
//And sending it to the client when requested from
//The login index.html
app.get('/user_info_req', (request, response) => {
  //type user is used for this purpose only
  database.find({type: 'user'}, (err, data) => {
    //responding with the user data
    response.json(data);
  });
});

//Getting information from the url /user_info sent from
//The client side java script
app.post('/user_info', (req, res) => {
  //Adding the data the server receivied to our database
  database.insert(req.body)
})
