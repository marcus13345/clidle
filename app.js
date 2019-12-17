const input = require('./input.js');
const {Collexion} = require('collexion');
const items = [
	{
		Code: require('./resources/Person.js'),
		Data: {
			first: 'Valerie',
			last: 'Thiesent',
			age: 22
		}
	},
	{
		Code: require('./resources/Person.js'),
		Data: {
			first: 'Jessica',
			last: 'Thiesent',
			age: 18
		}
	},
	{
		Code: require('./resources/Person.js'),
		Data: {
			first: 'Lauren',
			last: 'Thiesent',
			age: 23
		}
	}
]
const collexion = new Collexion({
	util: {
		Code: require('./util.js'),
		Data: {}
	},
});

for(const item of items) {
	collexion.createInstance(item);
}

input.on('command', ([command, ...args]) => {
	for(const inst of collexion.instances) {
		if(!('commands' in inst)) continue;
		if(command in inst.commands) {
			inst.commands[command](args);
		}
	}
})