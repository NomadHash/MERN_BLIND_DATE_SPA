import mongoose from "mongoose";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import config from "../config";
const { SECRET_TOKEN } = config;

const userSchema = mongoose.Schema({
  oAuthId: {
    type: Number,
    default: null,
  },
  gender: {
    type: Number,
    default: null,
  },
  age: {
    type: Number,
    default: null,
  },
  name: {
    type: String,
    maxlength: 50,
    default: null,
  },
  email: {
    type: String,
    trim: true, // 공백 제거
    unique: 1,
  },
  password: {
    type: String,
    minlength: 5,
  },
  residence: {
    type: Number,
    default: null,
  },
  profileImage: {
    type: String,
    default: "",
  },
  role: {
    type: Number,
    default: 0,
  },
  image: String,
  // token: {
  //   type: String,
  // },
  // tokenExp: {
  //   type: Number,
  // },
  enteredUserInformation: {
    type: Boolean,
    default: false,
  },
});

userSchema.pre("save", function (next) {
  //* =================
  //*  bcrypt 암호화
  //* =================
  var user = this;
  if (user.isModified("password")) {
    bcrypt.genSalt(10, (err, salt) => {
      if (err) return next(err);
      bcrypt.hash(user.password, salt, (err, hash) => {
        if (err) return next(err);
        user.password = hash;
        next();
      });
    });
  } else {
    next();
  }
});

userSchema.methods.comparePassword = function (plainPassword, callback) {
  bcrypt.compare(plainPassword, this.password, function (err, isMatch) {
    if (err) return callback(err, isMatch);
    callback(null, isMatch);
  });
};

userSchema.methods.generateToken = function (callback) {
  var user = this;
  var token = jwt.sign({ id: user._id }, SECRET_TOKEN);
  callback(null, token);
  // user.token = token;
  // user.save(function (err, user) {
  //   if (err) return callback(err);
  //   callback(null, user);
  // });
};

// Schema-static-methods

userSchema.statics.findByToken = function (token, callback) {
  var user = this;
  jwt.verify(token, SECRET_TOKEN, (err, decoded) => {
    console.log(decoded);
    user.findOne(
      {
        _id: decoded?.id,
      },
      (err, user) => {
        console.log(err);
        if (err) return callback(err);
        callback(null, user);
      }
    );
    // 유저 아이디를 이용하여 유저를 찾은뒤 클라이언트의 토큰과 db토큰과 비교
  });
};

const User = mongoose.model("User", userSchema);

export default User;
