const express = require("express");
const feedbackRoutes = require('./routes');


const app =express();
const cors = require("cors");
const pool = require("./db");

app.use(cors());
app.use(express.json());
const port = 5000

app.get("/", (req, res) => {
    res.send("hello world !");
});


app.use('/api/v1/feedbacks', feedbackRoutes);



app.listen(port, () => {

    console.log(`server has started at port ${port}`);
});