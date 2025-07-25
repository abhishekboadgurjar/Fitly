import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { UserProvider } from "./context/UserContext";
import { WorkoutProvider } from "./context/WorkoutContext";
import NavBar from "./components/NavBar";
import HomeScreen from "./pages/HomeScreen";
import Login from "./pages/Login";
import Register from "./pages/Register";
import AddWorkout from "./pages/AddWorkout";
import ProfileScreen from "./pages/ProfileScreen";
import WorkoutDetails from "./pages/WorkoutDetails";
import WorkoutHistory from "./pages/WorkoutHistory";
import PrivateRoute from "./components/PrivateRoute";

const App = () => (
  <BrowserRouter>
    <UserProvider>
      <WorkoutProvider>
        <NavBar />
        <Routes>

          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route element={<PrivateRoute />}>
          <Route path="/" element={<HomeScreen />} />
            <Route path="/add" element={<AddWorkout />} />
            <Route path="/profile" element={<ProfileScreen />} />
            <Route path="/workout/:id" element={<WorkoutDetails />} />
            <Route path="/history" element={<WorkoutHistory />} />
          </Route>
        </Routes>
      </WorkoutProvider>
    </UserProvider>
  </BrowserRouter>
);

export default App;
