//Action Creator
export const selectSong = (song) => {
  //Return an action/ Returning an object
  return {
    type: "SONG_SELECTED",
    payload: song,
  };
};
