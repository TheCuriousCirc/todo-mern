import mongoose from "mongoose";

export default async () => {
  try {
    await mongoose.connect("mongodb://localhost:27017/todo-app");
    console.log("Connected to database!");
  } catch (err) {
    console.error(err);
  }
};
