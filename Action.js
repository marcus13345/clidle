const Person = require('./resources/Person');

module.exports = class Action {
	
	_people = [];
	_resources = [];

	constructor(duration, resources) {
		this._duration = duration;
		this.requiredResources = resources;
	}

	connected() {
		// console.log(this._resources);
		const pendingResources = [];
		try {
			for(const resource of this.requiredResources) {
				for(let i = 0; i < resource.quantity; i ++) {
					
					const maybeResource =
						this._links.util.getAvailableResource(
							resource.type
						);
					maybeResource.claim();
					pendingResources.push(maybeResource);
					if(maybeResource instanceof Person) {
						this._people.push(maybeResource);
					}
				}
			}
			// console.log(pendingResources);
			for(const resource of pendingResources) {
				resource.employ();
			}
		} catch (e) {
			console.log(e);
			for(const resource of pendingResources) {
				resource.release();
			}
		}

		this.begin();
	}

	async begin() {
		await new Promise(res => setTimeout(res, this._duration));
		this.finished();
	}

	finished() {
		for(const resource of this._resources)
			resource.release();
		this.done();
	}
}