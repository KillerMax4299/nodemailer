const express = require('express');
const cors = require('cors');
const app = express();
const port = 5000
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get("/", async (req, res) => { 
  res.json("nodemailer server connected")
})
const router = require("./src/routes");
app.use("", router);


app.listen(port,console.log('API server is http://localhost:'+port));