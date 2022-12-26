const express = require('express');
const cors = require('cors');
const bodyParser  = require('body-parser');

const authRoutes = require("./routes/auth.js");

const app = express();
const PORT = process.env.PORT || 3000;

require('dotenv').config();

app.use(cors());
app.use(express.json());

app.use(bodyParser.urlencoded({
    extended: true
}));

app.get('/',(req,res) =>{
    res.send('Hello, world!!');
});

app.use('/auth', authRoutes);

app.listen(PORT, () =>
console.log(`Server is running on port ${PORT}`)
);

