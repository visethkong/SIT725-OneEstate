import express from "express";
import {createHouse, deleteHouse, getHouse, getHouses, updateHouse } from "../controllers/house.js";
import House from "../models/House.js";
import { createError } from "../utils/error.js";

const router = express.Router();

//CREATE
router.post("/", createHouse);
    
//UPDATE
router.put("/:id", updateHouse);

//DELETE
router.delete("/:id", deleteHouse);

//GET
router.get("/:id", getHouse);

//GET ALL
router.get("/", getHouses);

export default router