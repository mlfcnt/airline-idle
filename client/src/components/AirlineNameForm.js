import { useState } from "react";

export const AirlineNameForm = () => {
  const [error, setError] = useState("");
  const [airlineName, setAirlineName] = useState("");

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        if (!airlineName.length) {
          return setError("Le nom ne doit pas être vide");
        }
        window.location.reload();
        return localStorage.setItem("airline-name", airlineName);
      }}
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        gap: "1.3rem",
        marginTop: "2rem",
      }}
    >
      <label htmlFor="airline-name">Nom de la compagnie aérienne</label>
      <div style={{ width: "30%" }}>
        <p style={{ color: "red" }}>{error ? error : ""}</p>
        <input
          id="airline-name"
          name="airline-name"
          type="text"
          onChange={({ target: { value } }) => setAirlineName(value)}
        />
        <button type="submit">Ok</button>
      </div>
    </form>
  );
};
