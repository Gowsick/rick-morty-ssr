"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.fetchDataIfNeeded = fetchDataIfNeeded;
exports.RECEIVE_CHARS = void 0;

var fetch = require("node-fetch");

var RECEIVE_CHARS = 'RECEIVE_CHARS';
exports.RECEIVE_CHARS = RECEIVE_CHARS;

function receiveData(json) {
  return {
    type: RECEIVE_CHARS,
    characters: json
  };
}

function fetchData() {
  return function (dispatch) {
    //dispatch(requestcharacters())
    return fetch('https://rickandmortyapi.com/api/character/').then(function (response) {
      return response.json();
    }).then(function (json) {
      return dispatch(receiveData(json.results));
    });
  };
}

function shouldfetchData(state) {
  var characters = state.characters;

  if (characters.length == 0) {
    return true;
  } else if (state.isLoaded) {
    return false;
  }
}

function fetchDataIfNeeded() {
  return function (dispatch, getState) {
    if (shouldfetchData(getState())) {
      return dispatch(fetchData());
    }
  };
}