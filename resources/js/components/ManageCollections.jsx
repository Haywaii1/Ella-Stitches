import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

export default function ManageCollections() {
    const [collections, setCollections] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        axios.get("/api/collections")
            .then(res => setCollections(res.data.data))
            .finally(() => setLoading(false));
    }, []);

    const handleDelete = async (id) => {
        try {
            await axios.delete(`/api/collections/${id}`);

            // ✅ silent UI update
            setCollections(prev => prev.filter(c => c.id !== id));
        } catch (err) {
            console.error("Failed to delete collection", err);
        }
    };

    if (loading) return <div className="text-center py-5">Loading...</div>;

    return (
        <div className="container py-5">
            <h2 className="mb-4 text-warning">Manage Collections</h2>

            <div className="table-responsive">
                <table className="table table-dark table-hover align-middle">
                    <thead>
                        <tr>
                            <th>Preview</th>
                            <th>Name</th>
                            <th>Description</th>
                            <th className="text-end">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {collections.map(col => (
                            <tr key={col.id}>
                                <td>
                                    {col.image1 ? (
                                        <img
                                            src={col.image1}
                                            alt={col.name}
                                            style={{
                                                width: 70,
                                                height: 70,
                                                objectFit: "cover",
                                                borderRadius: 8,
                                                border: "1px solid #d4af37"
                                            }}
                                        />
                                    ) : (
                                        <span className="text-muted">No image</span>
                                    )}
                                </td>
                                <td>{col.name}</td>
                                <td>{col.description || "—"}</td>
                                <td className="text-end">
                                    <Link
                                        to={`/collections/${col.id}`}
                                        className="btn btn-sm btn-outline-info me-2"
                                    >
                                        View
                                    </Link>
                                    <button
                                        className="btn btn-sm btn-outline-danger"
                                        onClick={() => handleDelete(col.id)}
                                    >
                                        Delete
                                    </button>
                                </td>
                            </tr>
                        ))}

                        {collections.length === 0 && (
                            <tr>
                                <td colSpan="4" className="text-center text-muted">
                                    No collections found
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
