import mongoose from "mongoose";
//import { MONGODB_URI } from './config.js'

export async function DBconnection() {
  try {
    const db = await mongoose.connect("mongodb+srv://healthyShop:Fh9K5Z7ArnaryeRX@cluster0.ieztwhj.mongodb.net/healthyShop");
    console.log("Connection established to " + db.connection.name)
  } catch (error) {
  }
}