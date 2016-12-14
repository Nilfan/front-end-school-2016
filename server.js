'use strict';

const Hapi = require('hapi');
const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/todolist');


const server = new Hapi.Server();
server.connection({
    host: '0.0.0.0',
    port: 3000,
    routes: {cors: true}
});


var toDoSchema = mongoose.Schema({
	id: Number,
	text: String,
	state: Number,
	todate: Date

});

var ToDo = mongoose.model('ToDo', toDoSchema);


server.route({
    
    method: 'GET',
    path:'/api/todos',
    handler: function (request, reply) {
        ToDo.find({}, function (err, todos) {
            reply(todos);
            
            //console.log(typeof todos);
        });
        
    }
});

server.route({
	method: 'GET',
	path:'/api/todos/{id}',
	handler: function(request, reply){
        var id = encodeURIComponent(request.params.id);
        var todo = ToDo.findOne({ id:id });
       	reply(todo);
    }
});


server.route({
    method: 'PUT',
    path:'/api/todos/{id}',
    handler: function (request, reply) {
        console.log('PUTED');
    	var id = request.params.id;
		var todoText = request.payload.text;
        var todoState = request.payload.state;
        var todoToDate = request.payload.todate;
    	ToDo.findOne({ id: id }, function (err, doc){
            console.log(doc);
                if(todoText !== null){
        		    doc.text = todoText;
                }
                if(todoState !== doc.state){
                    doc.state = todoState;
                }
                if(todoToDate !== null){
                    doc.todate = todoToDate;
                }
        		doc.save();
        		reply(doc);
      	});
    }
});



server.route({
    method: 'POST',
    path:'/api/todos',
    handler: function (request, reply) {
    	ToDo.findOne().sort('-id').exec(function(err, item){
            var todo = new ToDo({
                id: item.id + 1,
                text: request.payload.text,
                state: 0,
                todate: request.payload.todate
            });
            console.log("did created");
            todo.save();
            return reply(todo);
        });


    }
});

server.route({
    method: 'DELETE',
    path:'/api/todos/{id}',
    handler: function (request, reply) {
        ToDo.findOne({ id:request.params.id}).remove(function(err,doc){
            console.log('Deleted');
            reply(doc);
        });
    }
});


/*
server.route({
    method: 'GET',
    path: '/api/todos/count',
    handler: function(request,reply){
        var c = 0;
        c = ToDo.count({}, function(err, count){
                //c = count;
            });
        reply(c);
    }
});


server.route({
    method: 'GET',
    path: '/api/todos/max',
    handler: function(request,reply){
        var it;
        var c = ToDo.findOne().sort('-id').exec(function(err, item){
                console.log(it);
                it = item.id;
                return reply(it);
            });
    }
});

*/

// Start the server
server.start((err) => {
    if (err) {
        throw err;
    }
    console.log('Server running at:', server.info.uri);
});
