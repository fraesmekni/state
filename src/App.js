import React from 'react';
import messi from './messi.png'
import ronaldo from './ronaldo.jpg'
import ronaldinho from './ronaldinho.jpg'
import './App.css';

export default class  App extends React.Component {
  state = {
    h1: "ronaldo",
    img : ronaldo,
    p: "Cristiano Ronaldo dos Santos Aveiro, couramment appelé Ronaldo ou Cristiano Ronaldo et surnommé CR7, né le 5 février 1985 à Funchal sur l'île de Madère, est un footballeur international portugais qui évolue au poste d'attaquant à la Juventus de Turin Considéré comme l'un des meilleurs joueurs de l'histoire de son sport, il est le seul footballeur avec Lionel Messi à avoir remporté le Ballon d'or au moins cinq fois : en 2008, 2013, 2014, 2016 et en 2017. Auteur de plus de 700 buts en carrière, il est le meilleur buteur de la Ligue des champions de l'UEFA"
    }
  render(){

  return (
    <> 
    
    <button on onClick={()=>this.setState({h1 : "ronaldo", img : ronaldo, p:"Ronaldo de Assis Moreira, né le 21 mars 1980 à Porto Alegre au Brésil, plus communément connu sous le pseudonyme de Ronaldinho Gaúcho ou tout simplement Ronaldinho2, est un footballeur international brésilien. Il est Champion du monde 2002 avec l'équipe du Brésil."})}>
      ronaldo
   </button> 
    
    <button onClick={()=>this.setState({h1:"Messi",
                                         img:messi,
                                         p: " Lionel Messi, parfois surnommé Leo Messi, né le 24 juin 1987 à Rosario, est un footballeur international argentin évoluant au poste d'attaquant au FC Barcelone. Seul footballeur sextuple Ballon d'Or et Soulier d'or européen, Messi est considéré comme l'un des meilleurs footballeurs de l'histoire jourueur créatif complet, il est un buteur prolifique détenteur de nombreux records : sextuple vainqueur du Pichichi" })} >
messi 
    </button>
    <button onClick={()=>this.setState({h1 : "ronaldinho", img : ronaldinho, p:"Ronaldo de Assis Moreira, né le 21 mars 1980 à Porto Alegre au Brésil, plus communément connu sous le pseudonyme de Ronaldinho Gaúcho ou tout simplement Ronaldinho2, est un footballeur international brésilien. Il est Champion du monde 2002 avec l'équipe du Brésil."})}>
    ronaldinho 
    </button>
    <div>
      <h1>{this.state.h1}</h1>
      <img src={this.state.img}/>
  <p>{this.state.p}</p>
    </div>
    </>
  )};
}


