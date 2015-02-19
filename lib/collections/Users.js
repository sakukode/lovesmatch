//activate groundDB for users collection to work offline
//GroundDB(Meteor.users);

Meteor.users.helpers({
    mugenRoleGroup: function() {
        return MugenRoleGroups.findOne(this.profile.mugenRoleGroupId);
    },
    image: function() {
        return Images.findOne(this.profile.imageId);
    },
    job: function() {
        return Jobs.findOne(this.profile.jobId);
    },
    country: function() {
        return Countries.findOne(this.profile.countryId);
    },
    region: function() {
        return Regions.findOne(this.profile.regionId);
    },
    city: function() {
        return Cities.findOne(this.profile.cityId);
    }
});

Meteor.users.allow({
    insert: function(userId, doc) {
        var result = Meteor.call('MugenRoleActions.getRoles', 'users', 'insert');
        return result;
    },
    update: function(userId, doc) {
        var result = Meteor.call('MugenRoleActions.getRoles', 'users', 'update');
        return result;
    },
    remove: function(userId, doc) {
        var result = Meteor.call('MugenRoleActions.getRoles', 'users', 'remove');
        return result;
    },
});