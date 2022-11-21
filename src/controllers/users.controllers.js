import User from "../models/usuariosMongo.js";
import { uploadImage, deleteImage } from "../libraries/cloudinary.js";
import fs from "fs-extra";

export const getUsers = async (req, res) => {
  try {
    const Users = await User.find();
    res.send(Users);
  } catch (error) {
    console.log(error.message);
    return res.status(500).json({ message: error.message });
  }
};

export const createUsers = async (req, res) => {
  try {
    const { name, DNI, Age, Profile } = req.body;
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

    const NewUser = new User({ name, DNI, Age, Profile });
    await NewUser.save();
    return res.json(NewUser);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: error.message });
  }
};

export const updateUsers = async (req, res) => {
  try {
    const updatedUser = await User.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true,
      }
    );
    return res.send(updatedUser);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const deleteUsers = async (req, res) => {
  try {
    const UserRemoved = await User.findByIdAndDelete(req.params.id);

    if (!UserRemoved) {
      return res.sendStatus(404);
    } else {

      if (UserRemoved.image.public_id) {
        await deleteImage(UserRemoved.image.public_id);
      }
      return res.sendStatus(204);
    }
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const getUser = async (req, res) => {
  try {
    const OneUser = await User.findById(req.params.id);

    if (!OneUser) {
      return res.sendStatus(404);
    } else {
      return res.json(OneUser);
    }
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};