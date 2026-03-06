import React from "react";
import { Link } from "react-router-dom";

export default function CollectionLayout({ title, description }) {
    return (
        <div style={{ backgroundColor: "#0b0608", color: "#fff", minHeight: "100vh" }}>
            <div className="container py-5" style={{ marginTop: "120px" }}>
                <h1 className="text-warning text-uppercase fw-bold mb-4">
                    {title}
                </h1>

                <p className="text-white-50 fs-5 mb-5">
                    {description}
                </p>

                {/* Placeholder Grid */}
                <div className="row g-4">
                    {[1, 2, 3, 4, 5, 6].map((item) => (
                        <div key={item} className="col-md-4">
                            <div
                                className="bg-black rounded-4 shadow-lg"
                                style={{ height: 350 }}
                            ></div>
                        </div>
                    ))}
                </div>

                <div className="mt-5">
                    <Link
                        to="/collections"
                        className="btn btn-outline-warning rounded-pill px-5 py-3"
                    >
                        Back to All Collections
                    </Link>
                </div>
            </div>
        </div>
    );
}