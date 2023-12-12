const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
// MongoDB connection setup
mongoose.connect('mongodb+srv://hussein:mypassword@cluster0.swpbv92.mongodb.net/?retryWrites=true&w=majority', { useNewUrlParser: true, useUnifiedTopology: true });

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => {
    console.log('Connected to MongoDB');
});

// Define the appointment schema and model
const appointmentSchema = new mongoose.Schema({
    fullName: String,
    email: String,
    doctor: String,
    appointmentDate: Date,
});

const Appointment = mongoose.model('Appointment', appointmentSchema);

app.use(bodyParser.json());

// Welcome message
app.get('/', (req, res) => {
    res.send('Welcome to the appointment server');
});

// Submit appointment endpoint
app.post('/submit-appointment', async (req, res) => {
    const appointmentData = req.body;

    try {
        const newAppointment = new Appointment(appointmentData);
        await newAppointment.save();

        console.log('Appointment submitted and saved to the database:', appointmentData);

        res.json({ message: 'Appointment submitted successfully' });
    } catch (error) {
        console.error('Error saving appointment:', error);
        res.status(500).json({ message: 'Error submitting appointment' });
    }
});

// Get all appointments endpoint
app.get('/get-appointments', async (req, res) => {
    try {
        // Retrieve all appointments from MongoDB
        const appointments = await Appointment.find();
        res.json(appointments);
    } catch (error) {
        console.error('Error retrieving appointments:', error);
        res.status(500).json({ message: 'Error retrieving appointments' });
    }
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});