Template.templateBasicHeader.events({
    'click #btnLogout': function() {
        Meteor.logout();
        Router.go('usersLogin');    
    }
});
