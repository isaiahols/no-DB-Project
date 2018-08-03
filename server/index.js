const express = require('express');
const bodyParser = require('body-parser');

const jc = require('./controller/jokes_controller');

const app = express();
app.use(bodyParser.json());


// 
// 
// This is the section that handles incoming requests
// 
// 

app.get('/api/joke',jc.sendOneJoke);







// 
// 
// This is he Listen Section
// 
// 

const PORT = 3050;

app.listen(PORT,()=>{
    console.log(`We are running on port ${PORT}`);
    
})

