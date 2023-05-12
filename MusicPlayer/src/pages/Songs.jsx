import Table from "../components/Table";
import { useContext } from "react";
import { Context } from "../context/Context";
import { useState } from "react";

const Songs = ({ songs }) => {
  const { addSong, deleteSong } = useContext(Context);

  const [data, setData] = useState({
    id: "",
    name: "",
    artist: "",
    genre: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    if (data.id && data.name && data.genre) {
      addSong({
        id: data.id,
        name: data.name,
        artist: data.artist,
        genre: data.genre,
      });

      setData({
        id: "",
        name: "",
        artist: "",
        genre: "",
      });
    }
  };

  const handleDelete = (id) => {
    deleteSong(id);
  };

  const handleUpdate = (data) => {
    setData({
      id: data.id,
      name: data.name,
      artist: data.artist,
      genre: data.genre,
    });
  };

  return (
    <div style={{ display: "flex", gap: "100px" }}>
      <div>
        <h1>Songs</h1>
        <Table
          data={songs}
          path={"songDetails"}
          handleDelete={handleDelete}
          handleUpdate={handleUpdate}
          enable
        />
      </div>
      <div>
        <div>
          <h2>ADD SONG</h2>
          <form onSubmit={handleSubmit}>
            <label>ID : </label>
            <input
              value={data.id}
              disabled={data.id ? true : false}
              onChange={(e) => {
                setData({ ...data, id: e.target.value });
              }}
              type="number"
            ></input>

            <label>Song Name : </label>
            <input
              value={data.name}
              onChange={(e) => {
                setData({ ...data, name: e.target.value });
              }}
              type="text"
            ></input>
            <label>Artist : </label>
            <input
              value={data.artist}
              onChange={(e) => {
                setData({ ...data, artist: e.target.value });
              }}
              type="text"
            ></input>

            <label>Genre : </label>
            <input
              value={data.genre}
              onChange={(e) => {
                setData({ ...data, genre: e.target.value });
              }}
              type="text"
            ></input>

            <button>SUBMIT</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Songs;
