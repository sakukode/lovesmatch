/* Regions */
Router.route('regions', function() {
    Router.go('regionsIndex');
});
Router.route('regions/index/:limit?/', {
    name: 'regionsIndex',
    controller: RegionsController,
    action: 'index',
});
Router.route('regions/insert/', {
    name: 'regionsInsert',
    controller: RegionsController,
    action: 'insert',
});
Router.route('regions/update/:_id?', {
    name: 'regionsUpdate',
    controller: RegionsController,
    action: 'update',
});
Router.route('regions/view/:_id?', {
    name: 'regionsView',
    controller: RegionsController,
    action: 'view',
});
/* EOF Regions */