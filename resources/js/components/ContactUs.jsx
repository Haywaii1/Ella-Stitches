import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom"; // ✅ add useNavigate
import AOS from "aos";
import "aos/dist/aos.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Mail, Phone, MapPin, Instagram, Facebook } from "lucide-react";

export default function Contact() {
    const navigate = useNavigate(); // ✅ initialize navigation
    const [form, setForm] = useState({
        name: "",
        email: "",
        subject: "",
        message: "",
    });
    const [sent, setSent] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false); // ✅ disable button while sending

    useEffect(() => {
        AOS.init({ duration: 1000, once: true });
    }, []);

    useEffect(() => {
        const style = document.createElement("style");
        style.innerHTML = `
    ::placeholder {
      color: white !important;
      opacity: 1 !important;
    }
  `;
        document.head.appendChild(style);
    }, []);


    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm({ ...form, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true); // ✅ disable button immediately

        try {
            const res = await fetch("http://127.0.0.1:8000/api/contact", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(form),
            });

            const data = await res.json();

            if (data.success) {
                setSent(true);
                setForm({ name: "", email: "", subject: "", message: "" });

                // ✅ wait briefly, then redirect to homepage
                setTimeout(() => {
                    navigate("/"); // redirect to home
                }, 2500);
            } else {
                alert("Something went wrong. Please try again.");
            }
        } catch (error) {
            console.error("Error sending message:", error);
            alert("Error sending message. Check your connection.");
        } finally {
            setIsSubmitting(false); // ✅ re-enable button after completion
        }
    };

    const gold = "#d4af37"; // gold accent color

    return (
        <div
            style={{
                backgroundColor: "#1a0f0a",
                color: gold,
                minHeight: "100vh",
                fontFamily: "'Poppins', sans-serif",
            }}
        >
            {/* ===== NAVBAR ===== */}
            <nav
                className="navbar navbar-expand-lg py-3 px-4"
                style={{
                    backgroundColor: "rgba(0,0,0,0.9)",
                    borderBottom: `1px solid ${gold}`,
                }}
            >
                <div className="container-fluid d-flex justify-content-between align-items-center">
                    <div className="d-flex align-items-center gap-2">
                        <img
                            src="/images/logo-gold.png"
                            alt="Stitches by Ella Logo"
                            className="h-[90px] w-auto object-contain ml-3"
                        />
                    </div>
                    <div>
                        <Link
                            to="/"
                            className="mx-3 text-decoration-none fw-semibold"
                            style={{ color: gold }}
                        >
                            Home
                        </Link>
                        <Link
                            to="/collections"
                            className="mx-3 text-decoration-none fw-semibold"
                            style={{ color: gold }}
                        >
                            Collections
                        </Link>
                        <Link
                            to="/about"
                            className="mx-3 text-decoration-none fw-semibold"
                            style={{ color: gold }}
                        >
                            About
                        </Link>
                        <Link
                            to="/contact"
                            className="mx-3 text-decoration-none fw-bold"
                            style={{
                                color: gold,
                                borderBottom: `2px solid ${gold}`,
                                paddingBottom: "3px",
                            }}
                        >
                            Contact
                        </Link>
                    </div>
                </div>
            </nav>

            {/* ===== HERO ===== */}
            <header
                className="text-center py-5"
                style={{
                    background: "linear-gradient(to bottom, rgba(0,0,0,0.7), #1a0f0a)",
                    color: gold,
                }}
            >
                <h1 className="fw-bold mb-3" data-aos="fade-down">
                    Get In Touch
                </h1>
                <p className="text-light" data-aos="fade-up" style={{ color: "#f4e8d6" }}>
                    For collaborations, press inquiries, or custom orders — we’d love to hear from you.
                </p>
            </header>

            {/* ===== CONTACT SECTION ===== */}
            <section className="container py-5">
                <div className="row g-5">
                    {/* --- Contact Info --- */}
                    <div className="col-md-5" data-aos="fade-right">
                        <h4 className="fw-bold mb-4" style={{ color: gold }}>
                            Contact Details
                        </h4>
                        <ul className="list-unstyled">
                            <li className="d-flex align-items-center mb-3">
                                <Mail className="me-3" color={gold} /> studio@stitchesbyella.com
                            </li>
                            <li className="d-flex align-items-center mb-3">
                                <Phone className="me-3" color={gold} /> +234 802 608 5555
                            </li>
                            <li className="d-flex align-items-center mb-3">
                                <MapPin className="me-3" color={gold} /> 93 Oshola Street, Ogba, Lagos, Nigeria
                            </li>
                        </ul>

                        <h5 className="fw-bold mt-5" style={{ color: gold }}>
                            Follow The Journey
                        </h5>
                        <div className="d-flex gap-4 mt-3">
                            <a href="#" style={{ color: gold, fontSize: "1.5rem" }}>
                                <Instagram />
                            </a>
                            <a href="#" style={{ color: gold, fontSize: "1.5rem" }}>
                                <Facebook />
                            </a>
                        </div>
                    </div>

                    {/* --- Inquiry Form --- */}
                    <div className="col-md-7" data-aos="fade-left">
                        <h4 className="fw-bold mb-4" style={{ color: gold }}>
                            Send an Inquiry
                        </h4>
                        <form onSubmit={handleSubmit}>
                            <div className="row g-3 mb-3">
                                <div className="col-md-6">
                                    <input
                                        type="text"
                                        name="name"
                                        value={form.name}
                                        onChange={handleChange}
                                        className="form-control bg-transparent text-light"
                                        style={{
                                            border: `1px solid ${gold}`,
                                            color: gold,
                                        }}
                                        placeholder="Full Name"
                                        required
                                    />
                                </div>
                                <div className="col-md-6">
                                    <input
                                        type="email"
                                        name="email"
                                        value={form.email}
                                        onChange={handleChange}
                                        className="form-control bg-transparent text-light"
                                        style={{
                                            border: `1px solid ${gold}`,
                                            color: gold,
                                        }}
                                        placeholder="Email Address"
                                        required
                                    />
                                </div>
                            </div>
                            <div className="mb-3">
                                <input
                                    type="text"
                                    name="subject"
                                    value={form.subject}
                                    onChange={handleChange}
                                    className="form-control bg-transparent text-light"
                                    style={{
                                        border: `1px solid ${gold}`,
                                        color: gold,
                                    }}
                                    placeholder="Subject"
                                    required
                                />
                            </div>
                            <div className="mb-4">
                                <textarea
                                    name="message"
                                    value={form.message}
                                    onChange={handleChange}
                                    className="form-control bg-transparent text-light"
                                    style={{
                                        border: `1px solid ${gold}`,
                                        color: gold,
                                    }}
                                    rows="5"
                                    placeholder="Your Message"
                                    required
                                ></textarea>
                            </div>

                            {/* ✅ Button disabled while sending */}
                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className="w-100 fw-bold py-2"
                                style={{
                                    backgroundColor: isSubmitting ? "#8b8b8b" : gold,
                                    color: isSubmitting ? "#333" : "#1a0f0a",
                                    border: `1px solid ${gold}`,
                                    transition: "all 0.3s ease",
                                    cursor: isSubmitting ? "not-allowed" : "pointer",
                                }}
                            >
                                {isSubmitting ? "Sending..." : "Send Message"}
                            </button>

                            {sent && (
                                <p className="text-center fw-semibold mt-3" style={{ color: "#9eff9e" }}>
                                    ✅ Message sent successfully!
                                </p>
                            )}
                        </form>
                    </div>
                </div>
            </section>

            {/* ===== FOOTER ===== */}
            <footer
                className="text-center py-4"
                style={{
                    borderTop: `1px solid ${gold}`,
                    color: gold,
                    backgroundColor: "rgba(0,0,0,0.9)",
                }}
            >
                <small>© 2025 Stitches by Ella. All Rights Reserved.</small>
            </footer>
        </div>
    );
}
