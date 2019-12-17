const Person = require('../resources/Person.js');

module.exports = class Scavenge extends require('../Action.js') {
	constructor() {
		super(5000, [
			{ type: Person, quantity: 1 }
		]);
	}

	connected() {
		super.connected();
		console.log(this._people[0].name, 'went scavenging');
	}

	done() {
		const twigs = Math.floor(Math.random() * 5 + 1);
		const leaves = Math.floor(Math.random() * 2 + 1);
		console.log(this._people[0].name, `brought back ${twigs} twig${twigs > 1 ? 's' : ''} and ${leaves} lea${leaves > 1 ? 'ves' : 'f'}`);
	}
}