const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const connectDB = require('./config/db');
require('dotenv').config();
const enquiryRoutes = require('./routes/enquiryRoutes');


const app = express();
const PORT = process.env.PORT || 5000;

// Connect to MongoDB
connectDB();

// Middleware
app.use(cors());
app.use(bodyParser.json());

app.use('/api/enquiries', enquiryRoutes);


// Root URL Route
app.get('/', (req, res) => {
    res.send('Welcome to the SV BACKEND ALL VIEWS');
});

// Start server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});

