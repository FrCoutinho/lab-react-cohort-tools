import React from 'react';
import { BrowserRouter as Router, Routes } from 'react-router-dom';
import "./App.css";
import { Switch } from 'react-router-dom';
import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import StudentDetailsPage from "./pages/StudentDetailsPage";
import UserProfilePage from "./pages/UserProfilePage";

const App = () => {
  return (
    <Router>
      <div>
        <Navbar />
        <Switch>
          <Routes path="/" component={HomePage} />
          <Routes path="/students/:studentId" component={StudentDetailsPage} />
          <Routes path="/profile" component={UserProfilePage} />
          <Routes path="*" component={HomePage} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;
