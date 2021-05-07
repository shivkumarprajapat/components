import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Navbar from "./components/Navbar";
import Routes from "./Routes";

function App() {
    return (
        <Router>
            <Navbar />
            <div className="container mt-5">
                <Routes />
            </div>
        </Router>
    );
}

export default App;
