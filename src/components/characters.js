import React, { Component } from 'react';
import { fetchData } from '../redux/actions'

class CharactersList extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        const { isLoaded, characters } = this.props;
        if (!isLoaded) {
            return <div>loading...</div>
        } else {
            return(
                <div className='characterList'>
                    <ul>
                    {characters.map(character => (
                        <li key={character.id}>
                            <img src={character.image} alt=''/>
                            <p>{character.name}</p>
                            <p>id: <span>{character.id}</span></p>
                            <p>created: <span>{character.created}</span></p>
                            <p>Status: <span>{character.status}</span></p>
                            <p>Species: <span>{character.species}</span></p>
                            <p>Gender: <span>{character.gender}</span></p>
                            <p>Origin: <span>{character.origin.name}</span></p>
                            <p>Last Location: <span>{character.location.name}</span></p>
                        </li>
                        ))}
                        </ul>
                    //<button onClick={()=>this._getData(this.state.nextpage)}>Load More...</button>
                </div>
                );
        }
    }
}

export default CharactersList;
