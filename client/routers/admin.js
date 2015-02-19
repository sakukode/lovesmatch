/* DASHBOARDS */
Router.route('/admin', {
    name: 'sitesIndex',
    controller: AdminController,
});
Router.route('/admin/index', function(){
   Router.go('sitesIndex');
});
/* EOF DASHBOARDS */