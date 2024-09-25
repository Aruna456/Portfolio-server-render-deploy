const express=require('express')
const router=express.Router()
const User=require('../models/userModel')

router.post('/add',async(req,res)=>{
    try {

        const userdata = new User(req.body)
        if(!userdata)
        {
            console.log("Enter specified details");
        }
        const savedata=await userdata.save()
        res.status(201).json(savedata)

        
    } catch (error) {
        
        res.status(500).json(error)
    }
})

module.exports=router