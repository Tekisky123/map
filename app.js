// server.js
import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import cors from 'cors';
import locationRoutes from './routes/locationRoutes.js';

const app = express();
app.use(bodyParser.json());
app.use(cors());

// Connect to MongoDB
mongoose.connect('mongodb+srv://furquantekisky:a8WMlpOlHyvU4tfx@cluster0.jzpldvt.mongodb.net/MMH-DB', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

// Use routes
app.use('/api', locationRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
