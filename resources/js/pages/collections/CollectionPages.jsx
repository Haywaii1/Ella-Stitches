import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";

export default function CollectionPage() {

    const { category } = useParams();

    const [items, setItems] = useState([]);
    const [loading, setLoading] = useState(true);

    // NAV STATES
    const [isOpen, setIsOpen] = useState(false);
    const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);

    // COLLECTION LINKS
    const collections = [
        { name: "All Collections", path: "/collections" },
        { name: "The Ellure Collection", path: "/collections/ellure" },
        { name: "The Ellanella Collection", path: "/collections/ellanella" },
        { name: "The Ellatique Collection", path: "/collections/ellatique" },
        { name: "The Sutella Collection", path: "/collections/sutella" },
        { name: "The Tailella Collection", path: "/collections/tailella" },
    ];

    useEffect(() => {
        fetchCollection();
    }, [category]);

    const fetchCollection = async () => {
        try {
            setLoading(true);

            const res = await axios.get(
                `http://127.0.0.1:8000/api/collections/category/${category}`
            );

            setItems(res.data);

        } catch (error) {
            console.error("Error fetching collection:", error);
        } finally {
            setLoading(false);
        }
    };

    const formatTitle = (text) => {
        return text.charAt(0).toUpperCase() + text.slice(1);
    };

    return (

        <div style={{ backgroundColor: "#2a1720", minHeight: "100vh", color: "#efe6e8" }}>

            {/* NAVBAR */}
            <header
                className="container-fluid px-4 py-3 position-fixed top-0 start-0 w-100 z-3"
                style={{
                    background: "rgba(0,0,0,0.85)",
                    backdropFilter: "blur(8px)",
                    borderBottom: "1px solid rgba(212,175,55,0.2)"
                }}
            >
                <div className="container d-flex justify-content-between align-items-center">

                    {/* Logo */}
                    <Link to="/">
                        <img
                            src="/images/logo-gold.png"
                            alt="Stitches by Ella"
                            style={{ height: 70 }}
                        />
                    </Link>

                    {/* Mobile Button */}
                    <button
                        className="navbar-toggler d-md-none border-0"
                        onClick={() => setIsMobileNavOpen(!isMobileNavOpen)}
                    >
                        <span className="navbar-toggler-icon" style={{ filter: "invert(1)" }} />
                    </button>

                    {/* Desktop Nav */}
                    <nav className="d-none d-md-flex gap-5 align-items-center">

                        {/* Home */}
                        <Link
                            to="/"
                            className="text-decoration-none fw-semibold"
                            style={{ color: "#fff", transition: "0.3s" }}
                            onMouseEnter={(e) => e.target.style.color = "#d4af37"}
                            onMouseLeave={(e) => e.target.style.color = "#fff"}
                        >
                            Home
                        </Link>

                        {/* Collections Dropdown */}
                        <div
                            className="position-relative d-flex align-items-center"
                            onMouseEnter={() => setIsOpen(true)}
                            onMouseLeave={() => setIsOpen(false)}
                        >
                            <span
                                className="fw-semibold"
                                style={{
                                    cursor: "pointer",
                                    color: isOpen ? "#d4af37" : "#fff",
                                    transition: "0.3s"
                                }}
                            >
                                Collections
                            </span>

                            <div
                                className="position-absolute start-0 top-100 px-4 py-3 rounded-4 shadow-lg"
                                style={{
                                    backgroundColor: "#000",
                                    minWidth: 240,
                                    opacity: isOpen ? 1 : 0,
                                    transform: isOpen
                                        ? "translateY(0px)"
                                        : "translateY(-10px)",
                                    transition: "all 0.3s ease",
                                    pointerEvents: isOpen ? "auto" : "none",
                                    border: "1px solid rgba(212,175,55,0.2)"
                                }}
                            >
                                {collections.map((item, i) => (
                                    <Link
                                        key={i}
                                        to={item.path}
                                        className="d-block text-decoration-none py-2"
                                        style={{ color: "#fff" }}
                                        onMouseEnter={(e) => e.target.style.color = "#d4af37"}
                                        onMouseLeave={(e) => e.target.style.color = "#fff"}
                                        onClick={() => setIsOpen(false)}
                                    >
                                        {item.name}
                                    </Link>
                                ))}
                            </div>
                        </div>

                        {/* About */}
                        <Link
                            to="/about"
                            className="text-decoration-none fw-semibold"
                            style={{ color: "#fff", transition: "0.3s" }}
                            onMouseEnter={(e) => e.target.style.color = "#d4af37"}
                            onMouseLeave={(e) => e.target.style.color = "#fff"}
                        >
                            About
                        </Link>

                        {/* Contact */}
                        <Link
                            to="/contact-us"
                            className="text-decoration-none fw-semibold"
                            style={{ color: "#fff", transition: "0.3s" }}
                            onMouseEnter={(e) => e.target.style.color = "#d4af37"}
                            onMouseLeave={(e) => e.target.style.color = "#fff"}
                        >
                            Contact
                        </Link>

                    </nav>
                </div>

                {/* MOBILE NAV */}
                <div
                    className="d-md-none position-absolute top-100 start-0 w-100"
                    style={{
                        backgroundColor: "#000",
                        overflow: "hidden",
                        maxHeight: isMobileNavOpen ? "500px" : "0px",
                        transition: "max-height 0.4s ease"
                    }}
                >
                    <div className="container py-4 d-flex flex-column gap-3">

                        <Link to="/" className="text-white text-decoration-none">Home</Link>
                        <Link to="/collections" className="text-white text-decoration-none">Collections</Link>
                        <Link to="/about" className="text-white text-decoration-none">About</Link>
                        <Link to="/contact-us" className="text-white text-decoration-none">Contact</Link>

                    </div>
                </div>

            </header>


            {/* PAGE CONTENT */}
            <div className="container py-5" style={{ paddingTop: "120px" }}>

                <h2 className="text-center mb-5 fw-bold">
                    {formatTitle(category)} Collection
                </h2>

                {loading ? (
                    <p className="text-center">Loading...</p>
                ) : items.length === 0 ? (
                    <p className="text-center">No outfits found.</p>
                ) : (

                    <div className="row g-4">

                        {items.map((item) => (

                            <div className="col-md-4" key={item.id}>

                                <Link
                                    to={`/collections/${category}/${item.slug}`}
                                    style={{ textDecoration: "none" }}
                                >

                                    <div
                                        className="card border-0 shadow-lg rounded-4"
                                        style={{
                                            backgroundColor: "#1b0f15",
                                            cursor: "pointer"
                                        }}
                                    >

                                        {item.image1 && (
                                            <img
                                                src={`http://127.0.0.1:8000/storage/${item.image1}`}
                                                alt={item.name}
                                                className="card-img-top rounded-top-4"
                                                style={{
                                                    height: "350px",
                                                    objectFit: "cover"
                                                }}
                                            />
                                        )}

                                        <div className="card-body">

                                            <h5 className="fw-bold text-warning">
                                                {item.name}
                                            </h5>

                                            <p className="text-light">
                                                {item.description}
                                            </p>

                                        </div>

                                    </div>

                                </Link>

                            </div>

                        ))}

                    </div>

                )}

            </div>

        </div>
    );
}