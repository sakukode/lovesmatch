Template.formSearch.helpers({
    countries: function(){
        return Countries.find({}, {sort: {name: 1}});
    },
    regions: function(){
        return Regions.find({}, {sort: {name: 1}});
    },
    cities: function(){
        return Cities.find({}, {sort: {name: 1}});
    },
});

Template.formSearch.events({
	'click #search': function (e, t) {
		e.preventDefault();
		Router.current().search(t);
	}
});