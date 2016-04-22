FlowRouter.route('/', {
  name: 'home',
  subscriptions () {
  	this.register('gezTamagotchi', Meteor.subscribe('TamaGez'))
  },
  action() {

    BlazeLayout.render('layout', {main: 'home'});
  }
});

FlowRouter.route('/adopt', {
  name: 'adopt',
  subscriptions () {
    
  	this.register('Groups', Meteor.subscribe('Groups'))
  },
  action() {
  	
    BlazeLayout.render('layout', {main: 'adopt'});
  }
});

FlowRouter.route('/myTama', {
  name: 'myTama',
  subscriptions () {
  	this.register('Groups', Meteor.subscribe('Groups'))
  },
  action() {
  	
    BlazeLayout.render('layout', {main: 'myTama'});
  }
});
FlowRouter.route('/myTama/:groupId', {
  name: 'tamaGroupDetail',
  subscriptions: function (params) {
    this.register('GroupSingle', Meteor.subscribe('GroupSingle', params.groupId))
  },
  action() {
    BlazeLayout.render('layout', {main: 'tamaGroupDetail'});
  }
});

FlowRouter.route('/join', {
  name: 'join',
  subscriptions () {
    this.register('Groups', Meteor.subscribe('Groups'))
  },
  action() {
    
    BlazeLayout.render('layout', {main: 'join'});
  }
});