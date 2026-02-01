import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import { Instagram, Facebook, Twitter } from "lucide-react";


export default function Home() {
    useEffect(() => {
        AOS.init({
            duration: 1000,
            once: true,
            easing: "ease-out-cubic",
        });
    }, []);

    return (
        <div style={{ backgroundColor: "#0b0608", color: "#fff" }}>
            {/* ===== NAVBAR ===== */}
            <header className="container py-4 d-flex justify-content-between align-items-center">
                <img
                    src="/images/logo-gold.png"
                    alt="Stitches by Ella"
                    style={{ height: 90 }}
                />

                <nav className="d-none d-md-flex gap-4 align-items-center">
                    {[
                        { name: "Home", path: "/" },
                        { name: "Collections", path: "/collections" },
                        { name: "About", path: "/about" },
                        { name: "Contact", path: "/contact-us" },
                    ].map((item) => (
                        <Link
                            key={item.name}
                            to={item.path}
                            className="text-decoration-none text-white fw-semibold"
                            style={{ transition: "color 0.3s ease" }}
                            onMouseEnter={(e) => (e.target.style.color = "#d4af37")}
                            onMouseLeave={(e) => (e.target.style.color = "#ffffff")}
                        >
                            {item.name}
                        </Link>
                    ))}
                </nav>
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
                                img: "/images/test1.jpg",
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
                                img: "/images/test3.jpg",
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
                                        style={{ height: 250, objectFit: "cover" }}
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
                                    href="#"
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
                                    href="#"
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
