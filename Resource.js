module.exports = class Resource {

	claimed = false;
	employed = false;

	claim() {
		if(this.claimed) throw new Error('Resource already claimed!')
		// console.debug(this.toString(), 'claimed', this.claimed);
		this.claimed = true;
		// console.debug(this.toString(), 'claimed', this.claimed);
	}

	employ() {
		if(this.employed) throw new Error('Resource already employed!')
		// console.debug(this.toString(), 'employed', this.employed);
		this.employed = true;
		this.claimed = false;
		// console.debug(this.toString(), 'employed', this.employed);
	}

	release() {
		if(!this.busy) throw new Error('Resource wasnt busy!')
		// console.debug(this.toString(), 'released', !this.busy);
		this.claimed = false;
		this.employed = false;
		// console.debug(this.toString(), 'released', !this.busy);
	}

	get busy() {
		return this.claimed || this.employed;
	}
}