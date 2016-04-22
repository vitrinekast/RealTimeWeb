import { TamaGez } from '../lib/collections.js';

Template.partHistory.helpers({
	isAlive() {
		return this.tamagotchi.alive
	},
	history() {
		
		var array = this.history;
		var b = array.reverse()
		return b.slice(0,10);
		
	}
})

