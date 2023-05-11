import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import Home from "./pages/Home";
import Books from "./pages/Books";
import Users from "./pages/Users";
import UserDetails from "./pages/UserDetails";
import BookDetails from "./pages/BookDetails";
import { useContext } from "react";
import { Context } from "./context/context";

function App() {
  const { books, users } = useContext(Context);

  return (
    <div className="App">
      <NavBar />
      <div style={{ margin: "30px" }}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home {...{ books, users }} />} />
          </Routes>
          <Routes>
            <Route path="/books" element={<Books {...{ books }} />} />
          </Routes>
          <Routes>
            <Route path="/Users" element={<Users {...{ users }} />} />
          </Routes>
          <Routes>
            <Route path="/userDetails/:id" element={<UserDetails />} />
          </Routes>
          <Routes>
            <Route path="/bookDetails/:id" element={<BookDetails />} />
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
