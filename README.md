# Travel Planner - Backend (Final Project)

This is the backend API for the Travel Planner project, built as part of the **Adnexio Software Engineering Final Project**. It handles data persistence, RESTful routing, and server-side validation for the application.

---

## 📺 Project Demonstration
Click the link below to watch the full walkthrough of the application, features, and technical implementation:

**[Watch the Presentation Video on YouTube](https://youtu.be/8FNqd_3UPyw)**

---

## 🚀 Live Links
* **Backend API (Live):** https://travel-planner-api-ao35.onrender.com
* **Live Website (Frontend):** https://travel-planner-frontend-2z3i.onrender.com

---

## ✨ Features Implemented
* **Full CRUD Operations:** Comprehensive RESTful endpoints to Create, Read, Update, and Delete travel data.
* **Robust Error Handling:** Implementation of try-catch blocks and appropriate HTTP status codes (200, 201, 400, 404, 500) to ensure API reliability.
* **Server-Side Validation:** Ensures all incoming requests contain valid and complete data before interacting with the database.
* **CORS Configuration:** Configured to allow secure cross-origin communication between the Render-hosted frontend and backend.
* **Environment Management:** Sensitive credentials and database connection strings are managed securely via `dotenv`.

## 🛠️ Tech Stack Used
* **Runtime:** Node.js
* **Framework:** Express.js
* **Database:** PostgreSQL (Managed instance on Render)
* **Libraries:** `pg` (node-postgres), `cors`, `dotenv`, `nodemon` (development)

---

## 📂 Project Structure
The backend follows a straightforward, single-level structure for simplicity and maintainability:

    backend/
    ├── node_modules/           # Project dependencies
    ├── .env                    # Environment variables (Internal use only)
    ├── .gitignore              # Files to be ignored by Git
    ├── database-schema.png     # Visual representation of the database tables
    ├── db.js                   # Database connection and pool configuration
    ├── index.js                # Main entry point, middleware, and API route definitions
    ├── package-lock.json       # Exact versions of installed dependencies
    ├── package.json            # Project metadata, scripts, and dependencies list
    └── README.md               # Backend documentation

---

## 📊 Database Schema
The application utilizes a relational PostgreSQL database with a `trips` table:

| Column | Data Type | Constraints |
| :--- | :--- | :--- |
| `id` | SERIAL | Primary Key |
| `destination` | VARCHAR(255) | NOT NULL |
| `start_date` | DATE | NOT NULL |
| `end_date` | DATE | NOT NULL |
| `budget` | NUMERIC(10, 2) | NOT NULL |

---

## 💻 Setup Instructions & Local Development

### Prerequisites
* Node.js (v14 or higher)
* PostgreSQL instance

### Local Installation
1. Navigate to the `backend` directory.
2. Install dependencies:
       npm install
3. Create a `.env` file in the root folder and configure your credentials:
       DATABASE_URL=your_postgresql_connection_string
       PORT=10000
4. Start the server:
       npm start

---

## 📡 API Endpoint Summary
| Method | Endpoint | Description |
| :--- | :--- | :--- |
| `GET` | `/trips` | Retrieve all trips sorted by date |
| `GET` | `/trips/:id` | Retrieve details for a specific trip |
| `POST` | `/trips` | Create a new trip itinerary |
| `PUT` | `/trips/:id` | Update an existing trip by ID |
| `DELETE` | `/trips/:id` | Remove a trip from the database |

---

## 👤 Developer Information
* **Developer:** Salehuddin Al-Ayyubi (Hud)
* **Program:** Adnexio Software Engineering Conversion Bootcamp
* **Submission Deadline:** May 9, 2026