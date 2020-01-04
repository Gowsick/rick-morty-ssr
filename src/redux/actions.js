const fetch = require("node-fetch");
export const RECEIVE_CHARS = 'RECEIVE_CHARS'


function receiveData(json) {
  return {
    type: RECEIVE_CHARS,
    characters: json
  }
}

function fetchData() {
  return dispatch => {
    //dispatch(requestcharacters())
    return fetch('https://rickandmortyapi.com/api/character/')
      .then(response => response.json())
      .then(json => dispatch(receiveData(json.results)))
  }
}

function shouldfetchData(state) {
  const characters = state.characters
  if (characters.length==0) {
    return true
  } else if (state.isLoaded) {
    return false
  }
}

export function fetchDataIfNeeded() {
  return (dispatch, getState) => {
    if (shouldfetchData(getState())) {
      return dispatch(fetchData())
    }
  }
}
