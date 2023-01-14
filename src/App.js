import React from "react";
import "./styles.css";
import { useState } from "react";

const travelDB = {
  africa: [
    { place: "South Africa", rating: "5/5" },
    { place: "Egypt", rating: "3.5/5" },
    { place: "Sudan", rating: "1.5/5" }
  ],

  australia: [
    { place: "Melbourne", rating: "5/5" },
    { place: "Sydney", rating: "4.5/5" },
    { place: "Great barrier reef", rating: "5/5" }
  ],
  india: [
    { place: "Karnataka", rating: "5/5" },
    { place: "Gujarat", rating: "4/5" },
    { place: "Goa", rating: "5/5" }
  ]
};

export default function App() {
  const [selectedCountry, setCountry] = useState("india");
  function countryClickHandler(country) {
    setCountry(country);
  }
  return (
    <div className="App">
      <h1> 🚀 Travel </h1>
      <p style={{ fontSize: "smaller" }}>
        {" "}
        Checkout my Travel destinations. Select a country to get started{" "}
      </p>

      <div>
        {Object.keys(travelDB).map((country) => (
          <button
            onClick={() => countryClickHandler(country)}
            style={{
              cursor: "pointer",
              background: "#E5E7EB",
              borderRadius: "0.5rem",
              padding: "0.5rem  1rem",
              border: "1px solid black",
              margin: "1rem 0.3rem"
            }}
          >
            {country}
          </button>
        ))}
      </div>
      <hr />
      <div style={{ textAlign: "left" }}>
        <ul style={{ paddingInlineStart: "0" }}>
          {travelDB[selectedCountry].map((place) => (
            <li
              key={place.name}
              style={{
                listStyle: "none",
                padding: "1rem",
                border: "1px solid #D1D5DB",
                width: "70%",
                margin: "1rem 0rem",
                borderRadius: "0.5rem"
              }}
            >
              {" "}
              <div style={{ fontSize: "larger" }}> {place.name} </div>
              <div style={{ fontSize: "smaller" }}> {place.rating} </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
