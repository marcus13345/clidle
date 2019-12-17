const EventEmitter = require('events');
const emitter = new EventEmitter();

process.stdout.on('data', buffer => {
	let commandString = buffer.toString().trim();
	emitter.emit('command', commandString.split(' '));
})

module.exports = emitter;