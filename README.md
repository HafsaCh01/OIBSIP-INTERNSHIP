# PizzaCraft — Full-Stack Pizza Ordering Web Application

A modern full-stack pizza ordering web application that allows users to build custom pizzas, manage their cart, securely authenticate, and place orders online.

Built with **React**, **Node.js**, **Express.js**, and **MongoDB**, the application features JWT authentication, email verification, Razorpay payment integration (test mode), and dedicated dashboards for users and administrators.

---

## Screenshots

### Home

<img width="947" alt="Home" src="https://github.com/user-attachments/assets/e4a6f091-590d-49ef-8c47-1374d8f8faaf" />

### Pizza Builder

<img width="935" alt="Pizza Builder" src="https://github.com/user-attachments/assets/6ffe5c03-e2a4-4c2f-bc33-f5dd3088c6f3" />

### Menu

<img width="947" alt="Menu" src="https://github.com/user-attachments/assets/3cfe5412-a7ee-4db2-9375-fdce6fd79e15" />

### Cart

<img width="947" alt="Cart" src="https://github.com/user-attachments/assets/0b769159-f862-4668-aa5c-178c7fe671dc" />

### Checkout

<img width="938" alt="Checkout" src="https://github.com/user-attachments/assets/924b0483-5947-48af-824e-2b0301c0be5c" />

---

## Features

### Authentication & Authorization

- User registration and login
- JWT-based authentication
- Password hashing using bcrypt.js
- Email verification
- Forgot & Reset Password functionality
- Role-based access control (User and Admin)
- Protected frontend routes and backend middleware

### Custom Pizza Builder

Users can create their own pizza by selecting:

- Pizza base
- Sauce
- Cheese
- Vegetable toppings

Features include:

- Live price calculation
- Dynamic ingredient selection
- Interactive ordering experience

### Shopping Cart

- Add and remove pizzas
- Quantity management
- Real-time total calculation
- Cart drawer interface

### Checkout

- Order summary
- Razorpay test-mode integration
- Secure payment workflow

### User Dashboard

Users can:

- View profile information
- Track orders
- View order history
- Manage account details

### Admin Dashboard

Administrators can:

- Access protected admin routes
- Manage users and orders
- Monitor platform activity

### Order Tracking

- View order status
- Pending
- Processing
- Delivered

---

## Tech Stack

### Frontend

- React 18
- React Router v6
- Axios
- Context API
- Custom CSS

### Backend

- Node.js
- Express.js
- MongoDB
- Mongoose
- JWT Authentication
- bcrypt.js
- Nodemailer
- Razorpay (Test Mode)

---

## Project Structure

```text
pizza-app/
│
├── frontend/
│   ├── public/
│   └── src/
│       ├── api/
│       ├── assets/
│       ├── components/
│       ├── context/
│       ├── pages/
│       ├── routes/
│       ├── styles/
│       └── App.js
│
├── backend/
│   ├── config/
│   ├── controllers/
│   ├── middleware/
│   ├── models/
│   ├── routes/
│   ├── utils/
│   ├── server.js
│   └── package.json
│
└── README.md
```

---

## Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/pizza-app.git
cd pizza-app
```

### 2. Backend Setup

```bash
cd backend
npm install
```

Create a `.env` file:

```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
EMAIL_USER=your_email
EMAIL_PASS=your_email_password
RAZORPAY_KEY_ID=your_key
RAZORPAY_KEY_SECRET=your_secret
```

Start the backend server:

```bash
npm run dev
```

Backend runs on:

```text
http://localhost:5000
```

### 3. Frontend Setup

```bash
cd frontend
npm install
npm start
```

Frontend runs on:

```text
http://localhost:3000
```

---

## Environment Notes

### Email Testing

Use Mailtrap during development to test:

- Email verification
- Password reset emails

without sending emails to real users.

### Admin Account

Create a normal user account first.

Then either:

- Update the user's `role` field to `"admin"` in MongoDB

or

- Register using Postman with:

```json
{
  "role": "admin"
}
```

### Razorpay

The application currently uses Razorpay Test Mode.

No real payments are processed.

---

## Current Status

- User Authentication
- Email Verification
- Forgot & Reset Password
- Custom Pizza Builder
- Shopping Cart
- Protected Routes
- User Dashboard
- Admin Dashboard
- Checkout Flow
- Razorpay Test Integration

In Progress:

- Order Status Updates
- Admin Inventory Management
- Production Payment Integration

---

## Future Improvements

- Inventory management
- Coupon and discount system
- Customer reviews and ratings
- Saved pizzas and favorites
- Delivery tracking
- Email notifications
- Admin analytics dashboard
- Production-ready payment integration

---

## Author

**Hafsa Shahzad**

---

## License

This project is licensed under the MIT License.
