import React from "react";
import ChartSection from "../components/ChartSection";

export default function AnalysisPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-blue-50 py-10 px-4 flex flex-col items-center">
      <h1 className="text-3xl font-bold text-blue-900 mb-6">Earthquake Data Analysis</h1>
      <p className="max-w-2xl text-center text-gray-600 mb-8">
        This page provides real-time earthquake chart generation based on selected locations.
        The data is analyzed with Python and updated dynamically.
      </p>
      <ChartSection />
    </div>
  );
}
