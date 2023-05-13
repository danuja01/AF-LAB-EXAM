import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Context } from "../context/Context";

const EquipmentDetails = () => {
  const { setEquipment } = useContext(Context);
  const { id } = useParams();
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      console.log("id", id);
      const data = await setEquipment(parseInt(id));
      setData(data);
    };

    fetchData();
  }, [id, setEquipment]);

  return (
    <>
      <h1>Equipment Details</h1>

      {data && (
        <div>
          <h2>Equipment Id: {data[0].id}</h2>
          <h2>Equipment Name: {data[0].name}</h2>
        </div>
      )}
    </>
  );
};

export default EquipmentDetails;
