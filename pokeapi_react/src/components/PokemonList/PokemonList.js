import React from "react";
import { Link } from "react-router-dom";


function PokemonList(props) {


    return (
            <>
      
      
              {props.pokemonList.filter(pokemon => pokemon.id !== props.id).map((pokemon) => {
      
                return (

                    <section className="pokemon__list">

                        <Link to={`/pokemon/${pokemon.id}`}>
                            <div className="pokemon__list-div">
                
                                <section className="pokemon__list-container">
                                <img className="pokemon__list-image" src={pokemon.image} alt="pokemon image" />
                                </section>
                
                                <section className="pokemon__list-info">
                                                
                                <p className="pokemon__list-name">{pokemon.name}</p>
                                
                
                                </section>
                                                
                            </div>
                        </Link>

                    </section>

                )
              })}
            </>
    )
}



export default PokemonList