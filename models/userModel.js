const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    email: { type: String, required: true, unique: true },
    location: {
        lat: { type: Number, required: true },
        lon: { type: Number, required: true }
    },
    weatherData: [
        {
            date: { type: Date, required: true },
            weather: { type: String, required: true }
        }
    ]
});

module.exports = mongoose.model('User', userSchema);
