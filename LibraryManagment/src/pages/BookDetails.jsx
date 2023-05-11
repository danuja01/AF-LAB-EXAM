import { useContext, useEffect, useState } from "react";
import { Context } from "../context/context";
import { useParams } from "react-router-dom";

const BookDetails = () => {
  const { setBook } = useContext(Context);
  const { id } = useParams();
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      console.log("id", id);
      const bookData = await setBook(parseInt(id));
      setData(bookData);
    };

    fetchData();
  }, [id, setBook]);

  return (
    <>
      <h1>Book Details</h1>

      {data && (
        <div>
          <h2>Book Id: {data[0].id}</h2>
          <h2>Book Name: {data[0].name}</h2>
          <h2>Author: {data[0].author}</h2>
        </div>
      )}
    </>
  );
};

export default BookDetails;
