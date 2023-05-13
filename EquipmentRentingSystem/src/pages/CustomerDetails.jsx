import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Context } from "../context/Context";

const CustomerDetails = () => {
  const { setCustomer } = useContext(Context);
  const { id } = useParams();
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      console.log("id", id);
      const data = await setCustomer(parseInt(id));
      setData(data);
    };

    fetchData();
  }, [id, setCustomer]);

  return (
    <>
      <h1>Customer Details</h1>

      {data && (
        <div>
          <h2> Id: {data[0].id}</h2>
          <h2> Name: {data[0].name}</h2>
          <h2> Email: {data[0].email}</h2>
          <h2> Equipments: {data[0].equipments.join(", ")}</h2>
        </div>
      )}
    </>
  );
};

export default CustomerDetails;
