FrontController = MeteorisController.extend({
    /* get subscribtion from server with parameter criteria, and sort/limit */
    layoutTemplate: 'front', //set default layout to basic
    yieldTemplates: {
        'templateFrontHeader': {to: 'templateFrontHeader'},
    },
    notFoundTemplate: 'templatePublicNotFound',
    loadingTemplate: 'templatePublicLoading',
});