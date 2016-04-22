import { Groups } from '../lib/collections.js';

Template.partChat.helpers({
	getClass () {
		console.log(this);
		if(this.user === Meteor.user().username) {
			return 'me'
		}
		else {
			return 'them'
		}
	}
})

Template.partChat.events({
	'submit .chatbox' : function (event) {
		console.log(this);
		event.preventDefault();
		console.log(event.target.text);
		var message  = {
			text: event.target.text.value,
			user: Meteor.user().username,
			time: new Date()
		}
		
		Groups.update({_id: this._id},{
			$push: {chat: message}
		})
	}
})

