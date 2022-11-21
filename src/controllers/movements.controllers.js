import Movement from "../models/movimientoMongo.js";
import { uploadImage, deleteImage } from "../libraries/cloudinary.js";
import fs from "fs-extra";

export const getMovements = async (req, res) => {
  try {
    const Movements = await Movement.find();
    res.send(Movements);
  } catch (error) {
    console.log(error.message);
    return res.status(500).json({ message: error.message });
  }
};

export const createMovements = async (req, res) => {
  try {
    const { date, idItem, amountMovement, amount } = req.body;
    let image;

    if (req.files.image) {
      const result = await uploadImage(req.files.image.tempFilePath);
      await fs.remove(req.files.image.tempFilePath);
      image = {
        url: result.secure_url,
        public_id: result.public_id,
      };
      console.log(result);
    }

    const NewMovement = new Movement({ date, idItem, amountMovement, amount });
    await NewMovement.save();
    return res.json(NewMovement);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: error.message });
  }
};

export const updateMovements = async (req, res) => {
  try {
    const updatedMovement = await Movement.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true,
      }
    );
    return res.send(updatedMovement);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const deleteMovements = async (req, res) => {
  try {
    const MovementRemoved = await Movement.findByIdAndDelete(req.params.id);

    if (!MovementRemoved) {
      return res.sendStatus(404);
    } else {

      if (MovementRemoved.image.public_id) {
        await deleteImage(MovementRemoved.image.public_id);
      }
      return res.sendStatus(204);
    }
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const getMovement = async (req, res) => {
  try {
    const OneMovement = await Movement.findById(req.params.id);

    if (!OneMovement) {
      return res.sendStatus(404);
    } else {
      return res.json(OneMovement);
    }
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};