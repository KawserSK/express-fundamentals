const express = require('express');
const app = express();


// app.all("*",(req,res) => {
//     console.log("=======>", req.method)
//     res.send(`<h1>Hello kkk from Express</h1>`)
// })

app.get("/", (req,res)=>{
    console.log("=======>", req.method)
    res.send(`<h1>Hello from Get</h1>`)
})
app.post("/", (req,res)=>{
    console.log("=======>", req.method)
    res.send(`<h1>Hello from post</h1>`)
})
app.put("/", (req,res)=>{
    console.log("=======>", req.method)
    res.send(`<h1>Hello from Put</h1>`)
})
app.patch("/", (req,res)=>{
    console.log("=======>", req.method)
    res.send(`<h1>Hello from Patch</h1>`)
})
app.delete("/", (req,res)=>{
    console.log("=======>", req.method)
    res.send(`<h1>Hello from Delete</h1>`)
})


app.listen(5050, ()=>{
    console.log('Server is running at port 5050')
});