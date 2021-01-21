const User = require('../models/user-model')

const bcrypt = require('bcrypt');
const saltRounds = 10;


logUserIn = async (req, res) => {
    const body = req.body;
    console.log(req.session);

    if (!body) {
        return res.status(400).json({
            success: false,
            error: 'A field is missing',
        })
    }

    let count = (await User.find({}).countDocuments());

    if (count === 0) {
        bcrypt.hash(body.pwd, saltRounds, function(err, result) {    
            const user = new User({
                login_name: body.login_name, 
                hash: result
            })    
            console.log(user);

            user
            .save()
            .then(() => {
                req.session.login_name = user.login_name;
                return res.status(201).json({
                    success: true,
                    user_login: user.login_name,
                    user_id: user._id,
                    message: 'User created!',
                })
            }).catch(error => {
                return res.status(400).json({
                    error,
                    message: 'User not created!',
                })
            })
        });
    } else {
        let user = (await User.findOne( {login_name: body.login_name} ));        

        bcrypt.compare(body.pwd, user.hash, function(err, result) {
            console.log(48 + ", " + result);
            
            if (result === true) {
                req.session.login_name = user.login_name;
                return res
                .status(201)
                .json({ success: true })
            } else {
                return res
                .status(404)
                .json({ success: false, error: `fuck off 2` })
            }
        });
    }

    
}

logUserOut = (req, res) => {
    console.log(req.session);
    
    delete req.session.login_name;
    console.log(req.session);

    req.session.destroy(function(err) {
        if(err) {
            console.log(err);
        } 
        console.log(req.session);

        res.json({ logOut: "success" });
    })
}



module.exports = {
    logUserIn,
    logUserOut
}