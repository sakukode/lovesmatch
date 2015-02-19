MatchMakingController = FrontController.extend({
    /* get subscribtion from server with parameter criteria, and sort/limit */
    subscriptions: function() {
        //sort.limit = this.limit();

        Session.setDefault('skipNumber', 0);

    	this.subs.subscribe('countries', {}, {sort: {name: 1}});
        this.subs.subscribe('regions', {}, {sort: {name: 1}});
        this.subs.subscribe('cities', {}, {sort: {name: 1}});
        this.subs.subscribe('images', {}, {sort: {name: 1}});
        this.subs.subscribe('lovematches', {});

        this.subscription = this.subs.subscribe('users', this.getCriteria());
    },

    /* passing data from controllers to view */
    index: function() {
        var models = this._loadModel();
       	return this.render('matchMakingIndex', {
            data: {
               model: models,
               isEmpty: models.count() === 0 ? true : false,
            }
        });
   	},
    getCriteria: function() {
        var gender = Meteor.user().profile.gender == "male" ? "female" : "male";
        var isSearch = Session.get('search');

        if(isSearch) {
            return {
                $and: [
                    {'profile.gender': gender},
                    {'profile.mugenRoleGroupId': "RyTSNvhNs7sGQdauH"},
                    {'profile.countryId': Session.get('country')},
                    {'profile.regionId': Session.get('region')},
                    {'profile.cityId': Session.get('city')},
                ]
            };
        }else {
            return {
                $and: [
                    {'profile.gender': gender},
                    {'profile.mugenRoleGroupId': "RyTSNvhNs7sGQdauH"},
                ]
            };
        }
           
    }, 
    search: function(t) {
       Session.set('country', t.find('#country').value);
       Session.set('region', t.find('#region').value);
       Session.set('city', t.find('#city').value);
       Session.set('search', true);
    },
   	_loadModel: function() {
       var skip = this._getSkipNumber();
       return Meteor.users.find(this.getCriteria(), {limit: 1,skip: skip});
    },
    _getSkipNumber: function() {
        return Session.get('skipNumber');
    },
    nextMembers: function(act, _id) {
        var skip = this._getSkipNumber();
        var total = this.totalMembers();
        if(skip + 1 == total) {
            Session.set('skipNumber', 0);
        }else {
            Session.set('skipNumber', Session.get('skipNumber') + 1);
        }
        
        if(act == true) {            
            var doc = {
                firstUserId: Meteor.userId(),
                secondUserId: _id,
            };

            Meteor.call('LoveMatches.insert', doc, function(err) {
                if (err) {
                    MeteorisFlash.set('danger', err.message);
                    throw new Meteor.Error(err);
                } else {
                    MeteorisFlash.set('success', 'You Love It');
                    
                }
            });
        }
    },
    totalMembers: function() {
        return Meteor.users.find(this.getCriteria()).count();  
    },
});
