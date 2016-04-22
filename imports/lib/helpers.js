Template.registerHelper( 'diffTime', (endTime) => {
	
	var thisTime   = new Date(TimeSync.serverTime());
	var timeDiffMS = endTime - thisTime;
	var meter      = document.getElementsByTagName('meter');

	if(timeDiffMS < 0) {
		return false
	} else {
		return timeDiffMS;
	}
});

Template.registerHelper('fromnow', (date) => {
	return moment(date).fromNow()
})

Template.registerHelper('randomImage', () => {

        var imageArray = ['Gozarutchi.png','Kuchipatchi.png','Makiko.png','Mametchi.png','Memetchi.png','Mimitchi.png','tam.png','Violetchi.png' ];
        var num = Math.floor((Math.random() * 9));
        console.log('tamagotchis/' + imageArray[num])
        return 'tamagotchis/' + imageArray[num]
    
})
groupDied = function (id) {
	Meteor.call('group.dead', id, false, function(error, affectedDocs) {
			if(error) {
				console.log(error);
				throw new Meteor.Error(500, error.message);
			}
			else {
				console.log('succes')
			}
		});
},
groupReset = function (id) {
	Meteor.call('group.reset', id, function (error, affectedDocs) {
		if(error) {
				console.log(error);
				throw new Meteor.Error(500, error.message);
			}
			else {
				console.log('succes')
		}
	})
}
tamReset = function (id) {
	Meteor.call('tama.reset', id, function(error, affectedDocs) {
			if(error) {
				console.log(error);
				throw new Meteor.Error(500, error.message);
			}
			else {
				console.log('succes')
			}
		});
}
tamDied = function (id) {
	Meteor.call('tama.dead', id, false, function(error, affectedDocs) {
			if(error) {
				console.log(error);
				throw new Meteor.Error(500, error.message);
			}
			else {
				console.log('succes')
			}
		});
},
timeDiff = function (endTime) {
	var thisTime   = new Date(TimeSync.serverTime());
	var timeDiffMS = endTime - thisTime;
	var meter      = document.getElementsByTagName('meter');

	return timeDiffMS	
}
tamStatus = function (data, group) {
	var result = [];

	if(data.tamagotchi.alive) {
		for(var i = 0; i < data.tamagotchi.needs.length; i++) {
			result.push(timeDiff(data.tamagotchi.needs[i].endTime));
		};
		var minValue = Math.min.apply(Math,result);
		if(minValue < 0) {
			if(group) {
				groupDied(data._id);
				return '../sprites/died.png'
			}
			else {
				tamDied(data._id);
				return '../sprites/died.png'
			}
		}
		else {
			if(minValue >= 300000 ) {
			return 'sprites/default.png';
			}
			else if(minValue <= 300000 ) {
				return '../sprites/sick.png'
			}
		}

		
	}
	else {
		return '../sprites/dead.png'
	}
		
}