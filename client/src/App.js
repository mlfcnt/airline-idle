import { useState } from "react";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import { AirlineNameForm } from "./components/AirlineNameForm";
// import { BuyACTable } from "./components/BuyACTable";
// import { MainTemplate } from "./components/templates/MainTemplate";
import { Home } from "./components/Home";
import { MyMeca } from "./components/MyMeca";
import { AddAircraft } from "./components/AddAircraft";

function App() {
  // const [money, setMoney] = useState(1000);

  const airlineName = localStorage.getItem("airline-name");

  if (!airlineName) return <AirlineNameForm />;
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/ajouter-des-aeronefs">
          <AddAircraft />
        </Route>
        <Route path="/mecs">
          <MyMeca />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
