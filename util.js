const Person = require('./resources/Person.js');
const Resource = require('./Resource.js');

module.exports = class util {

	get commands() {
		return {
			people: this.listPeople.bind(this),
			go: this.doAction.bind(this)
		}
	}

	listPeople() {
		for(const inst of this._collexion.instances) {
			if(inst instanceof Person) {
				console.log("" + inst);
			}
		}
	}

	doAction(args) {
		try {
			// console.log(`./actions/${args[0]}.js`);
			const actionClass = require(`./actions/${args[0]}.js`);
			// console.log(actionClass);
			try {
				this._collexion.createInstance({
					Code: actionClass,
					Data: {}
				})
			} catch (e) {
				console.log(`failed to ${args[0]}`)
			}
		} catch (e) {
			// console.log(e)
			throw new Error('Command not recognized');
		}
	}

	getAvailableResource(type) {
		const typeString = type;
		// console.log('getting a', typeString)
		for(const inst of this._collexion.instances) {
			if(!(inst instanceof Resource)) continue;
			if(inst instanceof type) {
				if(!inst.busy) return inst;
			}
		}
		// console.log('couldnt find a', typeString)
	}
}