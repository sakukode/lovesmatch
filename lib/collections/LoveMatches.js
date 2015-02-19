LoveMatches = new Mongo.Collection("lovematches");

/*
LoveMatches.allow({
    insert: function(userId, doc) {
        var result = Meteor.call('MugenRoleActions.getRoles', 'lovematches', 'insert');
        return result;
    },
    update: function(userId, doc) {
        var result = Meteor.call('MugenRoleActions.getRoles', 'lovematches', 'update');
        return result;
    },
    remove: function(userId, doc) {
        var result = Meteor.call('MugenRoleActions.getRoles', 'lovematches', 'remove');
        return result;
    },
});

*/

LoveMatches.helpers({
    firstUser: function() {
        return Meteor.users.findOne(this.firstUserId);
    },
    secondUser: function() {
        return Meteor.users.findOne(this.secondUserId);
    },
    image: function() {
        var firstUser = Meteor.users.findOne(this.firstUserId);
        return Images.findOne(firstUser.profile.imageId);
    },
});