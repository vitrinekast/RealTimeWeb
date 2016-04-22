import { Groups } from '../lib/collections.js';

Template.adopt.onCreated(function () {
	
})

Template.adopt.helpers({
	message: function() {
		return Session.get("message");
	},
	message_defined: function () {
		return Session.equals("message", undefined) ? false : true;
	}

})


Template.adopt.events({
	'submit .CreateGroup' : function (event) {
		event.preventDefault();
		console.log('go')
		var name = event.target.groupName.value.trim();
		var Name = name.charAt(0).toUpperCase() + name.slice(1);
		var imageArray = ['Gozarutchi.png','Kuchipatchi.png','Makiko.png','Mametchi.png','Memetchi.png','Mimitchi.png','tam.png','Violetchi.png' ];
		var num = Math.floor((Math.random() * imageArray.length));
		var randomImage = 'tamagotchis/' + imageArray[num];

		if(Groups.find({groupName:Name},{}).count() > 0) {
			Session.set("message", "Deze groepsnaam is helaas al bezet");
			return false;
		}
		else {
			Meteor.call("group.create", Name, randomImage, function(error, result) {
			if(error) {
				console.log('error')
				Session.set("message", error);
				return false
			}
			if(result) {
				console.log('result')
				Session.set("message", result);
				window.location.pathname = '/myTama'
				return false
			}
		})
		}
		
	}
	
})