//actions 


module.exports.profile = function(req, res){
    return res.render('user_profile', {
        title: 'User Profile'
    })
}


//render the sign up page:
module.exports.signUp = function(req, res){
    res.render('user_sign_up', {
        title: "codeial | Sign Up"
    })
}

// render for the sign-in page
module.exports.signIn = function(req, res){
    res.render('user_sign_in', {
        title: "Codeial | Sign In"
    })
}


//get the sign up data
module.exports.create = function(req, res){
    //TODO later

}

//get the sign in and create a session for the users
module.exports.createSession = function(req, res){
    // ToDo later
}