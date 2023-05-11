import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Movie from "./pages/Movie";
import User from "./pages/User";
import MovieDetails from "./pages/MovieDetails";
import UserDetails from "./pages/UserDetails";
import NavBar from "./components/NavBar";

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <Routes>
        <Route path="/movie" element={<Movie />} />
      </Routes>
      <Routes>
        <Route path="/user" element={<User />} />
      </Routes>
      <Routes>
        <Route path="/movieDetails/:id" element={<MovieDetails />} />
      </Routes>
      <Routes>
        <Route path="/userDetails/:id" element={<UserDetails />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
