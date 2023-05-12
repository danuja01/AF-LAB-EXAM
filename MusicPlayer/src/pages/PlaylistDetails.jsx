import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Context } from "../context/Context";

const PlaylistDetails = () => {
  const { setPlaylist } = useContext(Context);
  const { id } = useParams();
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      console.log("id", id);
      const data = await setPlaylist(parseInt(id));
      setData(data);
    };

    fetchData();
  }, [id, setPlaylist]);

  return (
    <>
      <h1>Movie Details</h1>

      {data && (
        <div>
          <h2> Id: {data[0].id}</h2>
          <h2> Name: {data[0].name}</h2>
          <h2> Songs: {data[0].songs.join(", ")}</h2>
        </div>
      )}
    </>
  );
};

export default PlaylistDetails;
