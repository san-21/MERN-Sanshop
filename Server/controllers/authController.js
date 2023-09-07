import User from "../models/User.js";
import CryptoJs from "crypto-js";
import jwt from "jsonwebtoken";
import asynchandler from "express-async-handler";

export const loginUser = asynchandler(async (req, res) => {
  const { username, password } = req.body;

  if (!username || !password) {
    return res.status(400).json({ message: "All Field required" });
  }

  const user = await User.findOne({ username }).exec();

  if (!user) {
    res
      .status(401)
      .json({ message: "Unauthorized Access: Username not Found" });
  }
  if (user.status !== "Active") {
    res
      .status(401)
      .json({ message: "Unauthorized Access: Account Not Active" });
  }

  const passFromDbDecrypt = CryptoJs.AES.decrypt(
    user.password,
    process.env.CRYPTOJS_SECRET_KEY
  );

  const decryptedPass = passFromDbDecrypt.toString(CryptoJs.enc.Utf8);

  if (decryptedPass !== password) {
    res.status(401).json({ message: "Wrong Credential! : Incorrect Password" });
  }

  // generate Access Token
  const accessToken = jwt.sign(
    {
      UserInfo: {
        username: user.username,
        status: user.status,
        role: user.role,
      },
    },
    process.env.ACCCESS_TOKEN_SECRET_KEY,
    { expiresIn: "15m" }
  );

  // generate Refresh Token
  const refreshToken = jwt.sign(
    {
      username: user.username,
    },
    process.env.REFRESH_TOKEN_SECRET_KEY,
    { expiresIn: "7d" }
  );

  //cockies

  res.cookie("jwtCookie", refreshToken, {
    httpOnly: true,
    secure: true,
    sameSite: "None",
    maxAge: 7 * 24 * 60 * 60 * 1000,
  });

  res.json({ accessToken });
});

// refresh token expects cookie that send to client with name "jwtCookie"

export const refreshToken = asynchandler(async (req, res) => {
  const cookies = req.cookies;
  if (!cookies?.jwtCookie) {
    return res.status(401).json({ message: "Unauthorized : Login Again" });
  }
  const refreshToken = cookies.jwtCookie;
  jwt.verify(
    refreshToken,
    process.env.REFRESH_TOKEN_SECRET_KEY,
    asynchandler(async (err, userData) => {
      if (err) {
        return res.status(403).json({ message: "Forbidden" });
      }

      const user = await User.findOne({ username: userData.username }).exec();
      if (!user) {
        return res.status(401).json({ message: "Unauthorized" });
      }

      // if user found generate new accesToken

      // generate Access Token
      const accessToken = jwt.sign(
        {
          UserInfo: {
            username: user.username,
            status: user.status,
            role: user.role,
          },
        },
        process.env.ACCCESS_TOKEN_SECRET_KEY,
        { expiresIn: "1m" }
      );

      res.json({ accessToken });
    })
  );
});

export const logoutUser = asynchandler(async (req, res) => {
  const cookies = req.cookies;
  if (!cookies?.jwtCookie) {
    return res.status(204).json({ message: "No Content" });
  }
  res.clearCookie("jwtCookie", {
    httpOnly: true,
    secure: true,
    sameSite: "None",
  });
  res.json({ message: "Cookie cleared" });
});
