import express from "express";
import House from "../models/House.js";

const router = express.Router();

//CREATE
router.post("/", async (req,res)=>{
    
    const newHouse = new House(req.body)
    
    try{
        const savedHouse = await newHouse.save()
        res.status(200).json(savedHotel)
    }catch(err){
        res.status(500), json(err)
    }

})

export default router