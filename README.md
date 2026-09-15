# ✦ NEXA AI

NEXA AI is a full-stack AI-powered recruitment and employee management platform. It extends the original Round 1 frontend with a Node.js/Express backend, MongoDB persistence, JWT authentication, role-based admin access, contact submissions, newsletter subscriptions, free quote requests, and an AI assistant.

> **Important:** This project uses the same frontend website submitted in Round 1. The existing frontend was extended and connected to the backend rather than building a new frontend.

---

### 👑 Admin Panel

Admin-only dashboard available at `/admin`.

ADMIN_EMAIL= nexaadmin@gmail.com
ADMIN_PASSWORD= NexaAdmin@123

## 🚀 Features

### 🤖 AI Assistant

- AI-powered chat assistant
- AI responses are generated through the backend
- Chat messages are stored only in the browser using `localStorage`
- Chat history is separated by authenticated user
- Clearing chat removes the user's stored chat from `localStorage`
- AI chat messages are not stored in MongoDB

### 🔐 User Authentication

- User registration
- User login
- JWT authentication
- JWT expiration: 7 days
- Protected profile route
- Protected application pages
- Logout
- Logged-in user's name displayed in the application
- Password hashing with bcrypt
- Passwords are never stored as plain text
- Profile update
- Change password

### 📩 Contact Form

- Name
- Email
- Phone
- Subject
- Message
- Client-side validation
- Server-side validation
- MongoDB persistence
- Success/error feedback
- Admin viewing and deletion

### 📰 Newsletter Subscription

- Newsletter subscription from the website footer
- Email validation
- Server-side validation
- MongoDB persistence
- Duplicate subscription detection
- Exact duplicate response: `You are already subscribed`
- Frontend success/error feedback

### 💬 Get a Free Quote

The homepage includes a **Get a Free Quote** button that opens a modal.

Fields:

- Name
- Email
- Phone
- Service Required
- Budget
- Message

Features:

- Form validation
- Server-side validation
- MongoDB persistence
- Submission confirmation
- Admin visibility

### 👑 Admin Panel

Admin-only dashboard available at `/admin`.

ADMIN_EMAIL= nexaadmin@gmail.com
ADMIN_PASSWORD= NexaAdmin@123

Admin features:

- View contact submissions
- Delete contact submissions
- View registered users
- View quote requests
- Protected admin APIs
- Role-based authorization

---

# 🗄️ Database Collections

MongoDB is used as the application's database.

The project implements the required four collections.

## Users

Fields:

```text
id
name
email
password
role
createdAt
```

Roles:

```text
user
admin
```

Passwords are hashed using bcrypt.

## Contacts

Fields:

```text
id
name
email
phone
subject
message
createdAt
```

## Newsletter

Fields:

```text
id
email
subscribedAt
```

## Quotes

Fields:

```text
id
name
email
phone
serviceRequired
budget
message
createdAt
```

---

# 🛠️ Technology Stack

## Frontend

- React
- Vite
- React Router DOM
- Redux Toolkit
- Material UI (MUI)
- Axios
- React Hook Form
- Zod
- React Toastify
- Framer Motion

## Backend

- Node.js
- Express.js
- MongoDB
- Mongoose
- JWT
- bcryptjs
- CORS
- dotenv

## AI

- AI API integrated through the backend service
- Frontend AI requests handled by `aiService.js`
- Backend AI processing handled by the AI controller/service

---

# 📁 Project Structure

## Frontend

```text
frontend/
├── src/
│   ├── components/
│   │   ├── assistant/
│   │   ├── auth/
│   │   ├── dashboard/
│   │   ├── employees/
│   │   ├── landing/
│   │   ├── layout/
│   │   └── settings/
│   │
│   ├── pages/
│   │   ├── Analytics.jsx
│   │   ├── Assistant.jsx
│   │   ├── Dashboard.jsx
│   │   ├── Employees.jsx
│   │   ├── Landing.jsx
│   │   ├── Login.jsx
│   │   ├── Register.jsx
│   │   ├── Settings.jsx
│   │   └── Admin.jsx
│   │
│   ├── services/
│   │   ├── api.js
│   │   ├── aiService.js
│   │   ├── authService.js
│   │   ├── contactService.js
│   │   ├── newsletterService.js
│   │   └── quoteService.js
│   │
│   ├── store/
│   │   ├── slices/
│   │   └── store.js
│   │
│   ├── App.jsx
│   └── main.jsx
│
├── package.json
└── .env
```

## Backend

