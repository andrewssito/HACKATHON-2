import React from 'react';
import axios from 'axios';
import { BrowserRouter, Switch, Route } from "react-router-dom";

import ActivePokemon from '../components/ActivePokemon/ActivePokemon';
import PokemonList from '../components/PokemonList/PokemonList';

import './HomePage.scss';



class HomePage extends React.Component {
  constructor() {
    super();

    this.state = {
      pokemon: [],
      activePokemon: {},
      pokeId: ''
    }
  }


  componentDidMount() {
    axios.get(`http://localhost:8888/pokemon`)
    .then((list) => {
      this.setState({pokemon: list.data});

      axios.get(`http://localhost:8888/pokemon/${list.data[0].id}`)
      .then((active) => {
        this.setState({activePokemon: active.data})
      })
    })
  }


  componentDidUpdate(prevProps) {

    if (prevProps.match.params.id !== this.props.match.params.id) {  
      axios.get(`http://localhost:8888/pokemon/${this.props.match.params.id}`)
      .then((active) => {
        this.setState({activePokemon: active.data})
      })
    }

  }



  render() {

    console.log(this.state);

    return (
      <>


        <h1 className='homepage-title'>choose your pokemon!</h1>

        <ActivePokemon activePokemon = {this.state.activePokemon}/>
        <PokemonList pokemonList = {this.state.pokemon}
                      id = {this.state.activePokemon.id}/>


      </>
    );
  }


}

export default HomePage;
