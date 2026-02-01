import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from "react-router-dom";


export default function AboutPage() {
    return (
        <div style={{ backgroundColor: '#2a1720', color: '#efe6e8', minHeight: '100vh' }}>
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
                        href="/contact-us"
                        className="text-decoration-none text-white fw-semibold transition-all"
                        style={{ transition: "color 0.3s ease" }}
                        onMouseEnter={(e) => (e.target.style.color = "#0d6efd")}
                        onMouseLeave={(e) => (e.target.style.color = "#ffffff")}
                    >
                        Contact
                    </a>
                    {/* <button
                        className="btn rounded-pill px-4 py-2"
                        style={{ backgroundColor: "rgba(212, 175, 55, 0.5)", color: "#fff" }}
                    >
                        Shop
                    </button> */}
                </nav>
            </header>

            <section className="container mb-5">
                <div className="position-relative overflow-hidden rounded-4 shadow-lg">
                    <img src="/images/first.png" alt="hero" className="w-100 img-fluid" style={{ filter: 'grayscale(100%)', opacity: '0.9', height: '400px', objectFit: 'cover' }} />
                    <div className="position-absolute top-50 start-50 translate-middle text-center text-white">
                        <h1 className="fw-bold display-5">Weaving Narratives in Fabric</h1>
                        <p className="small text-light-50">The story of a vision, tailored for the bold.</p>
                    </div>
                </div>
            </section>

            <main className="container">
                <section className="row mb-5">
                    <div className="col-md-3">
                        <h2
                            className="fw-bold fs-5"
                            style={{ color: "rgba(212, 175, 55, 0.5)" }}
                        >
                            The Journey
                        </h2>
                    </div>
                    <div className="col-md-9">
                        <p className="small text-light-50">
                            From an early age, I was captivated by the language of clothing—the silent stories told by well-stitched seams, the emotion conveyed by the fall of a particular fabric.
                            My journey began not in a bustling atelier, but in a quiet attic room, surrounded by vintage patterns and inherited textiles.
                        </p>
                        <p className="small text-light-50">
                            After honing my craft at the world’s most prestigious design schools, I founded my own label with a singular mission: to create pieces that empower the wearer.
                            My work is a dialogue between classic tailoring and avant-garde design — a celebration of strength and vulnerability in equal measure.
                        </p>
                    </div>
                </section>

                <section className="mb-5">
                    <h3 className="fw-bold fs-5 mb-3" style={{ color: "rgba(212, 175, 55, 0.5)" }}
                    >Our Design Philosophy</h3>
                    <p className="small text-light-50 mb-4">
                        We believe in the power of bold expression and meticulous craftsmanship. Every piece is a statement, a fusion of avant-garde vision and timeless technique — designed for those who dare to be different.
                    </p>
                    <div className="row g-3">
                        <div className="col-md-4">
                            <div className="p-4 rounded-3" style={{ backgroundColor: '#331b21', border: '1px solid #3a2128' }}>
                                <h6 className="fw-semibold" style={{ color: "rgba(212, 175, 55, 0.5)" }}
                                >Innovative Silhouettes</h6>
                                <p className="small text-light-50 mb-0">Pushing the boundaries of form and function in every cut.</p>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="p-4 rounded-3" style={{ backgroundColor: '#331b21', border: '1px solid #3a2128' }}>
                                <h6 className="fw-semibold" style={{ color: "rgba(212, 175, 55, 0.5)" }}
                                >Sustainable Materials</h6>
                                <p className="small text-light-50 mb-0">Ethically-sourced fabrics that feel as good as they look.</p>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="p-4 rounded-3" style={{ backgroundColor: '#331b21', border: '1px solid #3a2128' }}>
                                <h6 className="fw-semibold" style={{ color: "rgba(212, 175, 55, 0.5)" }}
                                >Handcrafted Details</h6>
                                <p className="small text-light-50 mb-0">Artisan touches that make each garment a unique work of art.</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* <section className="text-center mb-5">
                    <h3 className="fw-bold fs-5 mb-4" style={{ color: "rgba(212, 175, 55, 0.5)" }}
                    >Milestones</h3>
                    <ul className="list-unstyled mx-auto" style={{ maxWidth: '400px' }}>
                        <li className="mb-3">
                            <strong>First Sketch</strong>
                            <div className="small text-light-50">The spark that started it all — 2015</div>
                        </li>
                        <li className="mb-3">
                            <strong>Debut Collection Launch</strong>
                            <div className="small text-light-50">2018 — Fashion House premiere</div>
                        </li>
                        <li className="mb-3">
                            <strong>Fashion Week Premiere</strong>
                            <div className="small text-light-50">2021 — A standing ovation in Paris</div>
                        </li>
                        <li>
                            <strong>Global Recognition Award</strong>
                            <div className="small text-light-50">2023 — Honored for sustainable innovation</div>
                        </li>
                    </ul>
                </section> */}

                <section className="text-center mb-5">
                    <div className="p-4 rounded-3 border-start border-4 mx-auto" style={{ backgroundColor: '#2b1a1f', borderColor: '#d63384', maxWidth: '600px' }}>
                        <blockquote className="fst-italic small mb-2">
                            "Fashion should be a form of escapism, not a form of imprisonment. My goal is to create clothes that liberate the soul."
                        </blockquote>
                        <div className="text-light-50 small" style={{ color: "rgba(212, 175, 55, 0.5)" }}
                        >— Effiong Ella</div>
                    </div>
                </section>

                <section className="text-center mb-5">
                    <div className="p-5 rounded-3 mx-auto" style={{ backgroundColor: '#2b1a1f', maxWidth: '600px' }}>
                        <h5 className="fw-semibold">Ready to Join the Narrative?</h5>
                        <p className="small text-light-50">Explore the latest collection where every thread tells a story.</p>
                        <Link
                            to="/collections"
                            className="btn rounded-pill px-4 py-2 mt-2"
                            style={{ backgroundColor: "#d63384", color: "#fff" }}
                        >
                            View Latest Collection
                        </Link>
                    </div>
                </section>
            </main>

            <footer className="container py-4 d-flex justify-content-between align-items-center border-top border-dark text-light-50 small">
                <div>© 2026 Stitches-By-Ella. All rights reserved.</div>
                <div className="d-flex gap-3">
                    <a href="#" className="text-decoration-none text-light">Twitter</a>
                    <a href="#" className="text-decoration-none text-light">Instagram</a>
                    <a href="#" className="text-decoration-none text-light">Contact</a>
                </div>
            </footer>
        </div>
    );
}