```text
backend/
├── config/
│   └── db.js
│
├── controllers/
│   ├── adminController.js
│   ├── aiController.js
│   ├── authController.js
│   ├── contactController.js
│   ├── newsletterController.js
│   └── quoteController.js
│
├── middleware/
│   └── authMiddleware.js
│
├── models/
│   ├── User.js
│   ├── Contact.js
│   ├── Newsletter.js
│   └── Quote.js
│
├── routes/
│   ├── adminRoutes.js
│   ├── aiRoutes.js
│   ├── authRoutes.js
│   ├── contactRoutes.js
│   ├── newsletterRoutes.js
│   └── quoteRoutes.js
│
├── services/
│   └── aiService.js
│
├── seed/
│   └── adminSeed.js
│
├── .env
├── .gitignore
├── package.json
└── server.js
```

---

# ⚙️ Installation and Setup

## Prerequisites

Install:

- Node.js
- npm
- MongoDB Atlas account or MongoDB instance
- Required AI API key

## 1. Clone the Repository

```bash
git clone YOUR_GITHUB_REPOSITORY_URL
cd YOUR_PROJECT_FOLDER
```

---

# 🔧 Backend Setup

Navigate to the backend:

```bash
cd backend
```

Install dependencies:

```bash
npm install
```

Create a `.env` file inside the backend directory.

Example:

```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_strong_jwt_secret
FRONTEND_URL=http://localhost:5173
AI_API_KEY=your_ai_api_key
```

> Use the exact AI environment variable expected by the project's AI service if it differs from `AI_API_KEY`.

Start the backend:

```bash
npm start
```

Backend:

```text
http://localhost:5000
```

---

# 🎨 Frontend Setup

Open another terminal and navigate to the frontend:

```bash
cd frontend
```

Install dependencies:

```bash
npm install
```

Create a `.env` file:

```env
VITE_API_URL=http://localhost:5000/api
```

Start the frontend:

```bash
npm run dev
```

Frontend:

```text
http://localhost:5173
```

---

# 👑 Admin Account

A seed script is provided for creating the admin account.

From the backend directory:

```bash
npm run seed:admin
```

## Admin Credentials

**Replace the values below with the exact credentials configured in your `adminSeed.js` before submitting the project.**

```text
Email: admin@nexaai.com
Password: YOUR_ADMIN_PASSWORD
Role: admin
```

> Do not use these placeholder credentials unless they are actually configured by your seed script.

---

# 🔑 Authentication

Authentication uses JWT.

Flow:

```text
Register / Login
       ↓
Backend validation
       ↓
bcrypt password verification
       ↓
JWT generated
       ↓
Token stored in localStorage
       ↓
Axios sends JWT with protected requests
       ↓
Backend validates JWT
       ↓
Protected resource returned
```

JWT expiration:

```text
7 days
```

---

# 🔒 Protected Routes

Authenticated application routes include:

```text
/dashboard
/assistant
/employees
/analytics
/settings
```

Admin route:

```text
/admin
```

Unauthenticated users are redirected to:

```text
/login
```

Users without the admin role cannot access the admin panel.

---

# 🌐 API Endpoints

## Authentication

```text
POST /api/auth/register
POST /api/auth/login
GET  /api/auth/profile
PUT  /api/auth/profile
PUT  /api/auth/change-password
```

## Contact

```text
POST /api/contact
```

## AI

```text
POST /api/ai/chat
```

## Newsletter

```text
POST /api/newsletter/subscribe
```

## Quote

```text
POST /api/quote
```

## Admin

```text
GET    /api/admin/contacts
DELETE /api/admin/contacts/:id
GET    /api/admin/users
GET    /api/admin/quotes
```

All admin endpoints require a valid authenticated admin token.

---

# 🤖 AI Chat Storage

AI conversations are intentionally not stored in MongoDB.

The flow is:

```text
User Message
     ↓
Assistant.jsx
     ↓
aiService.js
     ↓
POST /api/ai/chat
     ↓
Backend AI Service
     ↓
AI Response
     ↓
Redux Chat Slice
     ↓
localStorage
```

Each authenticated user has separate local chat storage.

When the user clicks **Clear Chat**:

```text
Clear Chat
    ↓
Redux messages cleared
    ↓
localStorage chat removed
```

This prevents users from sharing the same locally stored conversation.

---

# 📩 Contact Form Flow

```text
Contact Form
     ↓
Frontend validation
     ↓
POST /api/contact
     ↓
Server validation
     ↓
MongoDB
     ↓
Success/Error response
     ↓
Frontend feedback
```

---

# 📰 Newsletter Flow

```text
Footer Newsletter
       ↓
Email validation
       ↓
POST /api/newsletter/subscribe
       ↓
Server validation
       ↓
Check duplicate email
       ↓
MongoDB
       ↓
Success/Error response
```

For an existing email:

```text
You are already subscribed
```

---

# 💬 Quote Flow

