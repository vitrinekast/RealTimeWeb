import { Groups } from '../lib/collections.js';

Template.myTama.onCreated(function () {
	
});

Template.myTama.helpers({
	
	Groups () {
		return Groups.find({members: {$elemMatch: {id:Meteor.userId()}}}, {sort: {groupName: 1}})
		
	},
	result () {
		
		return Groups.find({members: {$elemMatch: {id:Meteor.userId()}}}).count()
	},
	status () {
		return tamStatus(this)
	}
})

// if(this.tamagotchi.alive === true ) {
// 			var thisTime   = new Date(TimeSync.serverTime());
// 		for(var i = 0; i < this.tamagotchi.needs.length;i++) {
// 			var timeDiffMS = this.tamagotchi.needs[i].endTime - thisTime;
// 			console.log(this)
// 			if(timeDiffMS < 0) {
				
// 			Meteor.call('tama.dead', this._id, false, function(error, affectedDocs) {
// 			if(error) {
// 				console.log(error);
// 				throw new Meteor.Error(500, error.message);
// 			}
// 			else {

				
// 			}
// 		});
// 		} else {
// 			return timeDiffMS;
// 		}
// 		}
// 		}