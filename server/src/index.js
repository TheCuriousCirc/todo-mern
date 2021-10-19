import express from "express";
import connectDb from "./connectDb";
import todoRoute from "./routes/todos";
import cors from "cors";

const app = express();

connectDb();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(cors());

app.get("/", (req, res) => {
  res.send("HELLO WORLD!!");
});

app.use("/api/todo", todoRoute);

const port = 4000;

app.listen(port, () => console.log(`Listening on port ${port}`));
