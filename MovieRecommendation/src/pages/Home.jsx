import { useContext } from "react";
import Table from "../components/Table";
import { Context } from "../context/Context";

const Home = ({ movies, users }) => {
  return (
    <>
      <h1>Home</h1>
      <div>
        <h2>Movies</h2>
        {movies && <Table data={movies} path={"movieDetails"} />}
      </div>
      <div style={{ marginTop: "100px" }}>
        <h2>Users</h2>
        <Table data={users} path={"userDetails"} />
      </div>
    </>
  );
};

export default Home;
