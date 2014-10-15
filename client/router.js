
Router.configure({
	layoutTemplate:'about',
});
Router.map(function(){

	this.route('Index',{
		path:'/',
		layoutTemplate:'about',
	});


	this.route('aboutHome',{
		path:'/about/',
		layoutTemplate:'about',
	});

	this.route('musicjuciff',{
		path:'/music/',
		layoutTemplate:'musicjuciff',
	});

	this.route('pictures',{
		path:'/pictures/',
		layoutTemplate:'pictures',
	});

	this.route('Home',{
		path:'/home/',
		layoutTemplate:'home',
	});

});