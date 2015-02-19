/* DASHBOARDS */
Router.route('/', {
    name: 'homeIndex',
    controller: HomeController,
    action: 'home'
});
Router.route('login', function(){
	Router.go('homeIndex');
});
Router.route('register', {
    name: 'accountRegister',
    controller: HomeController,
});
Router.route('account/change-profile', {
    name: 'memberProfile',
    controller: HomeController,
    action: 'profile'
});
Router.route('matchmaking/index',{
	name: 'matchMaking',
	controller: MatchMakingController,
	action: 'index'
});
Router.route('matchmaking',function(){
    Router.go('matchMaking');
});
Router.route('matched/index',{
    name: 'matchedIndex',
    controller: MatchedController,
    action: 'matched'
});
Router.route('matched',function(){
    Router.go('matchedIndex');
});
Router.route('matched/view/:_id?/', {
    name: 'matchedView',
    controller: MatchedViewController,
    action: 'view'
});
/* EOF DASHBOARDS */