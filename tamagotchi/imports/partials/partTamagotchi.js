import { TamaGez } from '../lib/collections.js';


Template.partTamagotchi.helpers({
	isAlive() {

		return this.tamagotchi.alive
	},
	needs() {
		return this.tamagotchi.needs
	},
	endTime() {
		return new Date(this.endTime)
	},
	status() {
		return tamStatus(this)
	}
})



Template.partTamagotchi.events({
	'change .meter' : function (event) {
		console.log(this)
	},
	'click .do': function (event) {
		event.preventDefault();
		image = document.querySelector('.image-container img');
		image.src = '../sprites/' + this.genre + '.gif';
		setTimeout(function(){ image.src = '../sprites/default.png'; }, 2000);
		console.log(image);
		if(TamaGez.findOne() === undefined) {
				var bool = true
			} else {
				var bool = false
			}
		
		var dataset = Template.instance().data;
		 Meteor.call('needs.update', dataset._id, this.genre, this.addedTime, bool, function(error, affectedDocs) {
			if(error) {
				console.log(error);
				throw new Meteor.Error(500, error.message);
			}
			else {
				console.log('succes')
			}
		});
	},
	'click .reset' : function (event) {
		event.preventDefault();
		console.log(this);
		var dataset = Template.instance().data;
		if(this.groupName) {
			console.log('group')
			groupReset(this._id)
		}
		else {
			console.log('tam')
			tamReset(this._id)
		}
		
	}
})

