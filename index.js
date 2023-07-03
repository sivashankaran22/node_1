const express = require("express")
const fs = require("fs")
const app =express()

app.get("/timestamp",(req,res)=>{   
    let date = new Date();
    const timeStampDate = date.toUTCString().slice(0,-3);
    fs.writeFileSync("./current date-time.txt",timeStampDate, (err)=>{
        if(err){
            res.send({message:"Error"})
        }
    })
    res.send(timeStampDate);
})

// http://localhost:9000/

// listen and start a http server

app.listen(9000, ()=> console.log(`server started in localhost:9000`))