const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();

const allowedOrigins = [
  'https://siddhi-client.vercel.app', // ✅ production
  'http://localhost:4200'                // ✅ development
];

// ✅ Correct CORS config
app.use(cors({
  origin: function (origin, callback) {
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  credentials: true
}));

// ✅ Middleware
app.use(bodyParser.json());

// ✅ MongoDB
mongoose.connect('mongodb+srv://siddhi-thakur:siddhi-thakur@cluster0.8nqmclt.mongodb.net/siddhi?retryWrites=true&w=majority&appName=Cluster0')
  .then(() => console.log("MongoDB Connected"))
  .catch(err => console.log(err));

// ✅ Schema + Route
const EnquirySchema = new mongoose.Schema({
  name: String,
  phone: String,
  message: String,
  createdAt: { type: Date, default: Date.now }
});
const Enquiry = mongoose.model('Enquiry', EnquirySchema);

app.post('/enquiries', async (req, res) => {
  try {
    const enquiry = new Enquiry(req.body);
    await enquiry.save();
    res.status(201).send({ message: 'Enquiry saved!' });
  } catch (err) {
    res.status(500).send({ error: 'Error saving enquiry' });
  }
});

// ✅ Port
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
}); 