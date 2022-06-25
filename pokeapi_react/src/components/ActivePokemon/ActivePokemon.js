import React from 'react';
import './ActivePokemon.scss';





function ActivePokemon(props) {
    
    
        return (
            <>
                <section className="active__pokemon">
                    <img src={props.activePokemon.image}/>

                    <ul className='active__pokemon-details'>
                        <li>{props.activePokemon.name}</li>
                        <li>{props.activePokemon.species}</li>
                        <li>{props.activePokemon.ability}</li>
                        <li>{props.activePokemon.height}</li>
                        <li>{props.activePokemon.weight}</li>

                    </ul>
                </section>

            </>


        )
}




export default ActivePokemon