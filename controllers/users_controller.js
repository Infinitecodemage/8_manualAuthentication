const User = require('../models/user');


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
// module.exports.create = function(req, res){
//     if(req.body.password != req.body.confirm_password){
//         res.redirect('back');
//     }

//     console.log(eq.body.email + ' -- email');
//     User.findOne({email: req.body.email}, function(err, user){        
//         if(err){ 
//             console.log('1 error in finding user in signing up'); 
//             return;
//         }
        
//         if(!user){
//             User.create(req.body, function(err, user){
//                 if(err){ console.log('error in creating user while signing up'); return }
//                 return res.redirect('/users/sign-in');
//             })            
//         }else{
//             return res.redirect('back');
//         }
//     })
// }


// Route Handler using async/await
module.exports.create = async function(req, res){
    try{
        if(req.body.password != req.body.confirm_password){
            return res.redirect('back');
        }
        console.log(req.body.email + ' --email');

        const user = await User.findOne({email: req.body.email });

        if(!user){
            console.log('!user')
            const newUser = await User.create(req.body);
            // return res.redirect('./sign-in');
            return res.redirect('/users/sign-in');

        }else{
            return res.redirect('back');
        }
    }catch(err){
        console.log('Error in creating user while signing up: ', err);
        return res.status(500).json({message: 'Internal Server Error'});
    }
};




//get the sign in and create a session for the users
module.exports.createSession = function(req, res){
    // ToDo later
}