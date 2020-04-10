const express = require("express");
const app = express();
require("./config/database");
const contact = require("./Routes/contactRoutes");
const cors = require("cors");

app.use(express.json());
app.use(cors());

app.use("/contact", contact);
app.use("/users",require('./Routes/usersRoutes'))

app.listen(4000, (err) => {
  if (err) console.log("server is not Running");
  else console.log("server is running on port : 4000");
});
