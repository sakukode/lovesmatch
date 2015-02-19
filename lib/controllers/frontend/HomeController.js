HomeController = FrontController.extend({
    /* get subscribtion from server with parameter criteria, and sort/limit */
    subscriptions: function() {
        this.subs.subscribe('jobs', {}, {sort: {name: 1}});
        this.subs.subscribe('countries', {}, {sort: {name: 1}});
        this.subs.subscribe('regions', {}, {sort: {name: 1}});
        this.subs.subscribe('cities', {}, {sort: {name: 1}});
        this.subs.subscribe('images', {}, {sort: {name: 1}});
    },
    /* passing data from controllers to view */
   	home: function() {
   		return this.render('homeIndex');
   	},
     /* private get user input docs */
    _getDoc: function(t) {
        var doc = {
            email: t.find('#email').value,
            password: t.find('#password').value,
            confPassword: t.find('#conf-password').value,
            profile: {
                name: t.find('#name').value,
                gender: t.find('input:radio[name=gender]:checked').value,
                mugenRoleGroupId: "RyTSNvhNs7sGQdauH", //role group member
                createdAt: new Date(TimeSync.serverTime()),
                updatedAt: new Date(TimeSync.serverTime()),
            }
        };
       
        return doc;
    },
    /* uploading file using cfs:fileSystem package + cfs:ejson */
    _uploadImage: function() {
        var imageId = null;
        var file = $('#photo').get(0).files[0];
        if (file) {
            var image = Images.insert(file, function(err) {
                if (err) {
                    MeteorisFlash.set('danger', err.message);
                    throw new Meteor.Error(err);
                }
            });
            imageId = image._id;
        }

        return imageId;
    },
    login: function(t) {
        var email = t.find('#email').value;
        var password = t.find('#password').value;

        Meteor.loginWithPassword(email, password, function(err) {
            if (err) {
                MeteorisFlash.set('danger', err.message);
            } else {
                MeteorisFlash.set('success', 'login success');
                Router.go('homeIndex');
            }
        });
    },
    register: function(t) {
      
            //set inserted doc
            var doc = this._getDoc(t);

            Meteor.call('Members.insert', doc, function(err) {
                if (err) {
                    MeteorisFlash.set('danger', err.message);
                    throw new Meteor.Error(err);
                } else {
                    MeteorisFlash.set('success', 'Congratulations. your accounts succcess created');
                    Router.go('homeIndex');
                }
            });
      
            //return this.render('homeIndex', {});
    },
    profile: function() {
        return this.render('memberProfile', {
            data: {
                model: this._loadModel(Meteor.userId()),
            }
        });
    },
    changeProfile: function(t) {
        _id = Meteor.userId();
        var doc = {
            profile: {
                name: t.find('#name').value,
                age: t.find('#age').value,
                gender: Meteor.user().profile.gender,
                hobi: t.find('#hobi').value,
                jobId: t.find('#job').value,
                countryId: t.find('#country').value,
                regionId: t.find('#region').value,
                cityId: t.find('#city').value,
                imageId: Meteor.user().profile.imageId,
                mugenRoleGroupId: t.find('#role').value,
            }
        };
        Meteor.users.update(_id, {$set: doc}, function(err) {
                if (err) {
                    MeteorisFlash.set('danger', err.message);
                    throw new Meteor.Error(err);
                }
                MeteorisFlash.set('success', "Success Updating Users");
        });
        //Router.go('homeIndex');
    },
    changeProfilePicture: function(t) {
        var imageId = this._uploadImage();

        Meteor.users.update(Meteor.user()._id, {$set: {'profile.imageId': imageId}}, function(err) {
            if (err) {
                MeteorisFlash.set('danger', err.message);
                throw new Meteor.Error(err.message);
            }
            MeteorisFlash.set('success', 'Profile Picture successfully changed');
        });
    },
    showFormRegister: function() {
      return this.render('homeIndex', {
            data: {
                showFormRegister: true,
            }
        });
    },
    showFormLogin: function() {
      return this.render('homeIndex', {
            data: {
                showFormRegister: null,
            }
        });
    },
    _loadModel: function(_id) {
        return Meteor.users.findOne(_id);
    }
});