
import React, { useState } from "react";

const chartMap = {
  "Caledonia": "caledonia",
  "California": "california",
  "Carolina": "carolina",
  "East Pacific": "east_pacific",
  "Georgia And": "georgia_and",
  "Georgia Island": "georgia_island",
  "Hampshire": "hampshire",
  "Indian-Antarctic Ridge": "indian-antarctic_ridge",
  "Indian Ocean": "indian_ocean",
  "Indian Ridge": "indian_ridge",
  "Island": "island",
  "Island Region": "island_region",
  "Islands": "islands",
  "Islands Region": "islands_region",
  "Jersey": "jersey",
  "Mariana Islands": "mariana_islands",
  "Mid-Atlantic Ridge": "mid-atlantic_ridge",
  "New Guinea": "new_guinea",
  "Of Africa": "of_africa",
  "Of Ascension": "of_ascension",
  "Of Australia": "of_australia",
  "Of Panama": "of_panama",
  "Of Svalbard": "of_svalbard",
  "Of The": "of_the",
  "Region": "region",
  "Republic": "republic",
  "Rica": "rica",
  "Rico": "rico",
  "Ridge": "ridge",
  "Salvador": "salvador",
  "Sandwich Islands": "sandwich_islands",
  "Sea": "sea",
  "St. Vincent": "st._vincent",
  "The Coast": "the_coast",
  "Timor": "timor",
  "Virgin Islands": "virgin_islands",
  "Virginia": "virginia",
  "Xizang": "xizang",
  "York": "york",
  "Zealand": "zealand"
};

const chartList = Object.keys(chartMap);

export default function ChartSection() {
  const [selected, setSelected] = useState(chartList[0]);

  return (
    <div className="w-full max-w-4xl mx-auto mt-12 bg-white rounded-xl shadow p-6">
      <h2 className="text-2xl font-bold text-blue-800 mb-4">Earthquake Chart Viewer</h2>

      <div className="flex flex-col md:flex-row items-center gap-4 mb-4">
        <label htmlFor="chartSelect" className="font-medium text-gray-700">
          Choose Location:
        </label>
        <select
          id="chartSelect"
          value={selected}
          onChange={(e) => setSelected(e.target.value)}
          className="p-2 border border-gray-300 rounded-md shadow-sm w-full md:w-1/2"
        >
          {chartList.map((name) => (
            <option key={name} value={name}>{name}</option>
          ))}
        </select>
      </div>

      <div className="text-center text-gray-600 mb-2">
        Displaying chart for <strong>{selected}</strong>
      </div>

      <img
        src={`/charts/${chartMap[selected]}.png`}
        alt={`${selected} chart`}
        className="w-full max-w-3xl rounded shadow-md mx-auto"
        onError={(e) => {
          e.target.onerror = null;
          e.target.src = "/charts/placeholder.png";
        }}
      />
    </div>
  );
}
