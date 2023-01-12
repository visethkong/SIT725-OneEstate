import House from "../models/House.js";

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