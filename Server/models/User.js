import mongoose from "mongoose";

const UserSchema = new mongoose.Schema(
  {
    fullName: {
      type: String,

      min: 2,
      max: 100,
    },
    email: {
      type: String,

      max: 50,
      unique: true,
    },
    username: {
      type: String,

      min: 2,
      max: 100,
    },
    role: {
      type: String,
      // if you assignuser multiple role if nor=t donot use array role
      // you will decide this durring role assignation page
    },
    status: {
      type: String,
      default: "Inactive",
    },
    age: {
      type: Number,

      min: 2,
      max: 100,
    },

    password: {
      type: String,

      min: 5,
    },
    phone: {
      type: Number,
    },
    images: {
      type: String,
      default:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8YWNjb3VudCUyMHByb2ZpbGUlMjBpbWFnZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=400&q=60",
    },
    haveAccount: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

const User = mongoose.model("User", UserSchema);
export default User;
