import mongoose from "mongoose";

export default async () => {
  try {
    await mongoose.connect("mongodb://127.0.0.1:27017/curious-circ-todo");
    console.log("Connected to database!");
  } catch (err) {
    console.error(err);
  }
};
