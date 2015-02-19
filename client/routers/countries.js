/* Countries */
Router.route('countries', function() {
    Router.go('countriesIndex');
});
Router.route('countries/index/:limit?/', {
    name: 'countriesIndex',
    controller: CountriesController,
    action: 'index',
});
Router.route('countries/insert/', {
    name: 'countriesInsert',
    controller: CountriesController,
    action: 'insert',
});
Router.route('countries/update/:_id?', {
    name: 'countriesUpdate',
    controller: CountriesController,
    action: 'update',
});
Router.route('countries/view/:_id?', {
    name: 'countriesView',
    controller: CountriesController,
    action: 'view',
});
/* EOF Countries */