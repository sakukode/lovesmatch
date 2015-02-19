Template.templateFrontHeader.events({
    'click #btnLogout': function() {
        Meteor.logout();     
        Router.go('homeIndex');  
    }
});
