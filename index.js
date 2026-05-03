const express = require('express');
const cors = require('cors');
const { Pool } = require('pg');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());

const pool = new Pool({
    user: process.env.DB_USER,
    host: process.env.DB_HOST,
    database: process.env.DB_NAME,
    password: process.env.DB_PASSWORD,
    port: process.env.DB_PORT,
    ssl: {
        rejectUnauthorized: false
    }
});

app.get('/trips', async (req, res) => {
    try {
        const result = await pool.query('SELECT * FROM trips ORDER BY start_date ASC');
        res.json(result.rows);
    } catch (err) {
        res.status(500).send("Server Error");
    }
});

app.post('/trips', async (req, res) => {
    const { destination, start_date, end_date, budget } = req.body;

    // VALIDATION: Reject if fields are empty
    if (!destination || !start_date || !end_date || !budget) {
        return res.status(400).json({ error: "All fields are required!" });
    }

    try {
        const result = await pool.query(
            'INSERT INTO trips (destination, start_date, end_date, budget) VALUES ($1, $2, $3, $4) RETURNING *',
            [destination, start_date, end_date, budget]
        );
        res.json(result.rows[0]);
    } catch (err) {
        res.status(500).send("Server Error");
    }
});

app.get('/trips/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const result = await pool.query('SELECT * FROM trips WHERE id = $1', [id]);
        res.json(result.rows[0]);
    } catch (err) {
        res.status(500).send("Server Error");
    }
});

app.put('/trips/:id', async (req, res) => {
    const { id } = req.params;
    const { destination, start_date, end_date, budget } = req.body;

    // VALIDATION: Reject if fields are empty
    if (!destination || !start_date || !end_date || !budget) {
        return res.status(400).json({ error: "All fields are required!" });
    }

    try {
        await pool.query(
            'UPDATE trips SET destination=$1, start_date=$2, end_date=$3, budget=$4 WHERE id=$5',
            [destination, start_date, end_date, budget, id]
        );
        res.json({ message: "Trip updated" });
    } catch (err) {
        res.status(500).send("Server Error");
    }
});

app.delete('/trips/:id', async (req, res) => {
    const { id } = req.params;
    try {
        await pool.query('DELETE FROM trips WHERE id = $1', [id]);
        res.json({ message: "Trip deleted" });
    } catch (err) {
        res.status(500).send("Server Error");
    }
});

const PORT = process.env.PORT || 10000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});