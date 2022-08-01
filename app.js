
const express = require("express");

const app = express();

app.get("/",function(req, res){
    const url ="https://api.openweathermap.org/data/2.5/weather?q=Paris&appid=1e05b64943c967b43b3d8f9404a7c5f0&units=metric";
    https.get(url, function(response){
        console.log(response);
    });
    
    res.send("Server is up and running.")
})



app.listen(3000, function(){
    console.log("Server is running on port 3000");
    
    })
