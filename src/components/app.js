import React, {Component} from 'react'
import { connect } from 'react-redux'
import { fetchDataIfNeeded } from '../redux/actions'

import CharactersList from './characters'


class App extends Component {

  constructor(props) {
    super(props)
  }

  static fetching() {
    let dispatch = this.props.dispatch;
    return dispatch(fetchDataIfNeeded());
  }
  render() {
    const { isLoaded, characters } = this.props
    return (
       <div>
         <CharactersList isLoaded={isLoaded} characters={characters}/>
       </div>
    );
  }
}
 
const mapStateToProps = (state) => {
  const { isLoaded, characters } = state
 
  return {
    isLoaded,
    characters
  }
}
 
export default connect(mapStateToProps)(App)
