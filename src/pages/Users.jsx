import Table from "../components/Table";
import { Context } from "../context/context";
import { useContext, useState } from "react";

const Users = ({ users }) => {
  const { addUser, deleteUser, books } = useContext(Context);

  const [user, setUser] = useState({
    id: "",
    name: "",
    email: "",
    borrowedBooks: [],
  });

  const handleAdd = (e) => {
    e.preventDefault();

    if (user.id && user.name && user.email) {
      addUser(user);
      setUser({
        id: "",
        name: "",
        email: "",
        borrowedBooks: [],
      });
    }
  };

  const handleDelete = (id) => {
    deleteUser(id);
  };

  const handleUpdate = (data) => {
    setUser(data);
  };

  const handleCheckboxChange = (bookName, isChecked) => {
    if (isChecked) {
      setUser((prevUser) => ({
        ...prevUser,
        borrowedBooks: [...prevUser.borrowedBooks, bookName],
      }));
    } else {
      setUser((prevUser) => ({
        ...prevUser,
        borrowedBooks: prevUser.borrowedBooks.filter(
          (book) => book !== bookName
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

              {books.length > 0 && (
                <div style={{ display: "flex", marginTop: "10px" }}>
                  <label>Select Books : </label>
                  {books.map((book) => (
                    <div style={{ marginRight: "20px" }}>
                      <input
                        value={book.name}
                        type="checkbox"
                        checked={user.borrowedBooks.includes(book.name)}
                        onChange={(e) =>
                          handleCheckboxChange(book.name, e.target.checked)
                        }
                      />
                      <label>{book.name}</label>
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
