import React, { useState } from "react";
import axios from "axios";

export default function AddCollection() {
    const [formData, setFormData] = useState({
        name: "",
        description: "",
        category: "", // ✅ NEW FIELD
        image1: null,
        image2: null,
        image3: null,
    });

    const [message, setMessage] = useState("");
    const [loading, setLoading] = useState(false);

    const handleChange = (e) => {
        const { name, value, files } = e.target;

        if (files) {
            setFormData({ ...formData, [name]: files[0] });
        } else {
            setFormData({ ...formData, [name]: value });
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setMessage("");

        try {
            const formDataToSend = new FormData();
            formDataToSend.append("name", formData.name);
            formDataToSend.append("description", formData.description);
            formDataToSend.append("category", formData.category); // ✅ send category

            if (formData.image1) formDataToSend.append("image1", formData.image1);
            if (formData.image2) formDataToSend.append("image2", formData.image2);
            if (formData.image3) formDataToSend.append("image3", formData.image3);

            await axios.post(
                "http://127.0.0.1:8000/api/collections",
                formDataToSend,
                {
                    headers: { "Content-Type": "multipart/form-data" },
                }
            );

            setMessage("✅ Collection added successfully!");

            setTimeout(() => {
                window.location.href = "/collections";
            }, 1200);

        } catch (err) {
            console.error(err);
            setMessage("❌ Failed to add collection. Please try again.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div
            className="container py-5"
            style={{
                minHeight: "100vh",
                backgroundColor: "#2a1720",
                color: "#efe6e8"
            }}
        >
            <h2 className="text-center mb-4 fw-bold">
                Add New Outfit
            </h2>

            <form
                onSubmit={handleSubmit}
                className="p-4 rounded-4 shadow-lg mx-auto"
                style={{
                    maxWidth: "600px",
                    backgroundColor: "#1b0f15"
                }}
            >
                {/* Name */}
                <div className="mb-3">
                    <label className="form-label fw-semibold">
                        Outfit Name
                    </label>
                    <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className="form-control bg-dark text-light border-warning"
                        placeholder="Enter outfit name"
                        required
                    />
                </div>

                {/* Category Dropdown */}
                <div className="mb-3">
                    <label className="form-label fw-semibold">
                        Collection Category
                    </label>
                    <select
                        name="category"
                        value={formData.category}
                        onChange={handleChange}
                        className="form-select bg-dark text-light border-warning"
                        required
                    >
                        <option value="">Select Collection</option>
                        <option value="ellure">Ellure Collection</option>
                        <option value="ellanella">Ellanella Collection</option>
                        <option value="ellatique">Ellatique Collection</option>
                        <option value="sutella">Sutella Collection</option>
                        <option value="tailella">Tailella Collection</option>
                    </select>
                </div>

                {/* Description */}
                <div className="mb-3">
                    <label className="form-label fw-semibold">
                        Description
                    </label>
                    <textarea
                        name="description"
                        value={formData.description}
                        onChange={handleChange}
                        className="form-control bg-dark text-light border-warning"
                        rows="4"
                        placeholder="Describe this outfit..."
                    />
                </div>

                {/* Images */}
                {["image1", "image2", "image3"].map((field, idx) => (
                    <div className="mb-3" key={field}>
                        <label className="form-label fw-semibold">
                            {`Image ${idx + 1}`}
                        </label>
                        <input
                            type="file"
                            name={field}
                            accept="image/*"
                            onChange={handleChange}
                            className="form-control bg-dark text-light border-warning"
                        />
                    </div>
                ))}

                {/* Submit */}
                <button
                    type="submit"
                    className="btn btn-warning w-100 fw-bold"
                    disabled={loading}
                >
                    {loading ? "Uploading..." : "Add Outfit"}
                </button>

                {message && (
                    <p
                        className="text-center mt-3 fw-semibold"
                        style={{ color: "#d4af37" }}
                    >
                        {message}
                    </p>
                )}
            </form>
        </div>
    );
}