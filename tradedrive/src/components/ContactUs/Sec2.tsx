import React from "react";

export default function Sec2() {
  return (
    <div>
      <div
        style={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" }, // Stack on mobile, row on desktop
          justifyContent: "space-between",
          width: "100%",
        }}
      >
        {/* Column 1 */}
        <div
          style={{
            flex: 1,
            padding: "10px",
            backgroundColor: "#f0f0f0", // Placeholder background
            margin: "5px",
            textAlign: "center",
          }}
        >
          Column 1
        </div>
        {/* Column 2 */}
        <div
          style={{
            flex: 1,
            padding: "10px",
            backgroundColor: "#f0f0f0", // Placeholder background
            margin: "5px",
            textAlign: "center",
          }}
        >
          Column 2
        </div>
      </div>
    </div>
  );
}