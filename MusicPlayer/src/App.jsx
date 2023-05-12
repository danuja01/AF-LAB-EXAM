import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Songs from "./pages/Songs";
import Playlist from "./pages/Playlists";
import SongDetails from "./pages/SongDetails";
import PlaylistDetails from "./pages/PlaylistDetails";
import NavBar from "./components/NavBar";
import { useContext } from "react";
import { Context } from "./context/Context";

function App() {
  const { songs, playlists } = useContext(Context);

  return (
    <BrowserRouter>
      <NavBar />
      <div style={{ margin: "30px" }}>
        <Routes>
          <Route
            path="/"
            element={<Home songs={songs} playlists={playlists} />}
          />
        </Routes>
        <Routes>
          <Route path="/songs" songs={songs} element={<Songs />} />
        </Routes>
        <Routes>
          <Route
            path="/playlists"
            playlists={playlists}
            songs={songs}
            element={<Playlist />}
          />
        </Routes>
        <Routes>
          <Route path="/songDetails/:id" element={<SongDetails />} />
        </Routes>
        <Routes>
          <Route path="/playlistDetails/:id" element={<PlaylistDetails />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
