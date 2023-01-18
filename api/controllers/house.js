import House from "../models/House.js";
import Room from "../models/Room.js";

export const createHouse= async (req, res, next) => {
  const newHouse = new House(req.body);

  try {
    const savedHouse = await newHouse.save();
    res.status(200).json(savedHouse);
  } catch (err) {
    next(err);
  }
};

export const updateHouse = async (req, res, next) => {
  try {
    const updatedHouse = await House.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true }
    );
    res.status(200).json(updatedHouse);
  } catch (err) {
    next(err);
  }
};

export const deleteHouse = async (req, res, next) => {
  try {
    await House.findByIdAndDelete(req.params.id);
    res.status(200).json("House has been deleted.");
  } catch (err) {
    next(err);
  }
};

export const getHouse = async (req, res, next) => {
  try {
    const house = await House.findById(req.params.id);
    res.status(200).json(house);
  } catch (err) {
    next(err);
  }
};

export const getHouses = async (req, res, next) => {
  try {
    const houses = await House.find();
    res.status(200).json(houses);
  } catch (err) {
    next(err);
  }
};

export const countByCity = async (req, res, next) => {
  const cities = req.query.cities.split(",");
  try {
    const list = await Promise.all(
      cities.map((city) => {
        return House.countDocuments({ city: city });
      })
    );
    res.status(200).json(list);
  } catch (err) {
    next(err);
  }
};

export const countByType = async (req, res, next) => {
  try {
    const hotelCount = await House.countDocuments({ type: "hotel" });
    const apartmentCount = await House.countDocuments({ type: "apartment" });
    const resortCount = await House.countDocuments({ type: "resort" });
    const villaCount = await House.countDocuments({ type: "villa" });
    const cabinCount = await House.countDocuments({ type: "cabin" });

    res.status(200).json([
      { type: "hotel", count: hotelCount },
      { type: "apartments", count: apartmentCount },
      { type: "resorts", count: resortCount },
      { type: "villas", count: villaCount },
      { type: "cabins", count: cabinCount },
    ]);
  } catch (err) {
    next(err);
  }
};

export const getHouseRooms = async (req, res, next) => {
  try {
    const house = await House.findById(req.params.id);
    const list = await Promise.all(
      house.rooms.map((room) => {
        return Room.findById(room);
      })
    );
    res.status(200).json(list)
  } catch (err) {
    next(err);
  }
};