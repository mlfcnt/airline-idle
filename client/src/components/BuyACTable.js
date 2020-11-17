import React from "react";
import { Button, Table } from "react-bootstrap";

export const BuyACTable = () => {
  const acList = [
    {
      price: 1000,
      manufacturer: "ATR",
      model: "WTKV",
      version: "700",
      maxPassengers: 1,
      maintenance: "Faible",
    },
    {
      price: 3000,
      manufacturer: "OVA",
      model: "0900",
      version: "E003",
      maxPassengers: 5,
      maintenance: "Faible",
    },
    {
      price: 10000,
      manufacturer: "AIRBUS",
      model: "A318",
      version: "600",
      maxPassengers: 8,
      maintenance: "Faible",
    },
    {
      price: 50000,
      manufacturer: "NASA",
      model: "Discovery",
      version: "I",
      maxPassengers: 12,
      maintenance: "Moyenne",
    },
  ];

  const acPropertiesMapper = {
    price: "Prix",
    manufacturer: "Constructeur",
    model: "Modèle",
    version: "Version",
    maxPassengers: "Nombre max de passagers",
    maintenance: "Maintenance",
  };

  const columns = () => {
    return Object.keys(acList[0]).map((k, idx) => (
      <th key={idx}>{acPropertiesMapper[k]}</th>
    ));
  };

  return (
    <Table striped bordered hover className="my-4" variant="dark">
      <thead>
        <tr>
          {columns()}
          <th>Acheter</th>
        </tr>
      </thead>
      <tbody>
        {acList.map(
          ({
            price,
            manufacturer,
            model,
            version,
            maxPassengers,
            maintenance,
          }) => (
            <tr>
              <td>{price}</td>
              <td>{manufacturer}</td>
              <td>{model}</td>
              <td>{version}</td>
              <td>{maxPassengers}</td>
              <td>{maintenance}</td>
              <td>
                <Button variant="success">Acheter</Button>
              </td>
            </tr>
          )
        )}
      </tbody>
    </Table>
  );
};
