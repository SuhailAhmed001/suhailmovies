import React from "react";

const Spinner = () => {
  const spinnerStyle = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: "2rem",
  };

  const circleStyle = {
    width: "40px",
    height: "40px",
    border: "5px solid #f3f3f3",
    borderTop: "5px solid #00bcd4",
    borderRadius: "50%",
    animation: "spin 0.8s linear infinite",
  };

  return (
    <div style={spinnerStyle}>
      <div style={circleStyle} />
      <style>
        {`
          @keyframes spin {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
          }
        `}
      </style>
    </div>
  );
};

export default Spinner;
