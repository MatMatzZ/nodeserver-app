const express = require('express');
const app = express();
var port = process.env.PORT || 5000

app.get('/',(req,res)=>{
    res.send("Hello Node")
})

app.listen(port, ()=> console.log(`Server is running on port: ${port}`))

