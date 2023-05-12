import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Context } from "../context/Context";

const SongDetails = () => {
  const { setSong } = useContext(Context);
  const { id } = useParams();
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      console.log("id", id);
      const data = await setSong(parseInt(id));
      setData(data);
    };

    fetchData();
  }, [id, setSong]);

  return (
    <>
      <h1>Movie Details</h1>

      {data && (
        <div>
          <h2> Id: {data[0].id}</h2>
          <h2> Name: {data[0].name}</h2>
          <h2> Artist: {data[0].artist}</h2>
          <h2> Genre: {data[0].genre}</h2>
        </div>
      )}
    </>
  );
};

export default SongDetails;
