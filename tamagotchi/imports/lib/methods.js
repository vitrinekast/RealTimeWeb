import { TamaGez, Groups } from '../lib/collections.js';

Meteor.methods({
    'tama.dead'(tamaId, bool) {
        TamaGez.update({'_id': tamaId}, {$set: {'tamagotchi.alive': bool}})
    },
    'group.dead'(groupId, bool) {
        Groups.update({'_id': groupId}, {$set: {'tamagotchi.alive': bool}})
    },
    'group.reset'(groupId) {
        console.log('reset')
        Groups.update({'_id': groupId}, {
            $set: {
                tamagotchi: {
                 aliveSince: new Date(),
                 image: 'tamagotchis/tam.png',
                 alive:true,
                 needs: [
                     {
                         genre: 'hunger',
                         endTime: new Date(new Date().getTime() + (300000 * 2)).getTime(),
                         addedTime: 300000,
                        
                     },
                     {
                         genre: 'hygiene',
                         endTime: new Date(new Date().getTime() + (600000 * 2)).getTime(),
                         addedTime: 600000,
                        
                     },
                     {
                         genre: 'fun',
                         endTime: new Date(new Date().getTime() + (200000 * 2)).getTime(),
                         addedTime: 200000,
                        
                     }
                 ]
             }
            }
        })
    },
    'tama.reset'(tamaId) {
        TamaGez.remove({'_id': tamaId}, {});
        TamaGez.insert({
             history:[],
             tamagotchi: {
                 aliveSince: new Date(),
                 image: 'tamagotchis/tam.png',
                 alive:true,
                 needs: [
                     {
                         genre: 'hunger',
                         endTime: new Date(new Date().getTime() + (300000 * 2)).getTime(),
                         addedTime: 300000,
                        
                     },
                     {
                         genre: 'hygiene',
                         endTime: new Date(new Date().getTime() + (600000 * 2)).getTime(),
                         addedTime: 600000,
                        
                     },
                     {
                         genre: 'fun',
                         endTime: new Date(new Date().getTime() + (200000 * 2)).getTime(),
                         addedTime: 200000,
                        
                     }
                 ]
             }
        })
    },
	'needs.update'(tamaId, title, addTime, groups) {
		var historyInsert = {}
		historyInsert.thing = title;
		historyInsert.time = new Date();
        if(groups === true) {
        	Groups.update({
            '_id': tamaId,
            'tamagotchi.needs.genre': title
        },
             {$inc : {"tamagotchi.needs.$.endTime" : addTime} } 
        );
        }
        else {
        	TamaGez.update({'_id': tamaId,'tamagotchi.needs.genre': title},
             				{$inc : {"tamagotchi.needs.$.endTime" : addTime},
							 $push: {"history" : historyInsert}  });
        }
	},
    'group.create'(groupName, randomImage) {
        console.log('creating a group...')
        Groups.insert({
            groupName: groupName,
            members:[
            {
                id: Meteor.userId(),
                username: Meteor.user().username
            }
            ],
            chat:[],
            tamagotchi: {
                
                 aliveSince: new Date(),
                 alive:true,
                 needs: [
                {
                    genre: 'hunger',
                    endTime: new Date(new Date().getTime() + (300000 * 2)).getTime(),
                    addedTime: 300000,
                
                },
                {
                    genre: 'hygiene',
                    endTime: new Date(new Date().getTime() + (600000 * 2)).getTime(),
                    addedTime: 600000,
                    
                },
                {
                    genre: 'fun',
                    endTime: new Date(new Date().getTime() + (200000 * 2)).getTime(),
                    addedTime: 200000,
                
                }
                ]
            }
        })
        var created = Groups.find({groupName: groupName},{});
        console.log(created);
        if(created) {
            return 'Gelukt!'
        }
        else {
            throw new Meteor.Error('er is iets mis gegaan')
        }
    }
})



