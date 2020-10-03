import express from "express";
const app = express();
import cookieParser from "cookie-parser";
import mongoose from "mongoose";
import morgan from "morgan";

// import .env(DB_URL, Server_Port)
import config from "./config/index";
const { DB_URL, SERVER_PORT } = config;

//Routes
import userLoginRouter from "./routes/api/user_ management/user_login";
import userLogOutRouter from "./routes/api/user_ management/user_logout";
import userRegisterRouter from "./routes/api/user_ management/user_register";
import userAuthRouter from "./routes/api/user_ management/user_auth";
import userUploadImage from "./routes/api/user_ management/user_uploadImage";

// Middle-ware
app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

//set-static
app.use("/uploads", express.static("uploads"));

// mongoose.connect();
mongoose
  .connect(DB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false,
  })
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.log(err));

// user-managment-API-Router
app.use("/api/users/login", userLoginRouter);
app.use("/api/users/logout", userLogOutRouter);
app.use("/api/users/register", userRegisterRouter);
app.use("/api/users/auth", userAuthRouter);
app.use("/api/users/upload", userUploadImage);

app.listen(SERVER_PORT, (req, res) => {
  console.log(`Server on port ${SERVER_PORT}`);
});
