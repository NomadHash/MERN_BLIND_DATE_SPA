import express from "express";

//import MongoDB Model
import User from "../../../models/User";

const router = express.Router();

router.post("/", (req, res) => {
  const { gender, age, name, residence, profileImage } = req.body;
  User.findOneAndUpdate(
    { email: req.body.email },
    {
      gender: gender,
      age: age,
      name: name,
      residence: residence,
      profileImage: profileImage,
      enteredUserInformation: 1,
    },
    (err, doc) => {
      if (err) return res.json({ success: false, err });
      return res.status(200).send({
        success: true,
      });
    }
  );
});
export default router;