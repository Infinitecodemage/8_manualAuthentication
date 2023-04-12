module.exports.home = function(req, res){
    console.log(req.cookies);
    res.cookie('name-iruki', 'miss dorito');

    return res.render('home', {
        title: "Home"
    });
}

// module.exports.actionName = function(req, res){}