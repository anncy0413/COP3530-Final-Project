// App.jsx
import React, { useEffect, useState } from "react";
import { MapContainer, TileLayer, CircleMarker, Tooltip } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import earthquakes from "./data/earthquakes.json";

function App() {
  const [filtered, setFiltered] = useState([]);
  const [minMag, setMinMag] = useState(4.0);
  const [maxMag, setMaxMag] = useState(10.0);

  useEffect(() => {
    const result = earthquakes.filter(
      (e) => e.magnitude >= minMag && e.magnitude <= maxMag
    );
    setFiltered(result);
  }, [minMag, maxMag]);

  return (
    <div className="min-h-screen bg-gradient-to-tr from-blue-50 via-white to-blue-100 py-10 px-4 flex flex-col items-center transition-all duration-300">
      <h1 className="text-4xl font-extrabold text-blue-800 mb-4 drop-shadow-sm text-center animate-fade-in">US Earthquake Explorer</h1>

      <p className={`text-sm text-center mb-6 px-4 py-2 rounded-full bg-white/80 shadow-md backdrop-blur-sm transition-opacity duration-300 ${filtered.length > 0 ? "text-gray-700" : "text-red-500"}`}>
        {filtered.length > 0 ? (
          <>Showing <span className="font-semibold text-blue-700">{filtered.length}</span> earthquakes{minMag > 0 && ` with magnitude ≥ ${minMag}`}.</>
        ) : (
          <>No earthquakes match the current filter.</>
        )}
      </p>

      <div className="w-full max-w-3xl bg-white shadow-xl rounded-2xl p-6 mb-8 flex flex-col md:flex-row md:items-end gap-6 justify-center">
        <div className="flex flex-col text-sm text-gray-700">
          <label className="mb-1 font-medium">Min Magnitude</label>
          <input
            type="number"
            value={minMag}
            step="0.1"
            onChange={(e) => setMinMag(parseFloat(e.target.value))}
            className="p-2 rounded-md border border-gray-300 shadow-inner focus:ring-2 focus:ring-blue-300 w-36"
          />
        </div>
        <div className="flex flex-col text-sm text-gray-700">
          <label className="mb-1 font-medium">Max Magnitude</label>
          <input
            type="number"
            value={maxMag}
            step="0.1"
            onChange={(e) => setMaxMag(parseFloat(e.target.value))}
            className="p-2 rounded-md border border-gray-300 shadow-inner focus:ring-2 focus:ring-blue-300 w-36"
          />
        </div>
        <button
          onClick={() => {
            setMinMag(4.0);
            setMaxMag(10.0);
          }}
          className="h-10 px-5 mt-2 md:mt-0 bg-gradient-to-r from-blue-500 to-blue-700 text-white rounded-full shadow-lg hover:from-blue-600 hover:to-blue-800 transition font-semibold"
        >
          Reset Filter
        </button>
      </div>

      <div className="w-full max-w-6xl rounded-3xl overflow-hidden border border-gray-200 shadow-2xl">
        <MapContainer
          center={[37.8, -96]}
          zoom={4}
          scrollWheelZoom={true}
          style={{ height: "600px", width: "100%" }}
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          {filtered.map((quake, idx) => (
            <CircleMarker
              key={idx}
              center={[quake.latitude, quake.longitude]}
              radius={quake.magnitude * 2}
              color="#ef4444"
              fillOpacity={0.7}
            >
              <Tooltip direction="top" offset={[0, -10]} opacity={1} permanent={false}>
                <span className="text-sm font-medium">
                  Mag {quake.magnitude}<br />({quake.latitude.toFixed(2)}, {quake.longitude.toFixed(2)})
                </span>
              </Tooltip>
            </CircleMarker>
          ))}
        </MapContainer>
      </div>
    </div>
  );
}

export default App;
