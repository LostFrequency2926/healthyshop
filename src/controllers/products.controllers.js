import Product from "../models/productoMongo.js";
//import { uploadImage, deleteImage } from ".../node_modules/cloudinary/cloudinary.js";
//import fs from "fs-extra";


export const getProducts = async (req, res) => {
  try {
    const products = await Product.find();
    res.send(products);
  } catch (error) {
    console.log(error.message);
    return res.status(500).json({ message: error.message });
  }
};

export const createProducts = async (req, res) => {
  try {
    const { name, productType, price, amount, img, description } = req.body;
    // let image;

    // if (req.files.image) {
    //   const result = await uploadImage(req.files.image.tempFilePath);
    //   await fs.remove(req.files.image.tempFilePath);
    //   image = {
    //     url: result.secure_url,
    //     public_id: result.public_id,
    //   };
    //   console.log(result);
    // }
    const Newproduct = new Product({ name, productType, price, amount, img, description });
    await Newproduct.save();
    return res.json(Newproduct);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: error.message });
  }
};

export const updateProducts = async (req, res) => {
  try {
    const updatedProduct = await Product.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true,
      }
    );
    return res.send(updatedProduct);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const deleteProducts = async (req, res) => {
  try {
    const productRemoved = await Product.findByIdAndDelete(req.params.id);

    // if (!productRemoved) {
    //   return res.sendStatus(404);
    // } else {

    //   if (productRemoved.img.public_id) {
    //     await deleteImage(productRemoved.img.public_id);
    //   }
    //   return res.sendStatus(204);
    // }
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const getProduct = async (req, res) => {
  try {
    const OneProduct = await Product.findById(req.params.id);

    if (!OneProduct) {
      return res.sendStatus(404);
    } else {
      return res.json(OneProduct);
    }
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};