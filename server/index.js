const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const bodyParser = require("body-parser");
// const bcrypt = require('bcrypt-nodejs');
const UserRoute = require("./routes/UserRoute");

const app = express();

require('dotenv').config();

mongoose.connect(process.env.URI, {
    useNewUrlParser:true,
    useUnifiedTopology:true
});

const db = mongoose.connection;

db.on('error', (error) => console.log(error));

db.once('open', () =>console.log('Database Connected'));

app.use(cors());


app.use(express.json());

app.use(UserRoute);

app.listen(5000 , ()=> console.log("server up and running ..."))

// const path = require("path");
// const express = require("express");
// const app = express();
// const PORT = process.env.PORT || 3001;

// // Have Node serve the files for our built React app
// app.use(express.static(path.resolve(__dirname, "../client/build")));

// // Handle GET requests to /api route (endpoint)
// app.get("/api", (req, res) => {
// res.json({ message: "Bonjour depuis votre server!" });
// });

// // All other GET requests not handled will return our React app
// app.get("*", (req, res) => {
// res.sendFile(path.resolve(__dirname, "../client/build", "index.html"));
// });

// app.listen(PORT, () => {
// console.log(`Server listening on ${PORT}`);
// });