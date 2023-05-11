import { useState } from "react";
import Table from "../components/Table";
import { Context } from "../context/Context";
import { useContext } from "react";

const Movies = ({ movies }) => {
  const { addMovie, deleteMovie } = useContext(Context);

  const [data, setData] = useState({
    id: "",
    name: "",
    genre: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    if (data.id && data.name && data.genre) {
      addMovie({
        id: data.id,
        name: data.name,
        genre: data.genre,
      });

      setData({
        id: "",
        name: "",
        genre: "",
      });
    }
  };

  const handleDelete = (id) => {
    deleteMovie(id);
  };

  const handleUpdate = (data) => {
    setData({
      id: data.id,
      name: data.name,
      genre: data.genre,
    });
  };

  return (
    <>
      <h1>Movie</h1>

      <div style={{ display: "flex", gap: "10rem" }}>
        {movies && (
          <Table
            data={movies}
            path={"movieDetails"}
            handleDelete={handleDelete}
            handleUpdate={handleUpdate}
            enable
          />
        )}
        <div>
          <h2>ADD MOVIE</h2>
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

            <label>Movie Name : </label>
            <input
              value={data.name}
              onChange={(e) => {
                setData({ ...data, name: e.target.value });
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
    </>
  );
};

export default Movies;
