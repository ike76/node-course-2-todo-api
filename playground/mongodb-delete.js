const { MongoClient, ObjectID } = require('mongodb');



MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
	if(err){
		return console.log('unable to connect to mongodb server'); //using 'return' so that it ends the function here if there is an error
	}
	console.log('connected to MongoDB server 😁')


	db.collection('Users').findOneAndDelete({name: 'Brian'}).then((response) => {
		console.log(response)
	})
	// deleteMany
	// db.collection('Todos').deleteMany({text: 'eat lunch'}).then((result) => {
	// 	console.log(result);
	// });

	// deleteOne
	// db.collection('Todos').deleteOne({text: 'eat a poo'}).then((result) => {
	// 	console.log(result)
	// })

	//findOneAndDelete
	// db.collection('Todos').findOneAndDelete({completed: false}).then((result) => {
	// 	console.log(result);
	// })

	//find one and delete
	// db.collection('Users').findOneAndDelete({_id: new ObjectID('5a467b75840fb8602f466550')}).then((response) => {
	// 	console.log(response);
	// })

	// deleteAll
	// db.collection('Users').deleteMany({name: 'Jimmy Shiblets'}).then( response => console.log(response));

	// db.collection('Users').deleteOne({name: 'Bauer'}).then(response => console.log(response.result))


	// db.close();
});