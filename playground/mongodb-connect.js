// const MongoClient = require('mongodb').MongoClient;
const { MongoClient, ObjectID } = require('mongodb');



MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
	if(err){
		return console.log('unable to connect to mongodb server', err); //using 'return' so that it ends the function here if there is an error
	}
	console.log('connected to MongoDB server 😁')


	// db.collection('Todos').insertOne({
	// 	text: 'this is what i want to do',
	// 	completed: false
	// }, (err, result) => {
	// 	if (err) {
	// 		return console.log('unable to insert todo', err)
	// 	}

	// 	console.log(JSON.stringify(result.ops, undefined, 2));
	// });

	//insert new doc into 'Users' collection (name, age, location)
	// insertOne

	// db.collection('Users').insertOne({
	// 	name: 'Bauer',
	// 	age: 0,
	// 	location: 'Nashville TN',
	// }, (err, result) => {
	// 	if (err) {
	// 		console.log('unable to add user to db', err);
	// 	}	
		
	// 	console.log(`✨  user was added.  ✨`)
	// 	console.log(result.ops[0]._id.getTimestamp())
	// })

	db.close();
});