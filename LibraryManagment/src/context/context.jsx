import React, { createContext, useState } from "react";

// Create the context
export const Context = createContext();

// Create a provider component
export const ContextProvider = ({ children }) => {
  // Initial data for books and users
  const initialBooks = [
    {
      id: 1,
      name: "Book 1",
      author: "Author 1",
    },
    {
      id: 2,
      name: "Book 2",
      author: "Author 2",
    },
    {
      id: 3,
      name: "Book 3",
      author: "Author 3",
    },
    {
      id: 4,
      name: "Book 4",
      author: "Author 4",
    },
  ];

  const initialUsers = [
    {
      id: 1,
      name: "User 1",
      email: "user1@mail.com",
      borrowedBooks: ["Book 1", "Book 2"],
    },
    {
      id: 2,
      name: "User 2",
      email: "user2@mail.com",
      borrowedBooks: ["Book 3, Book 4"],
    },
  ];

  // State for books and users
  const [books, setBooks] = useState(initialBooks);
  const [users, setUsers] = useState(initialUsers);

  // Add a book
  const addBook = (book) => {
    const existingBookIndex = books.findIndex((b) => b.id === book.id);

    if (existingBookIndex !== -1) {
      const updatedBooks = [...books];
      updatedBooks[existingBookIndex] = book;
      setBooks(updatedBooks);
    } else {
      setBooks([...books, book]);
    }
  };

  // Delete a book
  const deleteBook = (bookId) => {
    setBooks(books.filter((book) => book.id !== bookId));
  };

  //select book
  const setBook = (bookId) => {
    return books.filter((book) => book.id === bookId);
  };

  // Add a user
  const addUser = (user) => {
    const existingUserIndex = users.findIndex((u) => u.id === user.id);

    if (existingUserIndex !== -1) {
      const updatedUsers = [...users];
      updatedUsers[existingUserIndex] = user;
      setUsers(updatedUsers);
    } else {
      setUsers([...users, user]);
    }
  };

  // Delete a user
  const deleteUser = (userId) => {
    setUsers(users.filter((user) => user.id !== userId));
  };

  //set User
  const setUser = (userId) => {
    return users.filter((user) => user.id === userId);
  };

  const contextValues = {
    books,
    users,
    addBook,
    setBook,
    deleteBook,
    addUser,
    deleteUser,
    setUser,
  };

  return <Context.Provider value={contextValues}>{children}</Context.Provider>;
};
