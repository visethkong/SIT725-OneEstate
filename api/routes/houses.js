import express from "express";
import House from "../models/House.js";

const router = express.Router();

//CREATE
router.post("/", async (req,res)=>{
    
    const newHouse = new House(req.body)
    
    try{
        const savedHouse = await newHouse.save()
        res.status(200).json(savedHouse)
    }catch(err){
        res.status(500), json(err)
    }
});

//UPDATE
router.put("/:id", async (req,res)=>{
        
    try{
        const updatedHouse = await House.findByIdAndUpdate(req.params.id, { $set: req.body}, { new: true})
        res.status(200).json(updatedHouse)
    }catch(err){
        res.status(500), json(err)
    }
});

//DELETE
router.delete("/:id", async (req,res)=>{
        
    try{
        await House.findByIdAndDelete(req.params.id);
        res.status(200).json("House has been deleted.")
    }catch(err){
        res.status(500), json(err)
    }
});

//GET
router.get("/:id", async (req,res)=>{
        
    try{
        const house = await House.findById(req.params.id);
        res.status(200).json(house)
    }catch(err){
        res.status(500), json(err)
    }
});

//GET ALL
router.get("/", async (req,res)=>{
        
    try{
        const houses = await House.find();
        res.status(200).json(houses)
    }catch(err){
        res.status(500), json(err)
    }
});

export default router