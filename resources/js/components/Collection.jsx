import React, { useEffect, useState, useMemo } from "react";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import "bootstrap/dist/css/bootstrap.min.css";

export default function Collection() {

    const [collections, setCollections] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const [activeCategory, setActiveCategory] = useState("All");

    const [page, setPage] = useState(1);
    const [lastPage, setLastPage] = useState(1);

    const [isOpen, setIsOpen] = useState(false);

    // Navbar dropdown links
    const collectionLinks = [
        { name: "All Collections", path: "/collections" },
        { name: "The Ellure Collection", path: "/collections/ellure" },
        { name: "The Ellanella Collection", path: "/collections/ellanella" },
        { name: "The Ellatique Collection", path: "/collections/ellatique" },
        { name: "The Sutella Collection", path: "/collections/sutella" },
        { name: "The Tailella Collection", path: "/collections/tailella" },
    ];


    // Initialize animations
    useEffect(() => {
        AOS.init({
            duration: 900,
            once: true,
            easing: "ease-out-cubic"
        });
    }, []);


    // Fetch collections from Laravel
    useEffect(() => {

        setLoading(true);

        fetch(`http://127.0.0.1:8000/api/collections?page=${page}`)
            .then((res) => res.json())
            .then((data) => {

                setCollections(data.data || []);
                setLastPage(data.last_page || 1);

                setError(null);

            })
            .catch((err) => {

                console.error(err);
                setError("Unable to load collections");

            })
            .finally(() => setLoading(false));

    }, [page]);


    // Build categories dynamically
    const categories = useMemo(() => {

        const cats = collections.map((c) => c.category).filter(Boolean);

        return ["All", ...new Set(cats)];

    }, [collections]);


    // Filter collections
    const filteredCollections = useMemo(() => {

        if (activeCategory === "All") return collections;

        return collections.filter(
            (c) => c.category?.toLowerCase() === activeCategory.toLowerCase()
        );

    }, [collections, activeCategory]);


    // Image helper
    const getImage = (img) => {

        if (!img) return "/images/placeholder.jpg";

        if (img.startsWith("http")) return img;

        return `http://127.0.0.1:8000/storage/${img}`;
    };


    if (loading)
        return (
            <div className="d-flex justify-content-center align-items-center vh-100 text-light">
                Loading collections...
            </div>
        );

    if (error)
        return (
            <div className="d-flex justify-content-center align-items-center vh-100 text-danger">
                {error}
            </div>
        );


    return (

        <div style={{ background: "#2a1720", color: "#efe6e8", minHeight: "100vh" }}>

            {/* Navbar */}
            <header className="container py-4 d-flex justify-content-between align-items-center">

                <Link to="/">
                    <img
                        src="/images/logo-gold.png"
                        alt="Ellas Stitches"
                        style={{ height: 80 }}
                    />
                </Link>

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
                            {collectionLinks.map((item, i) => (
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
            </header>


            {/* Hero */}
            <section className="container text-center mb-5">

                <h1 className="fw-bold display-6 mb-2">
                    The Collections
                </h1>

                <p className="text-light-50 mb-4">
                    Discover elegance in every stitch.
                </p>


                {/* Category Filters */}
                <div className="d-flex justify-content-center flex-wrap gap-2">

                    {categories.map((cat, i) => (

                        <button
                            key={i}
                            onClick={() => setActiveCategory(cat)}
                            className="btn btn-sm rounded-pill px-3 fw-semibold"
                            style={{
                                border: "1px solid rgba(212,175,55,0.5)",
                                background:
                                    activeCategory === cat
                                        ? "rgba(212,175,55,0.5)"
                                        : "transparent",
                                color: "#fff"
                            }}
                        >
                            {cat}
                        </button>

                    ))}

                </div>

            </section>


            {/* Collection Grid */}
            <section className="container pb-5">

                <div className="row g-4">

                    {filteredCollections.map((item, i) => (

                        <div
                            key={item.id}
                            className="col-6 col-md-3"
                            data-aos="fade-up"
                            data-aos-delay={i * 70}
                        >

                            <Link
                                to={`/collections/${item.category}/${item.slug}`}
                                className="text-decoration-none"
                            >

                                <div className="rounded-4 overflow-hidden shadow-sm">

                                    <img
                                        src={getImage(item.image1)}
                                        alt={item.name}
                                        className="img-fluid w-100"
                                        style={{
                                            height: 350,
                                            objectFit: "cover"
                                        }}
                                        loading="lazy"
                                    />

                                </div>

                                <div className="text-center mt-2">

                                    <div
                                        className="fw-semibold"
                                        style={{ color: "rgba(212,175,55,0.8)" }}
                                    >
                                        {item.name}
                                    </div>

                                    <div className="small text-light-50">
                                        {item.description}
                                    </div>

                                </div>

                            </Link>

                        </div>

                    ))}

                </div>

                {filteredCollections.length === 0 && (
                    <div className="text-center text-muted py-5">
                        No collections available.
                    </div>
                )}

            </section>


            {/* Pagination */}
            <div className="d-flex justify-content-center gap-3 pb-5">

                <button
                    className="btn btn-outline-light btn-sm"
                    disabled={page === 1}
                    onClick={() => setPage(page - 1)}
                >
                    Prev
                </button>

                <span>
                    Page {page} of {lastPage}
                </span>

                <button
                    className="btn btn-outline-light btn-sm"
                    disabled={page === lastPage}
                    onClick={() => setPage(page + 1)}
                >
                    Next
                </button>

            </div>

        </div>
    );
}