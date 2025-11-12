import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";


export default function Home() {
    useEffect(() => {
        AOS.init({ duration: 1000, once: true, easing: "ease-out-cubic" });
    }, []);

    return (
        <div style={{ backgroundColor: "#0b0608", color: "#fff" }}>
            {/* ===== NAVBAR ===== */}
            {/* Header */}
            <header className="container py-4 d-flex justify-content-between align-items-center">
                <div className="d-flex align-items-center gap-2">
                    <img
                        src="/images/logo-gold.png"
                        alt="Aura Logo"
                        className="h-[90px] w-auto object-contain ml-3"
                    />
                </div>

                <nav className="d-none d-md-flex gap-4 align-items-center">
                    <a
                        href="/"
                        className="text-decoration-none text-white fw-semibold transition-all"
                        style={{ transition: "color 0.3s ease" }}
                        onMouseEnter={(e) => (e.target.style.color = "#0d6efd")}
                        onMouseLeave={(e) => (e.target.style.color = "#ffffff")}
                    >
                        Home
                    </a>
                    <a
                        href="/collections"
                        className="text-decoration-none text-white fw-semibold transition-all"
                        style={{ transition: "color 0.3s ease" }}
                        onMouseEnter={(e) => (e.target.style.color = "#0d6efd")}
                        onMouseLeave={(e) => (e.target.style.color = "#ffffff")}
                    >
                        Collections
                    </a>
                    <a
                        href="/about"
                        className="text-decoration-none text-white fw-semibold transition-all"
                        style={{ transition: "color 0.3s ease" }}
                        onMouseEnter={(e) => (e.target.style.color = "#0d6efd")}
                        onMouseLeave={(e) => (e.target.style.color = "#ffffff")}
                    >
                        About
                    </a>
                    <a
                        href="contact-us"
                        className="text-decoration-none text-white fw-semibold transition-all"
                        style={{ transition: "color 0.3s ease" }}
                        onMouseEnter={(e) => (e.target.style.color = "#0d6efd")}
                        onMouseLeave={(e) => (e.target.style.color = "#ffffff")}
                    >
                        Contact
                    </a>
                    {/* <button
                        className="btn rounded-pill px-4 py-2"
                        style={{ backgroundColor: "#d63384", color: "#fff" }}
                    >
                        Shop
                    </button> */}
                </nav>
            </header>


            {/* ===== HERO SECTION ===== */}
            <section
                className="position-relative text-center d-flex flex-column justify-content-center align-items-center"
                style={{
                    height: "90vh",
                    background: "url('/images/first.png') center/cover no-repeat",
                }}
            >
                <div className="position-absolute top-0 start-0 w-100 h-100 bg-black opacity-75"></div>
                <div className="position-relative z-1 text-light px-3">
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
                        data-aos-delay="400"
                        className="fs-5 text-white-50 mb-5"
                    >
                        Discover a world where{" "}
                        <span className="text-warning">fashion</span> becomes art — bold,
                        unapologetic, and modern.
                    </p>
                    <Link to="/collections"
                        className="btn btn-outline-warning rounded-pill px-5 py-3 text-uppercase fw-semibold">
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

                    <div id="collectionCarousel" className="carousel slide" data-bs-ride="carousel">
                        <div className="carousel-inner">
                            {["latest", "first", "third"].map((img, i) => (
                                <div
                                    key={i}
                                    className={`carousel-item ${i === 0 ? "active" : ""}`}
                                >
                                    <img
                                        src={`/images/${img}.png`}
                                        className="d-block w-100 rounded-4"
                                        style={{ height: "500px", objectFit: "cover" }}
                                        alt={`slide-${i}`}
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
                            <span className="carousel-control-prev-icon"></span>
                        </button>
                        <button
                            className="carousel-control-next"
                            type="button"
                            data-bs-target="#collectionCarousel"
                            data-bs-slide="next"
                        >
                            <span className="carousel-control-next-icon"></span>
                        </button>
                    </div>

                    <div className="mt-5">
                        <Link to="/collections"
                            className="btn btn-outline-warning rounded-pill px-5 py-3 text-uppercase fw-semibold">
                            Explore the Full Collection
                        </Link>
                    </div>
                </div>
            </section>

            {/* ===== VOICES OF STYLE ===== */}
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
                                quote: "The most stunning designs I’ve ever worn. Truly a work of art.",
                            },
                            {
                                img: "/images/test2.jpg",
                                name: "Liam Gallagher",
                                title: "Celebrity Stylist",
                                quote: "Impeccable tailoring and unparalleled quality. Every piece is a statement.",
                            },
                            {
                                img: "/images/test3.jpg",
                                name: "Sofia Rossi",
                                title: "Art Director",
                                quote: "A true artist and visionary. Their collections redefine modern elegance.",
                            },
                        ].map((t, i) => (
                            <div key={i} className="col-md-4" data-aos="fade-up"
                                data-aos-delay="400">
                                <div
                                    className="card bg-black border border-warning-subtle rounded-4 shadow-lg h-100 text-white"
                                    style={{
                                        transition: "all 0.4s ease",
                                    }}
                                    onMouseEnter={(e) => {
                                        e.currentTarget.style.transform = "translateY(-10px)";
                                        e.currentTarget.style.boxShadow = "0 0 25px rgba(212, 175, 55, 0.5)";
                                    }}
                                    onMouseLeave={(e) => {
                                        e.currentTarget.style.transform = "translateY(0)";
                                        e.currentTarget.style.boxShadow = "0 0 10px rgba(0,0,0,0.4)";
                                    }}
                                >
                                    <img
                                        src={t.img}
                                        alt={t.name}
                                        className="card-img-top rounded-top-4"
                                        style={{ height: "250px", objectFit: "cover" }}
                                    />
                                    <div className="card-body text-start px-4">
                                        <p className="fst-italic" style={{ color: "rgba(255, 255, 255, 0.85)" }}>
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


                    <div className="mt-5">
                        <button className="btn btn-outline-warning rounded-pill px-5 py-3 text-uppercase fw-semibold">
                            View Portfolio
                        </button>
                    </div>
                </div>
            </section>
        </div>
    );
}
