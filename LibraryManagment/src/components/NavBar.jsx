const NavBar = () => {
  return (
    <nav>
      <ul
        style={{
          display: "flex",
          gap: "30px",
          listStyle: "none",
          backgroundColor: "lightGray",
          padding: "15px",
        }}
      >
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/books">Books</a>
        </li>
        <li>
          <a href="/users">Users</a>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
