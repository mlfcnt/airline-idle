import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { MyMeca } from "../MyMeca";

export const MainTemplate = ({ title, children }) => {
  return (
    <>
      <div className="sidebar-container">
        <div className="sidebar-logo">Incremantal Airlines</div>
        <ul className="sidebar-navigation">
          <li className="header"> Prestations</li>
          <li>Prestations disponible</li>
          <li className="header">Flotte</li>
          <li>Ma flotte</li>
          <Link to="/ajouter-des-aeronefs">
            <li className="h-100 d-inline-block">Ajouter des aéronefs</li>
          </Link>
          <li className="header">Maintenance</li>
          <Link to="/mecs">
            <li> Mes mécaniciens</li>
          </Link>
          <li>Engager du personnel</li>
        </ul>
      </div>

      <div className="content-container">
        <div className="container-fluid">
          <div className="jumbotron">
            <h1>{title}</h1>
            {children}
          </div>
        </div>
      </div>
    </>
  );
};
