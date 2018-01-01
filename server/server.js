// this is the root of the application.   where you start.
// only responsible for our routes

//local imports
const {mongoose} = require('./db/mongoose')
const {Todo} = require('./models/todo');
const {User} = require('./models/user');

//library imports
const express = require('express');
const app = express();
const bodyParser = require('body-parser'); // turns json into object

app.use(bodyParser.json()); // turns req.body into object 
// ... so you can grab req.body.text, etc


app.post('/todos', (req, res)=>{
	const todo = new Todo({
		text: req.body.text
	})

	todo.save() // .save() returns a promise...
	.then((doc) => {
		res.send(doc);
	}, (e) => {
		res.status(400).send(e);
	})

})


module.exports = {
	app,
};




















app.listen(3000, () => {
	console.log('started on port 3000 😇');	
});

















