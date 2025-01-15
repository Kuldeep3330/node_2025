const express = require('express');

const app=express();
const PORT=3000

app.get('/', (req, res)=>{
    // res.status(200).send('hello from the server side')
    res.status(200).json({
        message:'hello from the server side',
        app:'Natours'
    })
})
app.post('/', (req, res)=>{
    res.send( 'you can post to this endpoint')
})

app.listen(PORT,()=>{
    console.log(`app is listening on ${PORT}`);    
})