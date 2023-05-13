import { useContext } from "react";
import Table from "../components/Table";
import { Context } from "../context/Context";

const Home = ({ equipments, customers }) => {
  return (
    <>
      <h1>Home</h1>
      <div>
        <h2>Equipments</h2>
        {equipments && <Table data={equipments} path={"equipmentDetails"} />}
      </div>
      <div style={{ marginTop: "100px" }}>
        <h2>Customers</h2>
        <Table data={customers} path={"customerDetails"} />
      </div>
    </>
  );
};

export default Home;
