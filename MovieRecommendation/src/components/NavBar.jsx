const NavBar = () => {
  return (
    <nav style={{ padding: "10px", backgroundColor: "lightgray" }}>
      <ul style={{ display: "flex", gap: "30px", listStyle: "none" }}>
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/movie">Movie</a>
        </li>
        <li>
          <a href="/user">User</a>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
