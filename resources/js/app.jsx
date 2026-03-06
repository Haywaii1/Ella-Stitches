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
import ManageCollections from "./components/ManageCollections.jsx";
import CollectionPage from "./pages/collections/CollectionPages";
// import AllCollections from "./pages/collections/AllCollections";
// import Ellure from "./pages/collections/Ellure";
// import Ellanella from "./pages/collections/Ellanella";
// import Ellatique from "./pages/collections/Ellatique";
// import Sutella from "./pages/collections/Sutella";
// import Tailella from "./pages/collections/Tailella";



import "../css/app.css";

ReactDOM.createRoot(document.getElementById("app")).render(
    <React.StrictMode>
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/collections" element={<Collection />} />
                <Route path="/add-collection" element={<AddCollection />} />
                <Route path="/contact-us" element={<ContactUs />} />
                <Route path="/manage-collections" element={<ManageCollections />} />
                <Route path="/collections/:category" element={<CollectionPage />} />
                <Route path="/collections/:category/:slug" element={<CollectionDetail />} />
            </Routes>
        </Router>
    </React.StrictMode>
);
