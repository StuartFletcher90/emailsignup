const express = require('express')
const app = express();
const path = require('path')
const { runQuery, addEmail } = require('./app');

app.listen(3002, () => {
    console.log('listening on port 3002')
});

app.use(express.static(path.join(__dirname, 'public')))

app.get("/data", async (req,res)=> {
    const data = await runQuery();
    console.log(data);

    res.send({
        data: data
    });
});

// app.use(express.static(path.join(__dirname, '')))

// app.get('/emails', async (req,res)=>{
//     let data = await main(req.query.app)
//     res.send(data)
// })

