// const MongoClient = require('mongodb').MongoClient;
const { MongoClient, ObjectID } = require('mongodb');



MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
	if(err){
		return console.log('unable to connect to mongodb server'); //using 'return' so that it ends the function here if there is an error
	}
	console.log('connected to MongoDB server 😁')

	// db.collection('Todos').find({
	//  _id: new ObjectID("5a468b7b2ac472d7eee5ad42") 
	// }).toArray().then((docs) => {
	// 	console.log('Todos');
	// 	console.log(JSON.stringify(docs, undefined, 2));
	// }, (err) => {
	// 	console.log('unable to fetch todos', err);
	// })

	// 	db.collection('Todos').find().count().then((count) => {
	// 	console.log(`Todos count: ${count}`);
	// }, (err) => {
	// 	console.log('unable to fetch todos', err);
	// })

	
	db.collection('Users').find({name: 'Bauer'}).toArray().then((arr) => {
		console.log(JSON.stringify(arr, 0, 2))
	})

	// db.close();
});