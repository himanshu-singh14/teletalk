const express = require("express");
const dotenv = require("dotenv");

const app = express();
dotenv.config();

const PORT = process.env.PORT

app.get("/", (req, res) => {
    res.send("Hello there!");
})

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});