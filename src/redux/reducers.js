import React, { Component } from 'react';
import { RECEIVE_CHARS } from './actions';

function characters( state = {isLoaded: false, characters: []}, action) {
  switch (action.type) {
    case RECEIVE_CHARS:
      return Object.assign({}, state, {
        isLoaded: true,
        characters: action.characters
      });
    default:
      return state
  }
}

export default characters
