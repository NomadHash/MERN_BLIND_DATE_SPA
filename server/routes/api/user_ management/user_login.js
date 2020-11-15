import express from "express";

//import MongoDB Model
import User from "../../../models/User";

const router = express.Router();

// Login
router.post("/", (req, res) => {
  //  OAUTH_LOGIN
  if (req.body?.oAuthId) {
    (async function () {
      await User.findOne({ oAuthId: req.body.oAuthId }, (err, user) => {
        if (!user) {
          const userSchema = new User(req.body);
          // Save-Data-Base
          userSchema.save((err, _) => {
            if (err) return res.json({ success: false, err });
          });
        }
      });

      await User.findOne({ oAuthId: req.body.oAuthId }, (err, user) => {
        user.generateToken((err, user) => {
          if (err) return res.status(400).send(err);

          //save Token at Cookie
          res
            .cookie("x_auth", user.token)
            .status(200)
            .json({ loginSuccess: true, userId: user._Id, token: user.token });
        });
      });
    })();

    // ===============
  } else {
    //Find Email at DB
    User.findOne({ email: req.body.email }, (err, user) => {
      if (!user) {
        return res.json({
          loginSuccess: false,
          message: "해당 이메일에 해당하는 유저가 없습니다.",
        });
      }
      //Check Password
      user.comparePassword(req.body.password, (err, isMatch) => {
        if (!isMatch)
          return res.json({
            loginSuccess: false,
            message: "비밀번호가 틀렸습니다.",
          });
      });

      user.generateToken((err, user) => {
        if (err) return res.status(400).send(err);

        //save Token at Cookie
        res
          .cookie("x_auth", user.token)
          .status(200)
          .json({ loginSuccess: true, userId: user._Id, token: user.token });
      });
    });
  }
});

export default router;
