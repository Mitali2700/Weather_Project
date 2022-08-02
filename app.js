
const { response } = require("express");
const express = require("express");
const https = require("https");
const app = express();

app.get("/",function(req, res){
    const url ="https://api.openweathermap.org/data/2.5/weather?q=Paris&appid=1e05b64943c967b43b3d8f9404a7c5f0&units=metric";
    https.get(url, function(response){
        console.log(response.statusCode);

        response.on("data", function(data){
            // console.log(data);
            const weatherData = JSON.parse(data);
            //console.log(weatherData);
            // const object={
            //     name: "Mitali",
            //     favouriteFood: "Dal-Bati🍛",
            // }
            // console.log(JSON.stringify(object));
            const temp = weatherData.main.temp;
            console.log(temp);
            const desc = weatherData.weather[0].description;
            //console.log(desc);

            // We can hve only 1 res.send but can have mulgtiple res.write()
            res.write("<p>The wether is currently "+desc+"<p>");
            
            //res.send("<H1>The temperture in London is "+ temp+" degree Celcius</H1>")
            res.write("<H1>The temperture in London is "+ temp +" degree Celcius</H1>");
            //res.send();
            const icon= weatherData.weather[0].icon;
            //res.write(icon);
            
            const imageURL = "http://openweathermap.org/img/wn/"+ icon +"@2x.png"
            res.write("<img src ="+ imageURL +">");
    
            res.send();
        })
    
    })
    
    // We commit this send because due to this send, send at the upper part is not working and also giving error at hyper terminal.
    //res.send("Server is up and running.")
})



app.listen(3000, function(){
    console.log("Server is running on port 3000");
    
    })
