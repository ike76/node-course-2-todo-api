const expect = require('expect');
const request = require('supertest');

const {app} = require('./../server');
const {Todo} = require('./../models/todo');

beforeEach((done) => {
	Todo.remove({}).then(() => done());
});

describe('POST /todos', () => {

	it('should create a new todo', (done) => {
		var text = 'wash the car';
		request(app)
			.post('/todos')
			.send({text})
			.expect(200)
			.expect((res) => {
				// console.log(`response is ${res.body.text === 'wash the car'}`)
				expect(res.body.text).toBe(text);
			})
			.end((err, res) => {
				if (err) {
					return done(err) // 'return' to end it here if err
				}

				Todo.find().then((todos) => {
					expect(todos.length).toBe(1);
					expect(todos[0].text).toBe(text);
					done();
				}).catch((e) => done(e));
			})
	})

	it('should not create a new todo with bad data', (done) => {
		request(app)
			.post('/todos')
			.send({})
			.expect(400)
			.end((err, res) => {
				if(err) {
					return done(err)
				}

				Todo.find().then((todos) => {
					expect(todos.length).toBe(0);
					done();
				}).catch((e) => console.log(e))

			})
	})


})