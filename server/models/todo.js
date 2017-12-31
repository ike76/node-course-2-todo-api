const mongoose = require('mongoose');


const Todo = mongoose.model('Todo', {
	text: {
		type: String,
		required: true,
		minlength: 1,
		trim: true,
	},
	completed: {
		type: Boolean,
		default: false,
	},
	completedAt: {
		type: Number,
		default: null,
	},
});


module.exports = {Todo};



// const toDo3 = new Todo({
// 	text: 'eat lunch a bunch'
// });

// toDo3.save().then((doc) => {
// 	console.log(JSON.stringify(doc, 0, 2));
// }, (err) => {
// 	console.log('nope', err);
// })