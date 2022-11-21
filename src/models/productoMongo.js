import mongoose from 'mongoose';

const productSchema = new mongoose.Schema({
    name: {
        type: 'string',
        required: true,
        trim: true
    },
    productType: {
        type: String,
        required: true,
        trim: true
    },
    price: {
        type: Number,
        required: true,
    },
    amount: {
        type: Number,
        required: true,
    },
    img: {
        url: String,
        public_id: String,
    },
    description: {
        type: String,
        required: true,
        trim: true
    },
})

export default mongoose.model('Product', productSchema);