```text
Get a Free Quote
       ↓
Modal opens
       ↓
User fills form
       ↓
Frontend validation
       ↓
POST /api/quote
       ↓
Server validation
       ↓
MongoDB
       ↓
Confirmation
       ↓
Visible in Admin Panel
```

---

# 👑 Admin Flow

```text
Admin Login
     ↓
JWT with admin role
     ↓
Protected Admin Route
     ↓
/admin
     ↓
Contacts | Users | Quotes
```

Admin API requests include the JWT through the frontend Axios API configuration.

---

# 🔐 Security

The application includes:

- bcrypt password hashing
- JWT authentication
- 7-day JWT expiration
- Protected routes
- Admin role authorization
- Server-side validation
- CORS configuration
- Environment variables for secrets
- Password exclusion from normal user responses
- No plain-text password storage

Never commit:

```text
.env
```

to the repository.

---

# 🌍 Deployment

The application can be deployed using:

```text
Frontend → Vercel
Backend  → Render
Database → MongoDB Atlas
```

## Production Backend Environment Variables

Example:

```env
PORT=5000
MONGO_URI=your_mongodb_atlas_connection_string
JWT_SECRET=your_production_jwt_secret
FRONTEND_URL=https://your-frontend-domain.com
AI_API_KEY=your_ai_api_key
```

## Production Frontend Environment Variable

```env
VITE_API_URL=https://your-backend-domain.com/api
```

The backend CORS configuration must allow the deployed frontend domain.

---

# 🧪 Testing Checklist

## Authentication

- [ ] Register a new user
- [ ] Login
- [ ] JWT is returned
- [ ] JWT expires after 7 days
- [ ] Profile loads
- [ ] User name appears after login
- [ ] Logout clears authentication data
- [ ] Protected pages require authentication
- [ ] Passwords are stored hashed

## Contact

- [ ] Submit valid contact form
- [ ] Invalid required fields are rejected
- [ ] Server-side validation works
- [ ] Success message appears
- [ ] Error message appears when appropriate
- [ ] Submission appears in admin panel
- [ ] Admin can delete submission

## Newsletter

- [ ] Subscribe with valid email
- [ ] Invalid email is rejected
- [ ] Email is saved in MongoDB
- [ ] Duplicate email returns `You are already subscribed`
- [ ] Frontend displays success/error feedback

## Free Quote

- [ ] Get a Free Quote button opens modal
- [ ] Name field works
- [ ] Email field works
- [ ] Phone field works
- [ ] Service Required dropdown works
- [ ] Budget dropdown works
- [ ] Message field works
- [ ] Validation works
- [ ] Quote is saved
- [ ] Confirmation appears
- [ ] Quote appears in admin panel

## Admin

- [ ] Admin can log in
- [ ] `/admin` is accessible to admin
- [ ] Normal users cannot access `/admin`
- [ ] Contacts are displayed
- [ ] Contacts can be deleted
- [ ] Users are displayed
- [ ] Quotes are displayed
- [ ] Passwords are not exposed

## AI Assistant

- [ ] AI request works
- [ ] User message appears
- [ ] AI response appears
- [ ] Chat persists after page refresh
- [ ] Different users have separate local chat
- [ ] Clear Chat removes local chat
- [ ] AI chat is not stored in MongoDB

## Production

- [ ] MongoDB Atlas is connected
- [ ] Backend is deployed
- [ ] Frontend is deployed
- [ ] Production CORS is configured
- [ ] `VITE_API_URL` points to the live backend
- [ ] Live authentication tested
- [ ] Live contact API tested
- [ ] Live newsletter API tested
- [ ] Live quote API tested
- [ ] Live admin APIs tested
- [ ] Live AI API tested

---

# 📝 Notes

- The original Round 1 frontend has been retained.
- Backend functionality was integrated into the existing frontend.
- MongoDB is used for Users, Contacts, Newsletter, and Quotes.
- AI chat history is intentionally stored only in the browser.
- Admin functionality is protected using JWT authentication and role-based authorization.
- Sensitive environment variables must not be committed to Git.

---

# 👨‍💻 Project

## NEXA AI

An AI-powered full-stack recruitment and employee management platform.

### Core Technologies

```text
React
Material UI
Redux Toolkit
Node.js
Express.js
MongoDB
Mongoose
JWT
bcrypt
AI API
```

---

## 📌 Submission Architecture

```text
                    NEXA AI
                       │
          ┌────────────┴────────────┐
          │                         │
      Frontend                  Backend API
    React + MUI              Node + Express
          │                         │
          │                         ├── Authentication
          │                         ├── Contact
          │                         ├── Newsletter
          │                         ├── Quotes
          │                         ├── Admin
          │                         └── AI
          │                         │
          └──────────────┬──────────┘
                         │
                    MongoDB Atlas
                         │
                Users / Contacts
                Newsletter / Quotes
```
