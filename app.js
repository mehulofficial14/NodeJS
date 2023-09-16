const http = require('http');
const server = http.createServer((req, res) => {
    if (req.url === '/') {
        res.write('Hello World');
        res.end();
    }
    if (req.url === '/api/courses') {
        console.log('Going to courses');
        res.write(JSON.stringify([1, 2, 3, 4]));
        res.end();
    }
});
server.listen(3000);
console.log('Listening on port 3000');

/*
const http = require('http');
const server = http.createServer();
server.on('connection', (socket) => {
    console.log('New Connection');
});
server.listen(3000);
console.log('Listening on port 3000');
*/

/*
const EventEmitter = require('events');
const Logger = require('./logger');
const logger = new Logger();
logger.on('myEvent', (arg) => {
    console.log('Listener', arg);
})
logger.log('message');
*/

/*
const fs = require('fs');
fs.readdir('$', function (err, files) {
    if (err) {
        console.log('Error', err);
    }
    else {
        console.log(files);
    }
})
*/

/*
const fs = require('fs');
const files = fs.readdirSync('./');
console.log(files);
*/

/*
const EventEmitter = require('events');
const emitter = new EventEmitter();
//emitter.addListener
emitter.on('myEvent', (arg) => {
    console.log('Listener called', arg);
})
emitter.emit('myEvent', { id: 1, url: 'url' });
*/

/*
const EventEmmitter = require('events');
const emitter = new EventEmmitter();
//emitter.addListener
emitter.on('myEvent', function (arg) {
    console.log('Listener called', arg);
})
emitter.emit('myEvent', { id: 1, url: 'url' });
*/

/*
const EventEmmitter = require('events');
const emitter = new EventEmmitter();
//emitter.addListener
emitter.on('myEvent', function () {
    console.log('Listener called');
})
emitter.emit('myEvent');
*/

/*
const os = require('os');
var totalMemory = os.totalmem();
var freeMemory = os.freemem();
console.log(totalMemory);
*/

/*
const path = require('path');
var pathObj = path.parse(__filename);
console.log(pathObj);
*/

/*
// var logger = require('./logger');
const logger = require('./logger');
function sayHello(name) {
    console.log('Hello ' + name);
}
// sayHello('Mehul');
// console.log(window);
// console.log(module);
// console.log(logger);
//logger.log('Hello')
*/