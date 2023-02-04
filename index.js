const express = require("express");
const router = require("./routes/index");
const app = express();
const port = 7000;
app.use(express.json());
app.set("view engine", "ejs");
app.use("/", router);
app.use(express.static("public"));

app.listen(port, () => {
    console.log(`backend Connected, Port : ${port}`);
});
