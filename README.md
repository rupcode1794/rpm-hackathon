# Remote Patient Monitoring (RPM) System

A full-stack Remote Patient Monitoring system developed during a hackathon.  
The platform securely collects, manages, and visualizes patient vitals, supports authenticated access, and exposes ML-based health analysis APIs.

---

## 🌟 Key Features

- JWT-based authentication and authorization – Secure user sessions and protected routes
- Patient and device management – Comprehensive CRUD operations for patients and IoT devices
- Vitals ingestion and tracking – Real-time collection and storage of patient health data
- ML-based health insights – Intelligent analysis and predictions based on vital signs
- Secure, rate-limited backend APIs – Protection against abuse and unauthorized access
- Modern React dashboard – Clean, responsive UI for monitoring and management
- Postman collection for API testing – Pre-configured requests for quick testing

---

## 🛠️ Tech Stack

### Frontend
- React (Vite) – Fast, modern build tool and development server
- Context API – State management across components
- Component-based architecture – Modular and reusable UI components

### Backend
- Node.js – JavaScript runtime for server-side logic
- Express.js – Web framework for building RESTful APIs
- MongoDB (Mongoose) – NoSQL database with ODM for data modeling
- JWT Authentication – Token-based secure authentication
- Custom middleware – Authentication, rate limiting, and error handling

### Tooling
- Git & GitHub – Version control and collaboration
- Postman – API development and testing
- Environment-based configuration – Secure management of sensitive data

---

## 📁 Folder Structure
```bash
rpm-hackathon/
├── backend/ # Backend API
│ ├── config/
│ ├── controllers/
│ ├── middleware/
│ ├── models/
│ ├── routes/
│ ├── utils/
│ ├── .env.example
│ ├── package.json
│ └── server.js
├── frontend/remote-vitals/ # React frontend dashboard
│ ├── src/
│ ├── public/
│ ├── package.json
│ └── vite.config.js
├── postman/ # API testing collection
└── README.md
```

---

## 🚀 Getting Started

### Prerequisites

- Node.js (v16 or higher)
- MongoDB (local or cloud instance)
- npm or yarn package manager

---

## 🔧 Backend Setup

```bash
cd backend
npm install
cp .env.example .env
npm run dev

```
---
## Environment Variables
``` bash
PORT=5000
MONGO_URI=your_mongodb_uri
JWT_SECRET=your_jwt_secret
NODE_ENV=development
```
---

## 🎨 Frontend Setup
```bash
cd frontend/remote-vitals
npm install
npm run dev
```
---
### The frontend runs on:
```bash
http://localhost:5173
```
---

## Usage
- Access the dashboard via the frontend URL
- Test API endpoints using the Postman collection in postman/
- Add new patients, devices, and vitals through the UI
- ML endpoints provide analysis and insights for patient vitals

---

## Contribution
This project was created as a hackathon submission. Future improvements may include:
- More advanced ML models for patient risk analysis
- Notifications for critical vitals
- Multi-user roles and permissions
---


## 📄 License
This project is for educational and experimental purposes. Feel free to use and modify as needed.
