NEXA AI --- Employee Intelligence & AI Assistant

NEXA AI is a modern employee management and workforce intelligence
platform built with the MERN stack. It combines employee data
management, workforce analytics, and a Gemini-powered AI assistant into
a single responsive dashboard.

Live Architecture

GitHub
├── nexa-ai/ → React + Vite frontend → Vercel
└── server/ → Node + Express backend → Render
├── MongoDB Atlas
└── Google Gemini API

Features

Dashboard

Workforce overview

Total employee count

Active, away, and inactive employee statistics

Department distribution

Workforce distribution

Recent workforce activity

Responsive dashboard UI

Employee Management

View employees from MongoDB

Search and filter employees

Filter by department and status

Employee cards and profile details

Add new employees through a form

Form validation

Employee status management

Skills, experience, location, role, and joining-date information

Newly added employees are persisted in MongoDB

AI Assistant

NEXA AI provides a general-purpose conversational assistant with access
to current employee data.

It can answer: - General knowledge questions - Technical and programming
questions - Educational questions - Career and interview questions -
Company and workforce questions - Employee-related questions -
Department and role questions - Location and experience questions -
Workforce statistics

For company-related questions, the assistant uses employee data
retrieved from MongoDB instead of inventing company information.

Persistent Chat History

User messages are stored in MongoDB

AI responses are stored in MongoDB

Chat history is loaded when the Assistant page opens

Chat history remains available after browser refresh

Chat history can be cleared from the Assistant interface

Redux is used for the active chat state while MongoDB provides
persistence

Analytics

Department analytics

Department bar chart

Department pie chart

Employee status distribution

Experience distribution

Location analytics

Workforce trend

Workforce summary and insights

Analytics are generated from current MongoDB employee data

UI and UX

Material UI based interface

Responsive design

Framer Motion animations

Dashboard navigation

Toast notifications

Empty states

Loading states

Dialogs and drawers

Modern employee cards and analytics components

Technology Stack

Frontend

React

Vite

React Router DOM

Redux Toolkit

React Redux

Axios

Material UI (MUI)

Framer Motion

Recharts

React Hook Form

Zod

React Toastify

Backend

Node.js

Express.js

MongoDB

Mongoose

CORS

dotenv

Google Gemini API

@google/genai

Database

MongoDB Atlas

Mongoose ODM

Deployment

Vercel --- React frontend

Render --- Node/Express backend

MongoDB Atlas --- database

Project Structure

NEXA-AI/
│
├── nexa-ai/ # React frontend
│ ├── public/
│ ├── src/
│ │ ├── components/
│ │ │ ├── assistant/
│ │ │ ├── analytics/
│ │ │ ├── dashboard/
│ │ │ ├── employees/
│ │ │ ├── layout/
│ │ │ └── common/
│ │ │
│ │ ├── data/
│ │ ├── hooks/
│ │ ├── pages/
│ │ ├── services/
│ │ ├── store/
│ │ ├── theme/
│ │ ├── App.jsx
│ │ └── main.jsx
│ │
│ ├── .env
│ ├── vercel.json
│ ├── package.json
│ └── vite.config.js
│
└── server/ # Node/Express backend
├── src/
│ ├── config/
│ │ └── db.js
│ ├── controllers/
│ │ ├── aiController.js
│ │ ├── chatController.js
│ │ └── employeeController.js
│ ├── models/
│ │ ├── Employee.js
│ │ └── ChatMessage.js
│ ├── routes/
│ │ ├── aiRoutes.js
│ │ ├── chatRoutes.js
│ │ └── employeeRoutes.js
│ ├── seed/
│ │ └── employees.js
│ └── services/
│ └── aiService.js
│
├── .env
├── package.json
└── server.js

API Endpoints

Health Check

GET /

Returns the backend server status.

Employees

GET /api/employees

Fetches employees from MongoDB.

POST /api/employees

Creates a new employee.

AI

POST /api/ai/chat

Sends a user message to the AI assistant.

Example request:

{
"message": "How many employees are in Engineering?"
}

Chat History

GET /api/chat

Fetches saved chat history.

POST /api/chat

Saves a user or assistant message.

Example:

{
"role": "user",
"content": "How many employees do we have?"
}

DELETE /api/chat

Clears the stored chat history.

Employee Data Model

The employee collection contains fields such as:

name
email
role
department
location
experience
status
skills
joined
createdAt
updatedAt

Supported employee statuses:

Active
Away
Inactive

AI Architecture

The AI assistant uses a MongoDB-aware prompt.

User
↓
React Assistant
↓
Axios
↓
POST /api/ai/chat
↓
AI Controller
↓
AI Service
↓
MongoDB
↓
Current Employee Data
↓
Google Gemini
↓
AI Response
↓
Redux Chat State
↓
Chat UI

