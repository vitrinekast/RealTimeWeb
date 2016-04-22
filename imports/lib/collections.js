import { Mongo } from 'meteor/mongo';

export const TamaGez = new Mongo.Collection('TamaGez');
export const Groups = new Mongo.Collection('Groups');

if(Meteor.isServer) {
	Meteor.publish('TamaGez', function() {
		return TamaGez.find({}, {sort: {time: -1}});
	});
	Meteor.publish('Groups', function() {
		return Groups.find({});
	});
	Meteor.publish('GroupSingle', function(groupId) {
		return Groups.find({_id: groupId});
	});

}

// db.TamaGez.insert({
// 	history:[],
// 	tamagotchi: {
// 		aliveSince: new Date(),
// 		image: 'tamagotchis/tam.png',
// 		alive:true,
// 		needs: [
// 			{
// 				genre: 'hunger',
// 				endTime: new Date(new Date().getTime() + (300000 * 2)).getTime(),
// 				addedTime: 300000,
			
// 			},
// 			{
// 				genre: 'hygiene',
// 				endTime: new Date(new Date().getTime() + (600000 * 2)).getTime(),
// 				addedTime: 600000,
			
// 			},
// 			{
// 				genre: 'fun',
// 				endTime: new Date(new Date().getTime() + (200000 * 2)).getTime(),
// 				addedTime: 200000,
			
// 			}
// 		]
// 	}
// })

