const { MongoClient, ObjectID } = require('mongodb');



MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
	if(err){
		return console.log('unable to connect to mongodb server'); //using 'return' so that it ends the function here if there is an error
	}
	console.log('connected to MongoDB server 😁')



	db.collection('Users').findOneAndUpdate({_id: new ObjectID("5a47d4132ac472d7eee5eb35")}, {
		$set: {
			name: 'Briguy',
			sexy: true
		},
		$inc: {
			age: -10,
		}
	}, {
		returnOriginal: false
	}).then((response) => {
		console.log(response);
	})


	// db.collection('Todos').findOneAndUpdate({ // 1st arg: filter (find by)
	// 	_id: new ObjectID("5a47d5002ac472d7eee5eb50")
	// }, { // 2nd argument update operator ($set, $inc, $rename, )
	// 	$set: {
	// 		completed: true
	// 	}
	// }, { // 3rd argument options
	// 	returnOriginal: false
	// }).then((result) => {
	// 	console.log(result);
	// });
	
});