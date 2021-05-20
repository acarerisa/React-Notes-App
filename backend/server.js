const express = require('express');
const app = express();
const cors = require('cors');
const mongoose = require('mongoose');

app.use(cors());
app.use(express.json());

mongoose.connect("mongodb+srv://cimbombom:cimbombom@cluster0.isk58.mongodb.net/notesDB?retryWrites=true&w=majority");

app.use("/",require("./route/noteRoute"));

app.listen(3001, ()=>{
    console.log("3001 portu çalışıyor")
})



