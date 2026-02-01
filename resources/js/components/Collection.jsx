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

    const categories = ["All", "Spring/Summer 2024", "Ready-to-Wear", "Couture"];

    // 🎨 Initialize AOS
    useEffect(() => {
        AOS.init({ duration: 1000, once: true, easing: "ease-out-cubic" });
    }, []);

    // 🟢 Fetch from Laravel API
    useEffect(() => {
        setLoading(true);
        fetch(`http://127.0.0.1:8000/api/collections?page=${page}`)
            .then((res) => {
                if (!res.ok) throw new Error("Network response was not ok");
                return res.json();
            })
            .then((data) => {
                if (data && data.data) {
                    setCollections(data.data);
                    setLastPage(data.last_page || 1);
                } else {
                    setCollections([]);
                }
                setError(null);
            })
            .catch((err) => {
                console.error("Error fetching collections:", err);
                setError("Failed to load collections. Please check your API.");
                setCollections([]);
            })
            .finally(() => setLoading(false));
    }, [page]);

    // 🧭 Filter by category
    const filtered = useMemo(() => {
        if (activeCategory === "All") return collections;
        return collections.filter((c) => c.category === activeCategory);
    }, [activeCategory, collections]);

    const getAosType = (i) =>
        ["fade-up", "fade-right", "fade-left", "zoom-in"][i % 4];

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
        <div style={{ backgroundColor: "#2a1720", color: "#efe6e8", minHeight: "100vh" }}>
            {/* ===== Navbar ===== */}
            <header className="container py-4 d-flex justify-content-between align-items-center">
                <div className="d-flex align-items-center gap-2">
                    <img
                        src="/images/logo-gold.png"
                        alt="Aura Logo"
                        className="h-[90px] w-auto object-contain ml-3"
                    />
                </div>

                <nav className="d-none d-md-flex gap-4 align-items-center">
                    {["Home", "Collections", "About", "Contact-us"].map((link, index) => (
                        <a
                            key={index}
                            href={link === "Home" ? "/" : `/${link.toLowerCase()}`}
                            className="text-decoration-none fw-semibold text-white"
                            style={{ transition: "color 0.3s ease" }}
                            onMouseEnter={(e) => (e.target.style.color = "rgba(212, 175, 55, 1)")}
                            onMouseLeave={(e) => (e.target.style.color = "white")}
                        >
                            {link}
                        </a>
                    ))}
                    {/* <button
                        className="btn rounded-pill px-4 py-2"
                        style={{
                            backgroundColor: "rgba(212, 175, 55, 0.6)",
                            color: "#fff",
                        }}
                    >
                        Shop
                    </button> */}
                </nav>
            </header>

            {/* ===== Hero Section ===== */}
            <section className="container text-center mb-5">
                <h1 className="fw-bold display-6">The Collections</h1>
                <p className="text-light-50 mb-4">
                    An immersive gallery of elegance and impact.
                </p>
                {/* 
                <div className="d-flex justify-content-center gap-2 flex-wrap">
                    {categories.map((cat, index) => (
                        <button
                            key={index}
                            onClick={() => setActiveCategory(cat)}
                            className={`btn rounded-pill px-3 py-1 fw-semibold ${activeCategory === cat ? "text-white" : "text-light-50"
                                }`}
                            style={{
                                backgroundColor:
                                    activeCategory === cat
                                        ? "rgba(212, 175, 55, 0.5)"
                                        : "transparent",
                                border: "1px solid rgba(212, 175, 55, 0.5)",
                            }}
                        >
                            {cat}
                        </button>
                    ))}
                </div> */}
            </section>

            {/* ===== Collection Grid ===== */}
            <section className="container mb-5">
                <div className="row g-4">
                    {filtered.map((item, i) => (
                        <div
                            key={item.id}
                            className="col-6 col-md-3 text-center"
                            data-aos={getAosType(i)}
                            data-aos-delay={i * 80}
                        >
                            <Link
                                to={`/collections/${item.slug}`}
                                className="text-decoration-none d-block"
                                style={{ color: "inherit" }}
                            >
                                <div className="rounded-4 overflow-hidden shadow-sm mb-2 collection-card">
                                    <img
                                        src={
                                            item.image1?.startsWith("http")
                                                ? item.image1
                                                : `http://127.0.0.1:8000/storage/${item.image1}`
                                        }
                                        alt={item.name}
                                        className="w-100 img-fluid"
                                        style={{ objectFit: "cover", height: "350px" }}
                                        loading="lazy"
                                    />
                                </div>

                                <div
                                    className="fw-semibold collection-title mb-1"
                                    style={{ color: "rgba(212, 175, 55, 0.75)" }}
                                >
                                    {item.name}
                                </div>
                                <div className="small text-light-50">
                                    {item.description}
                                </div>
                            </Link>
                        </div>
                    ))}

                    {filtered.length === 0 && (
                        <div className="col-12 text-center text-muted py-6">
                            No items found.
                        </div>
                    )}
                </div>
            </section>

            {/* ===== Pagination ===== */}
            <div className="d-flex justify-content-center align-items-center mt-4 gap-2 pb-5">
                <button
                    className="btn btn-outline-light btn-sm"
                    disabled={page === 1}
                    onClick={() => setPage(page - 1)}
                >
                    ‹ Prev
                </button>

                <span className="text-light">
                    Page {page} of {lastPage}
                </span>

                <button
                    className="btn btn-outline-light btn-sm"
                    disabled={page === lastPage}
                    onClick={() => setPage(page + 1)}
                >
                    Next ›
                </button>
            </div>
        </div>
    );
}
