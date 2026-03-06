import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import { Instagram, Facebook, Twitter } from "lucide-react";
import { useRef } from "react";
import { Dropdown } from "bootstrap";

export default function Home() {
    useEffect(() => {
        AOS.init({
            duration: 1000,
            once: true,
            easing: "ease-out-cubic",
        });
    }, []);

    const [isOpen, setIsOpen] = useState(false);
    const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);

    const collections = [
        { name: "All Collections", path: "/collections" },
        { name: "The Ellure Collection", path: "/collections/ellure" },
        { name: "The Ellanella Collection", path: "/collections/ellanella" },
        { name: "The Ellatique Collection", path: "/collections/ellatique" },
        { name: "The Sutella Collection", path: "/collections/sutella" },
        { name: "The Tailella Collection", path: "/collections/tailella" },
    ];

    return (
        <div style={{ backgroundColor: "#0b0608", color: "#fff" }}>
            {/* ===== NAVBAR ===== */}
            <header className="container-fluid px-4 py-3 position-fixed top-0 start-0 w-100 z-3"
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

                    {/* Hamburger Button (Mobile) */}
                    <button
                        className="navbar-toggler d-md-none border-0"
                        type="button"
                        onClick={() => setIsMobileNavOpen(!isMobileNavOpen)}
                    >
                        <span className="navbar-toggler-icon"
                            style={{
                                filter: "invert(1)"
                            }}
                        />
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

                {/* MOBILE NAV PANEL */}
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
            {/* ===== HERO SECTION ===== */}
            <section
                className="position-relative d-flex align-items-center justify-content-center text-center"
                style={{
                    height: "90vh",
                    background: "url('/images/first.png') center/cover no-repeat",
                }}
            >
                <div className="position-absolute w-100 h-100 bg-black opacity-75"></div>

                <div className="position-relative z-1 px-3">
                    <h1
                        data-aos="fade-up"
                        className="display-1 fw-bold text-uppercase mb-4"
                    >
                        <span className="text-white">Fi</span>
                        <span className="text-warning">erce</span> &{" "}
                        <span className="text-warning">Fabulous</span>
                    </h1>

                    <p
                        data-aos="fade-up"
                        data-aos-delay="300"
                        className="fs-5 text-white-50 mb-5"
                    >
                        Discover a world where{" "}
                        <span className="text-warning">fashion</span> becomes art —
                        bold, unapologetic, and modern.
                    </p>

                    <Link
                        to="/collections"
                        className="btn btn-outline-warning rounded-pill px-5 py-3 fw-semibold"
                    >
                        Explore Now
                    </Link>
                </div>
            </section>

            {/* ===== LATEST COLLECTION ===== */}
            <section className="py-5 bg-black text-center">
                <div className="container">
                    <h2
                        data-aos="fade-up"
                        className="text-warning text-uppercase fw-light mb-5"
                    >
                        The Latest Collection
                    </h2>

                    <div
                        id="collectionCarousel"
                        className="carousel slide"
                        data-bs-ride="carousel"
                    >
                        <div className="carousel-inner">
                            {["latest", "first", "third"].map((img, i) => (
                                <div
                                    key={img}
                                    className={`carousel-item ${i === 0 ? "active" : ""}`}
                                >
                                    <img
                                        src={`/images/${img}.png`}
                                        className="d-block w-100 rounded-4"
                                        style={{ height: 500, objectFit: "cover" }}
                                        alt={img}
                                    />
                                </div>
                            ))}
                        </div>

                        <button
                            className="carousel-control-prev"
                            type="button"
                            data-bs-target="#collectionCarousel"
                            data-bs-slide="prev"
                        >
                            <span className="carousel-control-prev-icon" />
                        </button>

                        <button
                            className="carousel-control-next"
                            type="button"
                            data-bs-target="#collectionCarousel"
                            data-bs-slide="next"
                        >
                            <span className="carousel-control-next-icon" />
                        </button>
                    </div>

                    <div className="mt-5">
                        <Link
                            to="/collections"
                            className="btn btn-outline-warning rounded-pill px-5 py-3 fw-semibold"
                        >
                            Explore the Full Collection
                        </Link>
                    </div>
                </div>
            </section>

            {/* ===== TESTIMONIALS ===== */}
            <section className="bg-dark py-5 text-center">
                <div className="container">
                    <h2
                        data-aos="fade-up"
                        className="mb-5 text-warning text-uppercase fw-bold"
                    >
                        Voices of Style
                    </h2>

                    <div className="row g-4">
                        {[
                            {
                                img: "/images/home.png",
                                name: "Olivia Chen",
                                title: "Fashion Blogger",
                                quote:
                                    "The most stunning designs I’ve ever worn. Truly a work of art.",
                            },
                            {
                                img: "/images/test2.jpg",
                                name: "Liam Gallagher",
                                title: "Celebrity Stylist",
                                quote:
                                    "Impeccable tailoring and unparalleled quality. Every piece is a statement.",
                            },
                            {
                                img: "/images/home2.jpg",
                                name: "Sofia Rossi",
                                title: "Art Director",
                                quote:
                                    "A true artist and visionary. Their collections redefine modern elegance.",
                            },
                        ].map((t, i) => (
                            <div key={i} className="col-md-4" data-aos="fade-up">
                                <div className="card bg-black border border-warning-subtle rounded-4 shadow-lg h-100 text-white">
                                    <img
                                        src={t.img}
                                        alt={t.name}
                                        className="card-img-top rounded-top-4"
                                        style={{
                                            height: 250,
                                            objectFit: "cover",
                                            objectPosition: "top"
                                        }}
                                    />

                                    <div className="card-body text-start px-4">
                                        <p className="fst-italic text-white-50">
                                            “{t.quote}”
                                        </p>
                                        <p className="text-warning small">
                                            — {t.name}, {t.title}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <div>
                <footer className="bg-black border-top border-warning-subtle pt-5 pb-4">
                    <div className="container">

                        {/* Top Section */}
                        <div className="row justify-content-center gy-4 text-center text-md-start">

                            {/* Brand */}
                            <div className="col-md-4 d-flex flex-column align-items-center align-items-md-start">
                                <img
                                    src="/images/logo-gold.png"
                                    alt="Stitches by Ella"
                                    style={{ height: 80 }}
                                    className="mb-3"
                                />
                                <p className="text-white-50 small" style={{ maxWidth: 300 }}>
                                    Stitches by Ella is a fashion house where bold design meets
                                    timeless elegance. Every piece tells a story.
                                </p>
                            </div>

                            {/* Quick Links */}
                            <div className="col-md-4 d-flex flex-column align-items-center">
                                <h6 className="text-warning text-uppercase mb-3">
                                    Quick Links
                                </h6>
                                <ul className="list-unstyled text-center">
                                    {[
                                        { name: "Home", path: "/" },
                                        { name: "Collections", path: "/collections" },
                                        { name: "About", path: "/about" },
                                        { name: "Contact", path: "/contact-us" },
                                    ].map((link) => (
                                        <li key={link.name} className="mb-2">
                                            <Link
                                                to={link.path}
                                                className="text-decoration-none text-white-50"
                                                style={{ transition: "color 0.3s ease" }}
                                                onMouseEnter={(e) =>
                                                    (e.target.style.color = "#d4af37")
                                                }
                                                onMouseLeave={(e) =>
                                                (e.target.style.color =
                                                    "rgba(255,255,255,.5)")
                                                }
                                            >
                                                {link.name}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            {/* Contact */}
                            <div className="col-md-4 d-flex flex-column align-items-center align-items-md-end text-md-end">
                                <h6 className="text-warning text-uppercase mb-3">
                                    Contact
                                </h6>
                                <p className="text-white-50 small mb-2">
                                    📍 Lagos, Nigeria
                                </p>
                                <p className="text-white-50 small mb-2">
                                    📧 info@stitchesbyella.com
                                </p>
                                <p className="text-white-50 small">
                                    📞 +234 800 000 0000
                                </p>
                            </div>
                        </div>

                        <hr className="border-warning-subtle my-4" />

                        {/* Bottom */}
                        <div className="d-flex justify-content-center mt-4">
                            <div className="d-flex gap-4">
                                <a
                                    href="https://www.instagram.com/stitches_by_ella?igsh=N2RrZ2t3MXFxN3Iz"
                                    aria-label="Instagram"
                                    className="text-white-50"
                                    style={{ transition: "all 0.3s ease" }}
                                    onMouseEnter={(e) => {
                                        e.currentTarget.style.color = "#d4af37";
                                        e.currentTarget.style.transform = "translateY(-2px)";
                                    }}
                                    onMouseLeave={(e) => {
                                        e.currentTarget.style.color = "rgba(255,255,255,.5)";
                                        e.currentTarget.style.transform = "translateY(0)";
                                    }}
                                >
                                    <Instagram size={20} />
                                </a>

                                <a
                                    href="https://web.facebook.com/ellacheks/photos/?_rdc=1&_rdr#"
                                    aria-label="Facebook"
                                    className="text-white-50"
                                    style={{ transition: "all 0.3s ease" }}
                                    onMouseEnter={(e) => {
                                        e.currentTarget.style.color = "#d4af37";
                                        e.currentTarget.style.transform = "translateY(-2px)";
                                    }}
                                    onMouseLeave={(e) => {
                                        e.currentTarget.style.color = "rgba(255,255,255,.5)";
                                        e.currentTarget.style.transform = "translateY(0)";
                                    }}
                                >
                                    <Facebook size={20} />
                                </a>

                                <a
                                    href="#"
                                    aria-label="Twitter"
                                    className="text-white-50"
                                    style={{ transition: "all 0.3s ease" }}
                                    onMouseEnter={(e) => {
                                        e.currentTarget.style.color = "#d4af37";
                                        e.currentTarget.style.transform = "translateY(-2px)";
                                    }}
                                    onMouseLeave={(e) => {
                                        e.currentTarget.style.color = "rgba(255,255,255,.5)";
                                        e.currentTarget.style.transform = "translateY(0)";
                                    }}
                                >
                                    <Twitter size={20} />
                                </a>
                            </div>
                        </div>
                    </div>
                </footer>

            </div>
        </div>

    );
}
