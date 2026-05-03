# Travel Planner

## Project Description
The **Travel Planner** is a comprehensive full-stack web application designed to help users organize upcoming trips, manage travel budgets, and track individual savings goals. This project demonstrates a complete integration of a frontend interface, a RESTful API backend, and a persistent PostgreSQL database, fulfilling the requirements for the Adnexio Software Engineering Final Project.

## Deployment Links
*   **Live Website:** [https://travel-planner-frontend-2z3i.onrender.com](https://travel-planner-frontend-2z3i.onrender.com)
*   **Backend API:** [https://travel-planner-api-ao35.onrender.com](https://travel-planner-api-ao35.onrender.com)

## Features Implemented
*   **Full CRUD Operations:** Create, Read, Update, and Delete travel itineraries seamlessly.
*   **Dynamic Status Badges:** Automatically categorizes trips as **Upcoming**, **Ongoing**, or **Completed** based on the current system date.
*   **Search & Filtering:** Real-time search by destination and multi-criteria sorting (Soonest Date, Budget High-to-Low, Budget Low-to-High).
*   **Trip Details & Savings Tracker:** Individual detail pages for each trip featuring a "Tabung" (savings goal) progress bar utilizing LocalStorage.
*   **Backend Validation:** Server-side validation implemented to prevent empty or incomplete data submissions, ensuring data integrity.

## Tech Stack Used
*   **Frontend:** HTML5, CSS3, Vanilla JavaScript
*   **Backend:** Node.js, Express.js
*   **Database:** PostgreSQL (Hosted on Render)
*   **Tools:** REST API, CORS, dotenv, LocalStorage

## Database Schema
The system uses a relational database with a `trips` table structured as follows:
*   `id`: SERIAL (Primary Key)
*   `destination`: VARCHAR(255) (Not Null)
*   `start_date`: DATE (Not Null)
*   `end_date`: DATE (Not Null)
*   `budget`: NUMERIC(10, 2) (Not Null)

## Setup Instructions & How to Run Locally

### Prerequisites
*   Node.js installed
*   PostgreSQL installed and running

### Backend Setup
1.  Navigate to the `backend` directory.
2.  Run `npm install` to install dependencies (express, cors, pg, dotenv).
3.  Configure your `.env` file with your database credentials.
4.  Run `npm start` to start the server at `http://localhost:10000`.

### Frontend Setup
1.  Navigate to the `frontend` directory.
2.  Update the `API_URL` in `script.js` to point to your local backend.
3.  Open `index.html` in your web browser (or use VS Code Live Server).

## API Endpoint Summary
| Method | Endpoint | Description |
| :--- | :--- | :--- |
| `GET` | `/trips` | Retrieve all trips sorted by date |
| `GET` | `/trips/:id` | Retrieve details for a specific trip |
| `POST` | `/trips` | Create a new trip (requires validation) |
| `PUT` | `/trips/:id` | Update an existing trip by ID |
| `DELETE` | `/trips/:id` | Remove a trip from the database |

## Developer Information
*   **Developer:** Salehuddin Al-Ayyubi (Hud)
*   **Program:** Adnexio Software Engineering Conversion Bootcamp
*   **Submission Deadline:** May 9, 2026