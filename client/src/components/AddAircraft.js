import React from "react";
import { MainTemplate } from "./templates/MainTemplate";
import { BuyACTable } from "./BuyACTable";

export const AddAircraft = () => {
  return (
    <MainTemplate title="Ajouter des aéronefs">
      <BuyACTable />
    </MainTemplate>
  );
};
