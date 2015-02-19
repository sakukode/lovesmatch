/* Cities */
Router.route('cities', function() {
    Router.go('citiesIndex');
});
Router.route('cities/index/:limit?/', {
    name: 'citiesIndex',
    controller: CitiesController,
    action: 'index',
});
Router.route('cities/insert/', {
    name: 'citiesInsert',
    controller: CitiesController,
    action: 'insert',
});
Router.route('cities/update/:_id?', {
    name: 'citiesUpdate',
    controller: CitiesController,
    action: 'update',
});
Router.route('cities/view/:_id?', {
    name: 'citiesView',
    controller: CitiesController,
    action: 'view',
});
/* EOF Cities */