module.exports = class Person extends require('../Resource.js') {
	start() {
		this._first = this._data.first;
		this._last = this._data.last;
		this._age = this._data.age;
	}

	connected() {
		this.say('Heya!');
		// setTimeout(this.eat.bind(this), 10000);
		// this.eat();
	}

	// eat() {
	// 	const food = this._links.util.getAvailableResource(Food);
	// 	this.me('had some food');
	// }

	say(str) {
		console.log(`${this.name}:`, str)
	}

	me(str) {
		console.log(`${this.name}`, str)
	}

	get name() {
		return `${this._first} ${this._last}`;
	}

	toString() {
		return `${this.name}, ${this._age}`;
	}
}