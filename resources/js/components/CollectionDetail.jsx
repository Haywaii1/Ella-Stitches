import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";

export default function CollectionDetail() {
    const { id } = useParams();
    const [collection, setCollection] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    useEffect(() => {
        AOS.init({ duration: 800, once: true });
    }, []);

    useEffect(() => {
        let mounted = true;
        setLoading(true);
        setError("");
        axios.get(`/api/collections/${id}`)
            .then((res) => {
                if (!mounted) return;
                setCollection(res.data);
            })
            .catch((err) => {
                console.error("Error fetching collection:", err);
                setError("Collection not found or server error.");
            })
            .finally(() => mounted && setLoading(false));

        return () => { mounted = false; };
    }, [id]);

    if (loading) return <div className="text-center py-5">Loading...</div>;
    if (error) return (
        <div className="text-center py-5 text-danger">
            {error} <br />
            <Link to="/collections" className="btn btn-outline-warning mt-3">Back to Collections</Link>
        </div>
    );
    if (!collection) return null;

    const images = [collection.image1, collection.image2, collection.image3].filter(Boolean);

    return (
        <div style={{ backgroundColor: "#2a1720", color: "#efe6e8", minHeight: "100vh" }}>
            <header className="container py-4 d-flex justify-content-between align-items-center">
                <img src="/images/logo-gold.png" alt="Logo" style={{ height: 80 }} />
                <Link to="/collections" className="text-white text-decoration-none">← Back to Collections</Link>
            </header>

            <section className="container text-center py-5">
                <h1 className="fw-bold text-warning">{collection.name}</h1>
                <p className="text-light mb-5">{collection.description}</p>

                <div className="row g-4 justify-content-center">
                    {images.map((src, i) => (
                        <div key={i} className="col-10 col-md-4 col-lg-3" data-aos="zoom-in" data-aos-delay={i * 120}>
                            <div className="rounded-4 overflow-hidden position-relative shadow-lg">
                                <img src={src} alt={`${collection.name} ${i + 1}`} className="img-fluid" style={{ height: 350, width: "100%", objectFit: "cover" }} />
                            </div>
                        </div>
                    ))}
                    {images.length === 0 && <div className="text-muted">No images available for this collection.</div>}
                </div>
            </section>
        </div>
    );
}
