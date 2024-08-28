//import dotenv
require('dotenv').config()
//import express
const express = require('express')
//import cors
const cors = require('cors')

//import router
const router = require('./routes')
//import mongodb connection
require('./connection')

//app-middleware
//const appMiddleware = require('./middleware/appMiddleware')

//create server
const pfServer = express()

//to connect with frontend
pfServer.use(cors())

//parse json formate - json()
pfServer.use(express.json())

//app middleware
//pfServer.use(appmiddleware)

//router
pfServer.use(router)

//static - method is used to export a folder /file from the serverside

pfServer.use('/uploads',express.static('./uploads'))

//port
const PORT = 4000 || process.env.PORT

//server checking the request recieved at port 
pfServer.listen(PORT,()=>{
    console.log(`server running successfully at port number ${PORT}`);
    
})

//logic
// pfServer.get('/get',(req,res)=>{
//     res.send('get request received')
// })

// pfServer.post('/post',(req,res)=>{
//     res.send('post request received')
// })

// pfServer.put('/put',(req,res)=>{
//     res.send('get request received')
// })

// pfServer.delete('/delete',(req,res)=>{
//     res.send('delete request received')
// })