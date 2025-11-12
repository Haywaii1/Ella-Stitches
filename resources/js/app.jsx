import './bootstrap.js';
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./components/Home.jsx";
import About from "./components/About.jsx";
import Collection from "./components/Collection.jsx";
import CollectionDetail from "./components/CollectionDetail.jsx";
import AddCollection from "./components/AddCollection.jsx";
import ContactUs from "./components/ContactUs.jsx";



import "../css/app.css";

ReactDOM.createRoot(document.getElementById("app")).render(
    <React.StrictMode>
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/collections" element={<Collection />} />
                <Route path="/collections/:id" element={<CollectionDetail />} />
                <Route path="/add-collection" element={<AddCollection />} />
                <Route path="/contact-us" element={<ContactUs />} />
            </Routes>
        </Router>
    </React.StrictMode>
);
