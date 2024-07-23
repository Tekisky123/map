
import mongoose from 'mongoose';

const locationSchema = new mongoose.Schema({
  userName: String,
  userMobile: String,
  latitude: Number,
  longitude: Number,
  createdAt: { type: Date, default: Date.now, expires: '1h' } // Expires after 1 hour
});

const Location = mongoose.model('Location', locationSchema);

export default Location;
