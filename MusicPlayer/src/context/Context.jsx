import { createContext, useState } from "react";

// create context
export const Context = createContext();

export const ContextProvider = ({ children }) => {
  const initializeSongs = [
    {
      id: 1,
      name: "Song 1",
      artist: "Artist 1",
      genre: "Genre 1",
    },
    {
      id: 2,
      name: "Song 2",
      artist: "Artist 2",
      genre: "Genre 2",
    },
    {
      id: 3,
      name: "Song 3",
      artist: "Artist 3",
      genre: "Genre 3",
    },
    {
      id: 4,
      name: "Song 4",
      artist: "Artist 4",
      genre: "Genre 4",
    },
  ];

  const initialPlaylists = [
    {
      id: 1,
      name: "Playlist 1",
      songs: ["Song 1", "Song 2"],
    },
    {
      id: 2,
      name: "Playlist 2",
      songs: ["Song 3", "Song 4"],
    },
  ];

  const [songs, setSongs] = useState(initializeSongs);
  const [playlists, setPlaylists] = useState(initialPlaylists);

  // add a song
  const addSong = (song) => {
    const existingSong = songs.findIndex((s) => s.id === song.id);

    if (existingSong !== -1) {
      const updatedSongs = [...songs];
      updatedSongs[existingSong] = song;
      setSongs(updatedSongs);
    } else {
      setSongs([...songs, song]);
    }
  };

  //delete a Song
  const deleteSong = (id) => {
    setSongs(songs.filter((song) => song.id !== id));
  };

  //select a Song
  const selectSong = (id) => {
    return songs.filter((song) => song.id === id);
  };

  // add a playlist
  const addPlaylist = (playlist) => {
    const existingPlaylist = playlists.findIndex((p) => p.id === playlist.id);

    if (existingPlaylist !== -1) {
      const updatedPlaylists = [...playlists];
      updatedPlaylists[existingPlaylist] = playlist;
      setPlaylists(updatedPlaylists);
    } else {
      setPlaylists([...playlists, playlist]);
    }
  };

  //delete a playlist
  const deletePlaylist = (id) => {
    setPlaylists(playlists.filter((playlist) => playlist.id !== id));
  };

  //select a playlist
  const selectPlaylist = (id) => {
    return playlists.filter((playlist) => playlist.id === id);
  };

  const contextValues = {
    songs,
    playlists,
    addSong,
    deleteSong,
    selectSong,
    addPlaylist,
    deletePlaylist,
    selectPlaylist,
  };

  return <Context.Provider value={contextValues}>{children}</Context.Provider>;
};
