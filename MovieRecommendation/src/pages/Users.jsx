import Table from "../components/Table";
import { useContext, useState } from "react";
import { Context } from "../context/Context";

const Users = ({ users, movies }) => {
  const { addUser, deleteUser } = useContext(Context);

  const [user, setUser] = useState({
    id: "",
    name: "",
    email: "",
    favouriteMovies: [],
  });

  const handleAdd = (e) => {
    e.preventDefault();

    if (user.id && user.name && user.email) {
      addUser(user);
      setUser({
        id: "",
        name: "",
        email: "",
        favouriteMovies: [],
      });
    }
  };

  const handleDelete = (id) => {
    deleteUser(id);
  };

  const handleUpdate = (data) => {
    setUser(data);
  };

  const handleCheckboxChange = (movieName, isChecked) => {
    if (isChecked) {
      setUser((prevUser) => ({
        ...prevUser,
        favouriteMovies: [...prevUser.favouriteMovies, movieName],
      }));
    } else {
      setUser((prevUser) => ({
        ...prevUser,
        favouriteMovies: prevUser.favouriteMovies.filter(
          (name) => name !== movieName
        ),
      }));
    }
  };

  return (
    <div>
      <h1>Users</h1>
      <div style={{ display: "flex", gap: "100px" }}>
        {users.length > 0 && (
          <Table
            data={users}
            path={"userDetails"}
            tableName="Users"
            enable
            handleDelete={handleDelete}
            handleUpdate={handleUpdate}
          />
        )}
        <div>
          <div>
            <h2>ADD USER</h2>
            <form onSubmit={handleAdd}>
              <label>ID : </label>
              <input
                value={user.id}
                onChange={(e) => setUser({ ...user, id: e.target.value })}
                type="number"
              />

              <label>Name : </label>
              <input
                value={user.name}
                onChange={(e) => setUser({ ...user, name: e.target.value })}
                type="text"
              />

              <label>Email : </label>
              <input
                value={user.email}
                onChange={(e) => setUser({ ...user, email: e.target.value })}
                type="email"
              />

              {movies.length > 0 && (
                <div style={{ display: "flex", marginTop: "10px" }}>
                  <label>Select Movies : </label>
                  {movies.map((movie) => (
                    <div style={{ marginRight: "20px" }}>
                      <input
                        value={movie.name}
                        type="checkbox"
                        checked={user.favouriteMovies.includes(movie.name)}
                        onChange={(e) =>
                          handleCheckboxChange(movie.name, e.target.checked)
                        }
                      />
                      <label>{movie.name}</label>
                    </div>
                  ))}
                </div>
              )}

              <button>SUBMIT</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Users;
