const mongoose = require('mongoose')
const uri = "mongodb://127.0.0.1:27017";
mongoose.connect( uri ,{ 
    useNewUrlParser: true, 
    useUnifiedTopology: true,
    // useCreateIndex: true,
})

mongoose.connection
.once("open", ()=>console.log("Connected"))
.on("error", error =>{
    console.log("error", error)
})

module.exports = mongoose