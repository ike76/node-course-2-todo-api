const {ObjectID} = require('mongodb');
const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

// const id = '5a4a8e457e4e3cb887be912199';

// if(!ObjectID.isValid(id)){
// 	console.log('HEY..  the Id is not valid');
// }

// mongoose automatically makes the string (id) into an id.
// so you don't have to do new ObjectID(id) etc.

// Todo.find({ // returns an array of object(s)
// 	_id: id
// }).then((todos) => {
// 	console.log('find() Todos:', todos)
// })


// Todo.findOne({ // returns an object (not an array)
// 	_id: id
// }).then((todo) => {
// 	console.log('findOne() todo:', todo)
// })

// Todo.findById(id).then((todo) => { // returns object
// 	if(!todo){
// 		return console.log('id not found')
// 	}
// 	console.log('findById() todo:', todo)
// }).catch((e)=> console.log(e))

const id = '5a47f8a5b47534201a0101ca'

User.findById(id).then((user) => {
	if(!user) return console.log('unable to find user');
	console.log(JSON.stringify(user, 0, 2));
}).catch((e) => {
	console.log(`NOPE... 🤨 ${e}`);
})