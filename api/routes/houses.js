import express from "express";
import {
  countByCity,
  countByType,
  createHouse,
  deleteHouse,
  getHouse,
  getHouses,
  getHouseRooms,
  updateHouse,
} from "../controllers/house.js";
import House from "../models/House.js";
import {verifyAdmin} from "../utils/verifyToken.js"

const router = express.Router();

//CREATE
router.post("/", verifyAdmin, createHouse);

//UPDATE
router.put("/:id", verifyAdmin, updateHouse);

//DELETE
router.delete("/:id", verifyAdmin, deleteHouse);

//GET
router.get("/find/:id", getHouse);

//GET ALL
router.get("/", getHouses);

router.get("/countByCity", countByCity);
router.get("/countByType", countByType);
router.get("/room/:id", getHouseRooms);

export default router;
