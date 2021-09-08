import React from "react";
import "../../styles/seat.css";

export default function Seat({ variant, seatNo }) {
  return <div className={`seat ${variant}`}>{seatNo}</div>;
}
