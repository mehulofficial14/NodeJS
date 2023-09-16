const EventEmitter = require('events');
var url = 'http://mylogger.io/log';
class Logger extends EventEmitter {
    log(message) {
        console.log(message);
        this.emit('myEvent', { id: 1, url: 'url' });
    }

}
module.exports = Logger;

/*
const EventEmmitter = require('events');
const emitter = new EventEmmitter();
var url = 'http://mylogger.io/log';
function log(message) {
    console.log(message);
    emitter.emit('myEvent', { id: 1, url: 'url' });
}
module.exports = log;
*/

/*
var url = 'http://mylogger.io/log';
function log(message) {
    console.log(message);
}
module.exports.log = log;
//module.exports.url = url;
//module.exports.endPoint = url;
// console.log(module);
*/