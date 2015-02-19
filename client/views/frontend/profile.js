Template.memberProfile.events = {
    'click #btnChangeProfile': function(e, t){
        e.preventDefault();        
        Router.current().changeProfile(t);
    },
    'change #photo': function(e,t){
        Router.current().changeProfilePicture(t);
    },
};

Template.memberProfile.helpers({
	jobs: function(){
        return Jobs.find({}, {sort: {name: 1}});
    },
    countries: function(){
        return Countries.find({}, {sort: {name: 1}});
    },
    regions: function(){
        return Regions.find({}, {sort: {name: 1}});
    },
    cities: function(){
        return Cities.find({}, {sort: {name: 1}});
    },
    isSelected: function(_id) {
        if (this._id === _id)
            return "selected";
    },
});