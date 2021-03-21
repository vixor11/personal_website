const User = require("../models/user-model");

const bcrypt = require("bcrypt");
const saltRounds = 10;

logUserIn = async (req, res) => {
  const body = req.body;

  if (!body) {
    return res.status(400).json({
      success: false,
      error: "A field is missing",
    });
  }

  let count = await User.find({}).countDocuments();

  if (count === 0) {
    bcrypt.hash(body.pwd, saltRounds, function (err, result) {
      const user = new User({
        login_name: body.login_name,
        hash: result,
      });

      user
        .save()
        .then(() => {
          return res.status(201).json({
            success: true,
            isLoggedIn: true,
            user_login: user.login_name,
            user_id: user._id,
            message: "User created!",
          });
        })
        .catch((error) => {
          return res.status(400).json({
            success: false,
            isLoggedIn: true,
            user_login: user.login_name,
            user_id: user._id,
            message: "user not created.",
          });
        });
    });
  } else {
    let user = await User.findOne({ login_name: body.login_name });

    if (!user) {
      return res.status(400).json({
        success: false,
        isLoggedIn: false,
        error: `wrong username password combo`,
      });
    }

    bcrypt.compare(body.pwd, user.hash, function (err, result) {
      if (result === true) {
        return res.status(200).json({ success: true, isLoggedIn: true });
      } else {
        return res
          .status(400)
          .json({ success: false, isLoggedIn: false, error: `fuck off 2` });
      }
    });
  }
};

checkLoggedIn = async (req, res) => {
  console.log("check logged in is running");
  const body = req.body;

  let user = await User.findOne({ login_name: body.login_name });

  console.log("username: " + body.login_name);
  console.log("pwd: " + body.pwd);

  if (user.pwd == body.pwd) {
    return res.status(200).json({
      success: true,
      isLoggedIn: true,
    });
  }

  return res.status(401).json({
    success: false,
    isLoggedIn: false,
  });
};

module.exports = {
  logUserIn,
  checkLoggedIn,
};
