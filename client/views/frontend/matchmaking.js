Template.matchMakingIndex.events = {
    'click #btnLove': function(e, t){
        e.preventDefault();
        var id = this._id;
        Router.current().nextMembers(true,id);
    },
    'click #btnSkip': function (e, t) {
    	e.preventDefault();
    	Router.current().nextMembers(false);
    },
    'click #display-all': function () {
    	Session.set('search', false);
    }
};