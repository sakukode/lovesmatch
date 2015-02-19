/**
 * This Code was created on April 2014
 * If you find any bug, unreadable code, messy code, potential bug code, etc
 * Please contact me at:
 * Ega Radiegtya / radiegtya@yahoo.co.id / 085641278479
 */

Regions = new Mongo.Collection("regions");

var schemas = new SimpleSchema({
    name:{
type:String,
label: 'REgion Name',
},

            /* AUTOVALUE */
            appId: {
                type: String,
                label: "App Id",
                autoValue: function() {
                    if (this.isInsert)
                        return App.id;
                },
            },
    createdAt: {
        type: Date,
        label: "Created Date",
        autoValue: function() {
            if (this.isInsert)
                return new Date;
        },
        denyUpdate: true,
        optional: true
    },
    updatedAt: {
        type: Date,
        label: "Updated Date",
        autoValue: function() {
            return new Date();
        },
        optional: true
    },
    createdUserId: {
        type: String,
        label: "Created by",
        autoValue: function() {
            if (this.isInsert)
                return Meteor.user()._id;
        },
        denyUpdate: true,
        optional: true
    },
    updatedUserId: {
        type: String,
        label: "Updated by",
        autoValue: function() {
            return Meteor.user()._id;
        },
        optional: true
    },
});

Regions.attachSchema(schemas);

Regions.allow({
    insert: function(userId, doc) {
        var result = Meteor.call('MugenRoleActions.getRoles', 'regions', 'insert');
        return result;
    },
    update: function(userId, doc) {
        var result = Meteor.call('MugenRoleActions.getRoles', 'regions', 'update');
        return result;
    },
    remove: function(userId, doc) {
        var result = Meteor.call('MugenRoleActions.getRoles', 'regions', 'remove');
        return result;
    },
});

//activate groundDB for regions collection to work offline
/* uncomment to use
 Ground.Collection(Regions);
 */

/* register helper for default relations */
Regions.helpers({
    
    createdUser: function() {
        return Meteor.users.findOne(this.createdUserId);
    },
    updatedUser: function() {
        return Meteor.users.findOne(this.updatedUserId);
    },
});
