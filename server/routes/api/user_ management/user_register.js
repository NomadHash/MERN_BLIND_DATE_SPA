const express = require("express");

//const MongoDB Model
const User = require("../../../models/User");

const router = express.Router();

router.post("/", (req, res) => {
  console.log(req);
  // User.findOne({ email: req.body.email }, (err, user) => {
  //   if (user) {
  //     return res.json({
  //       registerSuccess: false,
  //       message: "이미 존재하는 이메일 입니다.",
  //     });
  //   } else {
  //     const user = new User(req.body);

  //     // Save-Data-Base
  //     user.save((err, _) => {
  //       if (err) return res.json({ success: false, err });
  //       return res.status(200).json({
  //         registerSuccess: true,
  //       });
  //     });
  //   }
  // });
});

module.exports = router;
