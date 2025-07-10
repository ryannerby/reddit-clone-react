const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());

const topicsRoutes = require('./routes/topics');
app.use('/topics', topicsRoutes);

const PORT = process.env.PORT || 5050;


mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('MongoDB connected'))
  .catch((err) => console.error(err));


app.get('/', (req, res) => res.send('API Running'));

app.listen(PORT, () => {
  console.log(`✅ Server running → http://localhost:${PORT}`);
});