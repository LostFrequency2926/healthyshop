import mongoose from 'mongoose';

const movementSchema = new mongoose.Schema({
    name: {
        type: 'string',
        required: true,
        trim: true
    },
    DNI: {
        type: Number,
        required: true,
        trim: true
    },
    Age: {
        type: Number,
        required: true,
        trim: true
    },
    Profile: {
        type: String,
        required: true,
        trim: true
    },
})

export default mongoose.model('User', movementSchema);