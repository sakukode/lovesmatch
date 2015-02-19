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

Template.matchMakingIndex.helpers({
    isLoved: function (_id) {
        var firstUserId = Meteor.userId();
        var criteria = {
            $and: [
                {'firstUserId': firstUserId},
                {'secondUserId': _id},
            ]
        };

        var doc = LoveMatches.findOne(criteria);
        
        if(doc)
            return true;
    },
});
