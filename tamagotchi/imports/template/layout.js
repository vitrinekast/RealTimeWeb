Template.layout.events({
	'click .menubutton' : function (event) {
		var menu = document.querySelector('nav');
		menu.classList.toggle('showMenu');
		console.log('click')
		
	}, 
	'click nav li' : function (event) {
		var menu = document.querySelector('nav');
		menu.classList.remove('showMenu');
		console.log('click')
	}
})