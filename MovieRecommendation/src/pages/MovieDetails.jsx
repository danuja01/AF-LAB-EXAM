import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Context } from "../context/Context";

const MovieDetails = () => {
  const { setMovie } = useContext(Context);
  const { id } = useParams();
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      console.log("id", id);
      const data = await setMovie(parseInt(id));
      setData(data);
    };

    fetchData();
  }, [id, setMovie]);

  return (
    <>
      <h1>Movie Details</h1>

      {data && (
        <div>
          <h2>Book Id: {data[0].id}</h2>
          <h2>Book Name: {data[0].name}</h2>
          <h2>Author: {data[0].genre}</h2>
        </div>
      )}
    </>
  );
};

export default MovieDetails;
