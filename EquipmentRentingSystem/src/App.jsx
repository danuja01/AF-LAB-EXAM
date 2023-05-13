import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import { useContext } from "react";

import Home from "./pages/Home";
import { Context } from "./context/Context";
import Equipments from "./pages/Equipment";
import Customers from "./pages/Customer";
import EquipmentDetails from "./pages/EquipmentDetails";
import CustomerDetails from "./pages/CustomerDetails";

function App() {
  const { equipments, customers } = useContext(Context);

  return (
    <div className="App">
      <NavBar />
      <div style={{ margin: "30px" }}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home {...{ equipments, customers }} />} />
          </Routes>
          <Routes>
            <Route
              path="/equipments"
              element={<Equipments {...{ equipments }} />}
            />
          </Routes>
          <Routes>
            <Route
              path="/customers"
              element={<Customers {...{ equipments, customers }} />}
            />
          </Routes>
          <Routes>
            <Route
              path="/equipmentDetails/:id"
              element={<EquipmentDetails />}
            />
          </Routes>
          <Routes>
            <Route path="/customerDetails/:id" element={<CustomerDetails />} />
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
