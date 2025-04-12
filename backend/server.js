require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
var authgoogle = require("./routes/authgoogle");
const mongoose = require("mongoose");

//middleware
app.use(express.json());
app.use(
  cors({
    origin: "http://localhost:5173",
  })
);
const PORT = process.env.PORT;

mongoose
  .connect(process.env.MONGODB_URL)
  .then(() => {
    console.log("database connected");
  })
  .catch((err) => {
    console.log("connection failed", err);
  });

app.use("/api", authgoogle);

app.listen(PORT, () => {
  console.log(`server connected at PORT ${PORT}`);
});
