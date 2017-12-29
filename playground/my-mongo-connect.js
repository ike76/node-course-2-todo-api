const MongoClient = require('mongodb').MongoClient;

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {

	if (err) { // can't connect to database
		return console.log('unable to connect to db')
	}

	db.collection('Users').insertOne({
		name: 'Jimmy Shiblets',
		age: 100,
		location: 'alabama',
	}, (err, response) => {
		if(err){  // cant add that person
			return console.log('couldnt add User to db', err);
		}

		console.log(response.ops[0]._id)
	})
	db.close()
})