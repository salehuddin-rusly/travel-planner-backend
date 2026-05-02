const express = require('express');
const cors = require('cors');
const pool = require('./db');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
    res.send('Travel Planner API is running...');
});

app.post('/trips', async (req, res) => {
    try {
        const { destination, start_date, end_date, budget } = req.body;
        
        if (!destination || !start_date || !end_date || !budget) {
            return res.status(400).json("All fields are required");
        }

        const newTrip = await pool.query(
            "INSERT INTO trips (destination, start_date, end_date, budget) VALUES($1, $2, $3, $4) RETURNING *",
            [destination, start_date, end_date, budget]
        );
        res.json(newTrip.rows[0]);
    } catch (err) {
        console.error(err.message);
        res.status(500).send("Server Error");
    }
});

app.get('/trips', async (req, res) => {
    try {
        const allTrips = await pool.query("SELECT * FROM trips ORDER BY start_date ASC");
        res.json(allTrips.rows);
    } catch (err) {
        console.error(err.message);
        res.status(500).send("Server Error");
    }
});

app.get('/trips/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const trip = await pool.query("SELECT * FROM trips WHERE id = $1", [id]);
        
        if (trip.rows.length === 0) {
            return res.status(404).json("Trip not found");
        }
        
        res.json(trip.rows[0]);
    } catch (err) {
        console.error(err.message);
        res.status(500).send("Server Error");
    }
});

app.put('/trips/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const { destination, start_date, end_date, budget } = req.body;
        
        if (!destination || !start_date || !end_date || !budget) {
            return res.status(400).json("All fields are required");
        }

        const updateTrip = await pool.query(
            "UPDATE trips SET destination = $1, start_date = $2, end_date = $3, budget = $4 WHERE id = $5 RETURNING *",
            [destination, start_date, end_date, budget, id]
        );

        res.json("Trip was updated!");
    } catch (err) {
        console.error(err.message);
        res.status(500).send("Server Error");
    }
});

app.delete('/trips/:id', async (req, res) => {
    try {
        const { id } = req.params;
        await pool.query("DELETE FROM trips WHERE id = $1", [id]);
        res.json("Trip deleted successfully");
    } catch (err) {
        console.error(err.message);
        res.status(500).send("Server Error");
    }
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});