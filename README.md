# Pizza Delivery Application

A full-stack pizza ordering web app built with **React**, **Node.js/Express**, and **MongoDB**.

Users can register, log in, build a custom pizza, add it to their cart, and check out. Admins get a separate dashboard for managing the platform.

## Tech Stack

**Frontend:** React 18, React Router v6, Axios, Context API (Auth & Cart state), custom CSS

**Backend:** Node.js, Express, MongoDB with Mongoose, JWT authentication, bcrypt.js for password hashing, Nodemailer for transactional emails, Razorpay (test mode) for payments

## Screenshots

<img width="940" height="411" alt="Screenshot 2026-07-27 193516" src="https://github.com/user-attachments/assets/5c0a2eaa-c8bd-4737-a3a4-4b6bf5993081" />
<img width="959" height="420" alt="Screenshot 2026-07-27 193651" src="https://github.com/user-attachments/assets/17e8f536-2cf0-41ef-8c0c-63ce0ce69522" />

<img width="665" height="419" alt="Screenshot 2026-07-27 193706" src="https://github.com/user-attachments/assets/a5e25d5a-c40d-43d5-ba44-c9301b1d2392" />

<img width="949" height="409" alt="Screenshot 2026-07-27 193713" src="https://github.com/user-attachments/assets/212d081c-20f1-482b-9e5c-1e49fdddc1c9" />
<img width="950" height="409" alt="Screenshot 2026-07-27 193853" src="https://github.com/user-attachments/assets/14f6a0f1-83f0-4b72-940c-03463b62ae2b" />

## Features

- **Authentication:** Register/login with JWT, email verification, forgot/reset password flow, role-based access (user vs admin)
- **Protected routes:** Frontend route guards and backend middleware restrict access based on login state and role
- **Pizza builder:** Choose base, sauce, cheese, and veggies with live pricing
- **Cart:** Add/remove items, view running total, cart drawer UI
- **Checkout:** Order summary and payment step (Razorpay test-mode integration)
- **Dashboards:** Separate user dashboard and admin dashboard
- **Order tracking:** UI for viewing order status

## Project Structure
pizza-app/
├── frontend/ # React app
│ └── src/
│ ├── components/
│ ├── pages/
│ ├── context/
│ └── api/
└── backend/ # Express API
├── controllers/
├── models/
├── routes/
├── middleware/
└── utils/


## Setup

### Backend

cd backend
npm install
cp .env.example .env # fill in MONGO_URI, JWT_SECRET, EMAIL_, RAZORPAY_ etc.
npm run dev # requires nodemon, or npm start
Server runs on http://localhost:5000 (health check: `GET /api/health`)

### Frontend

cd frontend
npm install
npm start

Runs on http://localhost:3000

## Environment Notes

- For email in development, use a free [Mailtrap.io](https://mailtrap.io) sandbox inbox to test verification/reset emails without sending to real addresses.
- To create an admin account: register normally with `"role": "admin"` in the request body (via Postman/curl), or manually update the `role` field to `"admin"` in MongoDB after registering.
- Razorpay keys are for test mode only — no real payments are processed.

## Status

This project is under active development. Core auth, the pizza builder, cart, and checkout UI are functional; live payment processing, backend order-status updates, and admin inventory management are being built out further.
