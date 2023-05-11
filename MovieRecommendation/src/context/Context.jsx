import React, { createContext, useState } from "react";

// Create the context
export const Context = createContext();

export const ContextProvider = ({ children }) => {
  const initializeMovies = [
    {
      id: 1,
      name: "Movie 1",
      genre: "Genre 1",
    },
    {
      id: 2,
      name: "Movie 2",
      genre: "Genre 2",
    },
    {
      id: 3,
      name: "Movie 3",
      genre: "Genre 3",
    },
    {
      id: 4,
      name: "Movie 4",
      genre: "Genre 4",
    },
  ];

  const initialUsers = [
    {
      id: 1,
      name: "User 1",
      email: "user1@mail.com",
      favouriteMovies: ["Movie 1", "Movie 2"],
    },
    {
      id: 2,
      name: "User 2",
      email: "user2@mail.com",
      favouriteMovies: ["Movie 3", "Movie 4"],
    },
  ];

  const [movies, setMovies] = useState(initializeMovies);
  const [users, setUsers] = useState(initialUsers);

  // add a movie
  const addMovie = (movie) => {
    const existingMovie = movies.findIndex((m) => m.id === movie.id);

    if (existingMovie !== -1) {
      const updatedMovies = [...movies];
      updatedMovies[existingMovie] = movie;
      setMovies(updatedMovies);
    } else {
      setMovies([...movies, movie]);
    }
  };

  // delete a movie
  const deleteMovie = (id) => {
    setMovies(movies.filter((movie) => movie.id !== id));
  };

  // select a movie
  const setMovie = (id) => {
    return movies.filter((movie) => movie.id === id);
  };

  // add a user
  const addUser = (user) => {
    const existingUser = users.findIndex((u) => u.id === user.id);

    if (existingUser !== -1) {
      const updatedUsers = [...users];
      updatedUsers[existingUser] = user;
      setUsers(updatedUsers);
    } else {
      setUsers([...users, user]);
    }
  };

  // delete a user
  const deleteUser = (id) => {
    setUsers(users.filter((user) => user.id !== id));
  };

  // select a user
  const setUser = (id) => {
    return users.filter((user) => user.id === id);
  };

  const contextValues = {
    movies,
    users,
    addMovie,
    deleteMovie,
    setMovie,
    addUser,
    deleteUser,
    setUser,
  };
  return <Context.Provider value={contextValues}>{children}</Context.Provider>;
};
