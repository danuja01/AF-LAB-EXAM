import { useContext, useEffect, useState } from "react";
import { Context } from "../context/context";
import { useParams } from "react-router-dom";

const UserDetails = () => {
  const { setUser } = useContext(Context);
  const { id } = useParams();
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const bookData = await setUser(parseInt(id));
      setData(bookData);
      console.log(data);
    };

    fetchData();
  }, [id, setUser]);

  return (
    <>
      <h1>Book Details</h1>

      {data && (
        <div>
          <h2>User Id: {data[0].id}</h2>
          <h2>User Name: {data[0].name}</h2>
          <h2>Email: {data[0].email}</h2>
          <h2>Books: {data[0].borrowedBooks.join(", ")}</h2>
        </div>
      )}
    </>
  );
};

export default UserDetails;
