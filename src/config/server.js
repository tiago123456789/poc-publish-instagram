require("dotenv").config();
const express = require("express")
const app = express();
const routesApp = require("../routes/index")

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

routesApp(app);

app.listen(4500, () => {
  console.log("Server is running port 4500")
})
