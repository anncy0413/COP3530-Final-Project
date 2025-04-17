import React from "react";
import { Link } from "react-router-dom";

export default function MainPage() {
  return (
    <div style={{
      minHeight: "100vh",
      background: "linear-gradient(to bottom right, #e0f2fe, #ffffff)",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      padding: "2rem"
    }}>
      <h1 style={{ fontSize: "3rem", fontWeight: "bold", color: "#1e3a8a", marginBottom: "1rem", textAlign: "center" }}>
        Earthquake Explorer
      </h1>
      <p style={{ fontSize: "1.2rem", maxWidth: "600px", textAlign: "center", color: "#374151", marginBottom: "2rem" }}>
        Explore earthquake patterns across the United States using historical data.
        Filter by magnitude and visualize locations on a dynamic interactive map.
      </p>
      <Link to="/visualize">
        <button style={{
          padding: "12px 24px",
          backgroundColor: "#2563eb",
          color: "#fff",
          fontSize: "1rem",
          fontWeight: "600",
          border: "none",
          borderRadius: "10px",
          boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
          cursor: "pointer",
          transition: "background-color 0.3s"
        }}
        onMouseOver={(e) => e.target.style.backgroundColor = "#1d4ed8"}
        onMouseOut={(e) => e.target.style.backgroundColor = "#2563eb"}>
          Launch Visualization
        </button>
      </Link>
    </div>
  );
}

