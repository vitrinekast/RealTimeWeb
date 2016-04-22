import { Groups } from '../lib/collections.js';


Template.join.onCreated(function () {
	
})
  groupsIndex = new EasySearch.Index({
    collection: Groups,
    fields: ['groupName'],
    engine: new EasySearch.Minimongo()
  });
Template.join.helpers({
		groupsIndex: () => groupsIndex,
		groups() {
			return Groups.find({})
		},
		status () {
			return tamStatus(this, true)
		},
		members() {
			console.log(this);
			return this.members
		},
		id() {
			return this._id
		}

})


Template.join.events({
	'submit .joinGroup': function (event) {
		event.preventDefault();
		var groupId = event.target.group.value;		
		console.log(event.target)

		Groups.update(groupId, {

			$addToSet: {members: 
					{
						id: Meteor.userId(),
						username: Meteor.user().username
					}
				}
		});
		event.target.reset();
		window.location.pathname = '/myTama'
		
	}
	
})

