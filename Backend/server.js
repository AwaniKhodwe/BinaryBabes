// server.js

const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors({
    origin: 'http://localhost:3000'
}));
app.use(express.json());

const uri = process.env.ATLAS_URI;
mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true });

const connection = mongoose.connection;
connection.once('open', () => {
    console.log("MongoDB database connection established successfully.");
});

const usersRouter = require("./routes/users");
const addstocksRouter = require('./routes/addstocks');
const addfundsRouter = require('./routes/addfund');
const addbondsRouter = require('./routes/addbonds');
const calccsvRouter = require('./routes/calccsv');


app.use("/users", usersRouter);
app.use("/addstocks", addstocksRouter); // Corrected path
app.use("/addfund", addfundsRouter);
app.use("/addbonds", addbondsRouter);
app.use("/calccsv", calccsvRouter);


app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});


// const express = require('express');
// const cors = require('cors');
// const mongoose = require('mongoose');
// require('dotenv').config();

// const app = express();
// const port = process.env.PORT || 5000;

// app.use(cors({
//     origin: 'http://localhost:3000'
// }));
// app.use(express.json());

// const uri = process.env.ATLAS_URI;
// mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true });

// const connection = mongoose.connection;
// connection.once('open', () => {
//     console.log("MongoDB database connection established successfully.");
// });

// const usersRouter = require("./routes/users");
// const addstocksRouter = require('./routes/addstocks');
// const handlecsvRouter = require('./routes/handlecsv');

// app.use("/users", usersRouter);
// app.use("/addstocks", addstocksRouter); // Corrected path
// app.use("/handlecsv", handlecsvRouter);

// app.listen(port, () => {
//     console.log(`Server running on port ${port}`);
// });
