import User from "../models/User.js";
// import asyncHandler = require("express-async-handler");
import CryptoJs from "crypto-js";

export const getUsers = async (req, res) => {
  try {
    const users = await User.find();
    res.status(200).json(users);
    console.log(users);
  } catch (error) {
    res.status(500).json(error);
  }
};
export const signUpUser = async (req, res) => {
  const { _id, password, username } = req.body;

  const user = await User.findById(_id).exec();
  if (!user) {
    return res.status(400).json({ message: "User With This Id Not Found" });
  }

  if (!password || !username) {
    return res.status(400).json({ message: "No Password Provided" });
  }

  const encrypPass = CryptoJs.AES.encrypt(
    password,
    process.env.CRYPTOJS_SECRET_KEY
  ).toString();
  req.body.password = encrypPass;
  req.body.haveAccount = true;
  try {
    const signUpUser = await User.findByIdAndUpdate(_id, {
      $set: req.body,
    });
    res.status(200).json(signUpUser);
  } catch (error) {
    return res.status(400).json({ message: "error" });
  }
};

export const updateUser = async (req, res) => {
  const { _id, fullName, email, username, role, status, age, phone } = req.body;

  const user = await User.findById(_id).exec();
  if (!user) {
    return res.status(400).json({ message: "User With This Id Not Found" });
  }

  (user.fullName = fullName),
    (user.email = email),
    (user.username = username),
    (user.role = role),
    (user.status = status),
    (user.age = age),
    (user.phone = phone);

  const updatedUser = await user.save();
  res.status(200).json(updatedUser);
};

export const postUser = async (req, res) => {
  const { fullName, email, username, role, status, age, phone } = req.body;

  const userObject = {
    fullName,
    email,
    username,
    role,
    status,
    age,
    phone,
  };

  const user = await User.create(userObject);
  if (user) {
    res.status(201).json(user);
  } else {
    res.status(400).json({ message: "User Creation failed" });
  }
};

export const deleteUser = async (req, res) => {
  const { id } = req.body;
  if (!id) {
    return res.status(400).json({ message: "User Id Required" });
  }

  const user = await User.findById(id).exec();

  if (!user) {
    return res.status(400).json({ message: "User With Prvided Id Not found" });
  }

  const deleteResponse = await user.deleteOne();
  res.status(203).json(deleteResponse);
};

export const getUser = async (req, res) => {
  try {
    const { id } = req.params;
    const user = await User.find({ _id: id });
    res.status(200).json(user);
  } catch (error) {
    res.status(400).json("user detail not successfull");
  }
};
