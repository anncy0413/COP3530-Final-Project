import React, { useEffect, useState } from "react";
import { MapContainer, TileLayer, CircleMarker, Tooltip } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import ChartSection from "./components/ChartSection";


export default function Visualize() {
  const [data, setData] = useState([]);
  const [minMag, setMinMag] = useState(4.0);
  const [maxMag, setMaxMag] = useState(10.0);

  useEffect(() => {
    fetch("/earthquakes.json")
      .then(res => res.json())
      .then(json => setData(json));
  }, []);

  const filtered = data.filter(e => e.magnitude >= minMag && e.magnitude <= maxMag);

  return (
    <div style={{ padding: "2rem", backgroundColor: "#f9fafb", minHeight: "100vh" }}>
      <h2 style={{ textAlign: "center", fontSize: "2rem", fontWeight: "bold", color: "#1f2937", marginBottom: "1.5rem" }}>
        US Earthquake Visualizer
      </h2>

      <div style={{
        display: "flex",
        justifyContent: "center",
        gap: "2rem",
        marginBottom: "1.5rem",
        backgroundColor: "#ffffff",
        padding: "1rem 2rem",
        borderRadius: "1rem",
        boxShadow: "0 2px 10px rgba(0, 0, 0, 0.05)",
        flexWrap: "wrap"
      }}>
        <label style={{ display: "flex", flexDirection: "column", fontSize: "0.9rem", color: "#374151" }}>
          Min Magnitude
          <input type="number" value={minMag} step="0.1"
            onChange={e => setMinMag(parseFloat(e.target.value))}
            style={{
              marginTop: "0.5rem",
              padding: "0.5rem",
              borderRadius: "0.5rem",
              border: "1px solid #d1d5db",
              width: "120px"
            }} />
        </label>
        <label style={{ display: "flex", flexDirection: "column", fontSize: "0.9rem", color: "#374151" }}>
          Max Magnitude
          <input type="number" value={maxMag} step="0.1"
            onChange={e => setMaxMag(parseFloat(e.target.value))}
            style={{
              marginTop: "0.5rem",
              padding: "0.5rem",
              borderRadius: "0.5rem",
              border: "1px solid #d1d5db",
              width: "120px"
            }} />
        </label>
      </div>

      <div style={{
        borderRadius: "1rem",
        overflow: "hidden",
        boxShadow: "0 4px 15px rgba(0,0,0,0.1)",
        maxWidth: "1200px",
        margin: "0 auto"
      }}>
        <MapContainer center={[37.8, -96]} zoom={4} scrollWheelZoom={true} style={{ height: "600px", width: "100%" }}>
          <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
          {filtered.map((q, i) => (
            <CircleMarker key={i}
              center={[q.latitude, q.longitude]}
              radius={q.magnitude * 2}
              color="#ef4444"
              fillOpacity={0.7}>
              <Tooltip>
                <span style={{ fontSize: "0.8rem" }}>
                  Magnitude: {q.magnitude}<br />({q.latitude.toFixed(2)}, {q.longitude.toFixed(2)})
                </span>
              </Tooltip>
            </CircleMarker>
          ))}
        </MapContainer>
      </div>
          <ChartSection />
    </div>
    
  );
}
