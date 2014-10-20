if (Meteor.isClient) {
	Template.menu.events({

		'click #about': function (event) {
			event.preventDefault();
			Router.go('aboutHome');
		},

		'click #music': function (event) {
			event.preventDefault();
			Router.go('musicjuciff');
		},

		'click #pictures': function (event) {
			event.preventDefault();
			Router.go('pictures');
		},

		'click #home': function (event) {
			event.preventDefault();
			Router.go('Home');
		},

	});
};
