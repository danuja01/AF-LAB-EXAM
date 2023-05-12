import Table from "../components/Table";

const Home = ({ songs, playlists }) => {
  return (
    <>
      <h1>Home</h1>
      <div>
        <h2>Songs</h2>
        {songs && <Table data={songs} path="songDetails" />}{" "}
      </div>
      <div style={{ marginTop: "100px" }}>
        <h2>playlists</h2>
        {playlists && <Table data={playlists} path="songDetails" />}{" "}
      </div>
    </>
  );
};

export default Home;
