Template.homeIndex.events = {
    'click #btnLogin': function(e, t){
        e.preventDefault();        
        Router.current().login(t);
    }, 
    'click #registerForm': function(e, t){
        e.preventDefault();        
        Router.current().showFormRegister(t);
    },
    'click #loginForm': function(e, t){
        e.preventDefault();        
        Router.current().showFormLogin(t);
    },
    'click #btnRegister': function(e, t){
        e.preventDefault();        
        Router.current().register(t);
    },    
};