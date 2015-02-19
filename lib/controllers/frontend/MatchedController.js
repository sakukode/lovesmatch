MatchedController = FrontController.extend({
    /* get subscribtion from server with parameter criteria, and sort/limit */
    subscriptions: function() {

        this.subs.subscribe('users', {});
        this.subs.subscribe('images', {});
        this.subscription = this.subs.subscribe('lovematches', this.getCriteria());
    },
    /* passing data from controllers to view */
    data: function() {
        return {
        };
    },
    matched: function() {
        var id = Meteor.userId();
        var members = this._getPreferredMember(id);
        var doc = {
             $and : [
                {'firstUserId': { $in: members }},
                {'secondUserId': id},
            ]
        };

        var models = LoveMatches.find(doc);

        return this.render('matchedIndex', {
            data: {
               models: models,
               isEmpty: models.count() === 0 ? true : false,
               totalMatches: models.count(),
            }
        });
    },
    _getPreferredMember: function(id) {
        var members = [];
        LoveMatches.find({'firstUserId': id}).forEach(function (doc) {
            members.push(doc.secondUserId);
        });
        return members;
    },
});