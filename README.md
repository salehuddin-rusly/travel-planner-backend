# Travel Planner

## Project Description
The Travel Planner is a full-stack web application designed to help users organize their upcoming trips, manage travel budgets, and track individual savings goals. 

## Features Implemented
* **Full CRUD Operations:** Create, Read, Update, and Delete travel itineraries.
* **Dynamic Status Badges:** Automatically categorizes trips as Upcoming, Ongoing, or Completed based on the current system date.
* **Search & Filtering:** Real-time search by destination and multi-criteria sorting (Soonest Date, Budget High-to-Low, Budget Low-to-High).
* **Trip Details & Savings Tracker:** Individual detail pages for each trip featuring a "Tabung" (savings goal) progress bar utilizing LocalStorage.
* **Backend Validation:** Server-side validation to prevent empty or incomplete data submissions.

## Tech Stack Used
* **Frontend:** HTML5, CSS3, Vanilla JavaScript
* **Backend:** Node.js, Express.js
* **Database:** PostgreSQL
* **Tools:** REST API, CORS, LocalStorage

## Setup Instructions & How to Run Locally

### Prerequisites
* Node.js installed
* PostgreSQL installed and running

### Backend Setup
1. Open a terminal and navigate to the `backend` directory.
2. Run `npm install` to install dependencies (express, cors, pg, dotenv).
3. Ensure your `.env` file is configured with your database credentials.
4. Run `npm start` or `npx nodemon index.js` to start the server.
5. The backend will run on `http://localhost:5000`.

### Frontend Setup
1. Open the `frontend` directory.
2. Open `index.html` in your web browser (or use an extension like Live Server in VS Code).

## API Endpoint Summary
* `GET /trips` - Retrieve all trips
* `GET /trips/:id` - Retrieve a specific trip by ID
* `POST /trips` - Create a new trip
* `PUT /trips/:id` - Update an existing trip by ID
* `DELETE /trips/:id` - Delete a trip by ID