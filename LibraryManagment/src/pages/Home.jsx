import Table from "../components/Table";

const Home = ({ books, users }) => {
  return (
    <div>
      <h1>Home</h1>
      <div>
        <h2>Books</h2>
        <Table data={books} path={"bookDetails"} tableName="Books" />
        <h2>Users</h2>
        <Table data={users} path={"userDetails"} tableName="Users" />
      </div>
    </div>
  );
};

export default Home;
