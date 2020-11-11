const express = require('express')
const Datastore = require('nedb')
const crypto = require('crypto')
const port = process.env.port || 800
const app = express();
const database = new Datastore('Login_info.db');

function setup(){
  app.listen(port, () => console.log(`Listening at ${port}`));
  app.use(express.static('public/main'))
  app.use('/Login', express.static('public/login'))
  app.use('/Signin', express.static('public/sign_in'))
  app.use(express.json( ))
  database.loadDatabase();
}

setup()

app.get('/user_info_req', (request, response) => {
  database.find({type: 'user'}, (err, data) => {
    //console.log(data)
    response.json(data);
  });
});

app.post('/user_info', (req, res) => {
  //console.log(req.body);
  database.insert(req.body)
})
