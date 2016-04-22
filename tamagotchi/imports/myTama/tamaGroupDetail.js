import { Groups } from '../lib/collections.js';

Template.tamaGroupDetail.onCreated(function () {
	console.log(this)
});

Template.tamaGroupDetail.helpers({
	group () {
		var id = FlowRouter.getParam('groupId');

		return Groups.findOne({_id: id})
	},
	members () {
		console.log(this.members)
		return this.members
	},
	blah () {
		console.log(this)
	}
})
Template.tamaGroupDetail.events({
	'click .remove' : function () {
		event.preventDefault();
		console.log(this);
		Groups.update({_id: this._id}, {
			$pull: {members: {
				id: Meteor.userId(),
				username: Meteor.user().username
			}}
		})
		window.location.pathname = '/myTama'
	}
})