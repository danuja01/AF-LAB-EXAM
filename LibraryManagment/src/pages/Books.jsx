import { useContext, useState } from "react";
import Table from "../components/Table";
import { Context } from "../context/context";

const Books = ({ books }) => {
  const { addBook, deleteBook } = useContext(Context);

  const [id, setId] = useState("");
  const [book, setBook] = useState("");
  const [author, setAuthor] = useState("");

  const handleDelete = (id) => {
    deleteBook(id);
  };

  const handleAdd = (e) => {
    e.preventDefault();
    addBook({
      id: id,
      name: book,
      author: author,
    });

    setId("");
    setBook("");
    setAuthor("");
  };

  const handleUpdate = (data) => {
    setId(data.id);
    setBook(data.name);
    setAuthor(data.author);
  };

  return (
    <div>
      <h1>Books</h1>
      <div style={{ display: "flex", gap: "100px" }}>
        {books.length > 0 && (
          <Table
            data={books}
            path={"bookDetails"}
            tableName="Books"
            handleDelete={handleDelete}
            handleUpdate={handleUpdate}
            enable={true}
          />
        )}
        <div>
          <h2>ADD BOOK</h2>
          <form>
            <label>ID : </label>
            <input
              value={id}
              onChange={(e) => {
                setId(e.target.value);
              }}
              type="number"
              placeholder="ID"
            ></input>

            <label>Book : </label>
            <input
              value={book}
              onChange={(e) => {
                setBook(e.target.value);
              }}
              type="text"
              placeholder="Book Name"
            ></input>

            <label>Author : </label>
            <input
              value={author}
              onChange={(e) => {
                setAuthor(e.target.value);
              }}
              type="text"
              placeholder="Book Name"
            ></input>

            <button onClick={handleAdd}>SUBMIT</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Books;
