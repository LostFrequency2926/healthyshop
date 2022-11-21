import mongoose from 'mongoose';

const movementSchema = new mongoose.Schema({
    date: {
        type: Date,
        required: true,
        trim: true
    },
    idItem: {
        type: Number,
        required: true,
    },
    amountMovement: {
        type: Number,
        required: true,
    },
    amount: {
        type: Number,
        required: true,
    },
})

export default mongoose.model('Movement', movementSchema);