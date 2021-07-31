const express = require('express');
const app = express();
var port = process.env.PORT || 5000

let ctr = 1;
setInterval(()=>{
    ctr++;
},5000)
app.get('/',(req,res)=>{
    res.send(`Refresh in 5 seconds: (Counter: ${ctr})`)
})
app.listen(port, ()=> console.log(`Server is running on port: ${port}`))

