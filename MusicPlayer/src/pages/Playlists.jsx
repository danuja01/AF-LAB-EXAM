import Table from "../components/Table";
import { useContext } from "react";
import { Context } from "../context/Context";
import { useState } from "react";

const Playlist = ({ playlists, songs }) => {
  const { addPlaylist, deletePlaylist } = useContext(Context);

  const [data, setData] = useState({
    id: "",
    name: "",
    songs: [],
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    if (data.id && data.name && data.songs.length > 0) {
      addPlaylist({
        id: data.id,
        name: data.name,
        songs: data.songs,
      });

      setData({
        id: "",
        name: "",
        songs: [],
      });
    }
  };

  const handleDelete = (id) => {
    deletePlaylist(id);
  };

  const handleUpdate = (data) => {
    setData({
      id: data.id,
      name: data.name,
      songs: data.songs,
    });
  };

  const handleCheckboxChange = (songName, isChecked) => {
    if (isChecked) {
      setData((prevData) => ({
        ...prevData,
        songs: [...prevData.songs, songName],
      }));
    } else {
      setData((prevData) => ({
        ...prevData,
        songs: prevData.songs.filter((name) => name !== songName),
      }));
    }
  };

  return (
    <div style={{ display: "flex", gap: "100px" }}>
      <div>
        <h1>Playlists</h1>
        <Table
          data={playlists}
          path={"playlistDetails"}
          handleDelete={handleDelete}
          handleUpdate={handleUpdate}
          enable
        />
      </div>
      <div>
        <div>
          <h2>ADD Playlist</h2>
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

            <label>Name : </label>
            <input
              value={data.name}
              onChange={(e) => {
                setData({ ...data, name: e.target.value });
              }}
              type="text"
            ></input>
            {songs.length > 0 && (
              <div style={{ display: "flex", marginTop: "10px" }}>
                <label>Select Songs : </label>
                {songs.map((song) => (
                  <div style={{ marginRight: "20px" }}>
                    <input
                      value={song.name}
                      type="checkbox"
                      checked={data.songs.includes(song.name)}
                      onChange={(e) =>
                        handleCheckboxChange(song.name, e.target.checked)
                      }
                    />
                    <label>{song.name}</label>
                  </div>
                ))}
              </div>
            )}
            <button>SUBMIT</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Playlist;
