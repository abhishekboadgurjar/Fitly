# Fitly - Full Stack Fitness Tracker App & Website

Fitly is a full-stack fitness tracker application that helps users log, view, and manage their workouts. It consists of:
- **Backend**: Node.js/Express REST API with MongoDB
- **Web Frontend**: React.js (Vite, TailwindCSS)
- **Mobile App**: React Native (Expo)

---

## Table of Contents

- [Features](#features)
- [Project Structure](#project-structure)
- [Backend Setup (Node.js/Express)](#backend-setup-nodejsexpress)
- [Web Frontend Setup (React.js)](#web-frontend-setup-reactjs)
- [Mobile App Setup (React Native)](#mobile-app-setup-react-native)
- [API Endpoints](#api-endpoints)
- [License](#license)

---

## Features

- User registration and authentication (JWT)
- Add, view, and delete workouts
- Track workout type, duration, calories, and date
- Dashboard with fitness summary (total workouts, time, calories)
- Responsive web UI and modern mobile app
- Secure password hashing and protected routes

---

## Project Structure

```
Fitly - Fitness Tarcker App/
  client-app/      # React Native mobile app (Expo)
  client-web/      # React.js web frontend (Vite)
  server/          # Node.js/Express backend API
```

---

## Backend Setup (Node.js/Express)

### Prerequisites

- Node.js (v16+ recommended)
- MongoDB (local or Atlas)

### Installation

```bash
cd server
npm install
```

### Environment Variables

Create a `.env` file in the `server/` directory with:

```
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
PORT=5000
```

### Running the Server

```bash
# For development (with nodemon)
npm run dev

# For production
npm start
```

The API will be available at `http://localhost:5000/api`.

---

## Web Frontend Setup (React.js)

### Prerequisites

- Node.js (v16+ recommended)

### Installation

```bash
cd client-web
npm install
```

### Running the Web App

```bash
npm run dev
```

Visit [http://localhost:5173](http://localhost:5173) in your browser.

---

## Mobile App Setup (React Native)

### Prerequisites

- Node.js (v16+ recommended)
- Expo CLI (`npm install -g expo-cli`)
- Android Studio or Xcode (for emulators) or a physical device with Expo Go

### Installation

```bash
cd client-app
npm install
```

### Running the App

```bash
# Start Expo
npm start
```

- Scan the QR code with Expo Go (iOS/Android) or run on an emulator.

**Note:** Update the `baseURL` in `client-app/services/api.js` to point to your backend server's IP address accessible from your device.

---

## API Endpoints

### Auth

- `POST /api/auth/register` — Register a new user (`{ name, email, password }`)
- `POST /api/auth/login` — Login (`{ email, password }`)

### Workouts (Protected)

- `POST /api/workouts` — Add a workout (`{ type, duration, calories }`)
- `GET /api/workouts` — Get all workouts for the logged-in user
- `GET /api/workouts/:id` — Get a specific workout
- `DELETE /api/workouts/:id` — Delete a workout

All protected routes require a `Bearer` token in the `Authorization` header.

---


## License

This project is licensed under the MIT License.

---

## Contributing

Pull requests are welcome! For major changes, please open an issue first to discuss what you would like to change.

---

## Contact

Created by **Abhishek Gurjar**.
## Github - https://github.com/abhishekgurjarin

