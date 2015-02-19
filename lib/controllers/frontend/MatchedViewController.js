MatchedViewController = FrontController.extend({
    /* get subscribtion from server with parameter criteria, and sort/limit */
    subscriptions: function() {
    	this.subs.subscribe('jobs', {});
        this.subs.subscribe('countries', {});
        this.subs.subscribe('regions', {});
        this.subs.subscribe('cities', {});
        this.subs.subscribe('images', {});
        this.subscription = this.subs.subscribe('users', this.getCriteria());
    },
    /* passing data from controllers to view */
    view: function() {
         return this.render('matchedView', {
            data: {
                model: this._loadModel(this.getId()),
            }
        });
    },
    _loadModel: function(_id) {
       return Meteor.users.findOne(_id);
    },
});