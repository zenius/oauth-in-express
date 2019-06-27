// require modules
const express = require('express'); 

const app = express(); 
const port = process.env.PORT || 3000; 

app.get("/", (req, res) => { 
    res.send("Trying OAuth in Express"); 
}); 

app.listen(port, () => {
    console.log(`server listening at port ${port}`); 
}); 