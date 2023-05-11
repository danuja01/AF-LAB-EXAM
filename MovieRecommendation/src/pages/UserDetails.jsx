import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Context } from "../context/Context";

const UserDetails = () => {
  const { setUser } = useContext(Context);
  const { id } = useParams();
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      console.log("id", id);
      const data = await setUser(parseInt(id));
      setData(data);
    };

    fetchData();
  }, [id, setUser]);

  return (
    <>
      <h1>Movie Details</h1>

      {data && (
        <div>
          <h2>Book Id: {data[0].id}</h2>
          <h2>Book Name: {data[0].name}</h2>
          <h2>Author: {data[0].email}</h2>
        </div>
      )}
    </>
  );
};

export default UserDetails;