The AI service retrieves current employees from MongoDB and includes
that information as context when generating a response.

General Questions

For questions unrelated to the organization, Gemini can answer using its
general capabilities.

Example:

What is React?

Company Questions

For workforce-related questions, the assistant uses the current employee
data.

Example:

How many employees do we have?

Which department has the most employees?

Who works in Engineering?

Mixed Questions

The assistant can combine general knowledge with company data.

Example:

What does a DevOps engineer do and who are our DevOps engineers?

State Management

Redux Toolkit is used for chat state.

The chat state contains:

messages
isTyping

Messages are loaded from MongoDB when the Assistant page opens.

The application uses a setMessages action to replace the Redux history
with the database history, preventing duplicate messages during
development refresh/effect behavior.

Form Validation

Employee creation uses:

React Hook Form

Zod

The employee form validates required employee information before sending
it to the backend.

Environment Variables

Frontend

Create:

nexa-ai/.env

VITE_API_URL=https://your-render-backend-url.onrender.com

The frontend uses this value for API requests.

Backend

Create:

server/.env

PORT=5000
MONGODB_URI=your_mongodb_connection_string
GEMINI_API_KEY=your_gemini_api_key

In production, environment variables are configured through the hosting
provider.

Security

Do not commit secret environment files to GitHub.

The .gitignore should include:

node_modules/
.env
dist/
.DS_Store

Never expose:

MongoDB credentials

Gemini API keys

Other private environment variables

The Gemini API key is used by the backend rather than directly by the
React browser application.

Local Development

1. Clone the repository

git clone <your-repository-url>
cd NEXA-AI

2. Install frontend dependencies

cd nexa-ai
npm install

3. Configure frontend environment

Create:

.env

VITE_API_URL=http://localhost:5000

4. Start the frontend

npm run dev

5. Install backend dependencies

Open another terminal:

cd server
npm install

6. Configure backend environment

Create:

server/.env

PORT=5000
MONGODB_URI=your_mongodb_connection_string
GEMINI_API_KEY=your_gemini_api_key

7. Start the backend

npm start

The backend runs locally on:

http://localhost:5000

Production Deployment

Frontend --- Vercel

The frontend is located in:

nexa-ai/

Vercel configuration:

Framework: Vite
Root Directory: nexa-ai
Build Command: npm run build
Output Directory: dist

The production environment variable is:

VITE_API_URL=https://your-render-backend-url.onrender.com

A vercel.json rewrite is included so React Router routes work
correctly when directly refreshed:

{
"rewrites": [
{
"source": "/(.*)",
"destination": "/index.html"
}
]
}

Backend --- Render

The backend is located in:

server/

Render configuration:

Runtime: Node
Root Directory: server
Build Command: npm install
Start Command: npm start

Required environment variables:

MONGODB_URI
GEMINI_API_KEY

Render supplies the production PORT environment variable.

Database --- MongoDB Atlas

MongoDB Atlas hosts the application database.

The backend connects using:

MONGODB_URI

The Atlas network configuration must allow the deployed backend to
connect to the cluster.

Error Handling

The application includes handling for:

Failed employee requests

Failed employee creation

Failed AI requests

Invalid employee form data

Duplicate employee email addresses

MongoDB connection failures

Temporary Gemini availability errors

Gemini quota/rate-limit errors

The backend logs server-side errors while the frontend displays
user-friendly feedback.

Current AI Limitations

The current employee data represents the organization's current state.

Questions requiring historical workforce information, such as:

How has our workforce changed over the last month?

require historical employee activity records to provide an accurate
answer.

A future version can introduce workforce history for:

Employee joined events

Employee departure events

Department changes

Role changes

Status changes

Workforce growth trends

Future Improvements

Potential enhancements include:

Authentication and authorization

User-specific chat histories

Multiple AI conversations

Conversation titles

Employee edit and delete operations

Workforce activity/history collection

Advanced AI actions

AI-generated workforce insights

Export analytics reports

Role-based access control

Pagination for large employee collections

Advanced search and filtering

Production logging and monitoring

More robust AI model fallback handling

Screens / Routes

The application currently contains:

/ → Landing page
/dashboard → Workforce dashboard
/assistant → NEXA AI assistant
/employees → Employee management
/analytics → Workforce analytics
/settings → Application settings

Author

Built as a full-stack MERN application demonstrating:

Modern React development

REST API development

MongoDB data persistence

AI integration

Redux state management

Data visualization

Form validation

Responsive UI development

Cloud deployment

Frontend/backend separation

License

This project is intended for portfolio, learning, and assignment
purposes.
