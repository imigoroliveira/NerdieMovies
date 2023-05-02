import React from "react";

function WachtedButton({ assistido, onClick }) {
  return (
    <button className="btn linkBtn btn-secondary" onClick={onClick}>
      {assistido ? "Assistir novamente" : "Assistir"}
    </button>
  );
}

export default WachtedButton;