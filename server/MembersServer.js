Meteor.methods({
    'Members.insert': function(doc) {
        console.log('inserting members...');
        validateParams(doc);
        Accounts.createUser(doc);
        return true;
    },
});


function validateParams(params) {
    for (var key in params) {
        if (key == "profile") {
            for (var keyProfile in params[key]) {
                value = params[key][keyProfile];
                console.log(value);
                if (value == "") {
                    throw new Meteor.Error('Please enter your ' + keyProfile, keyProfile);
                }
            }
        } else if (key == "email") {
            value = params[key];
            if (!validateEmail(value))
                throw new Meteor.Error('Please format email ' + key, key);
        } else if(key == "confPassword") {
            confPasword = params[key];
            password  = params["password"];
            if(password !== confPasword)
                throw new Meteor.Error('Please confirm password correctly');
        } else {
            value = params[key];
            console.log(value);
            if (value == "")
                throw new Meteor.Error('Please enter your ' + key, key);
        }
    }

}

function validateEmail(email) {
    var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
}

function areConfirmPasswords(password, confirm) {
   
    if(password !== confirm) {
        return false;
    }

    return true;
}