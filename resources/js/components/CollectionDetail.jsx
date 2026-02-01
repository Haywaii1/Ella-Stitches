import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";
import AOS from "aos";
import "aos/dist/aos.css";

export default function CollectionDetail() {
    const { slug } = useParams(); // ✅ slug, not id
    const [collection, setCollection] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    useEffect(() => {
        AOS.init({ duration: 800, once: true });
    }, []);

    useEffect(() => {
        setLoading(true);
        setError("");

        axios
            .get(`/api/collections/${slug}`)
            .then((res) => setCollection(res.data))
            .catch(() => setError("Collection not found"))
            .finally(() => setLoading(false));
    }, [slug]);

    if (loading) return <div className="text-center py-5">Loading…</div>;

    if (error)
        return (
            <div className="text-center py-5 text-danger">
                {error}
                <br />
                <Link to="/collections" className="btn btn-outline-warning mt-3">
                    Back to Collections
                </Link>
            </div>
        );

    const images = [collection.image1, collection.image2, collection.image3].filter(Boolean);

    return (
        <div style={{ backgroundColor: "#2a1720", minHeight: "100vh", color: "#efe6e8" }}>
            <header className="container py-4 d-flex justify-content-between align-items-center">
                <img src="/images/logo-gold.png" alt="Logo" style={{ height: 80 }} />
                <Link to="/collections" className="text-white text-decoration-none">
                    ← Back to Collections
                </Link>
            </header>

            <section className="container text-center py-5">
                <h1 className="fw-bold text-warning">{collection.name}</h1>
                <p className="text-light mb-5">{collection.description}</p>

                <div className="row g-4 justify-content-center">
                    {images.map((src, i) => (
                        <div key={i} className="col-10 col-md-4 col-lg-3" data-aos="zoom-in">
                            <div className="rounded-4 overflow-hidden shadow-lg">
                                <img
                                    src={src}
                                    alt={`${collection.name} ${i + 1}`}
                                    className="img-fluid"
                                    style={{ height: 350, width: "100%", objectFit: "cover" }}
                                />
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
}
