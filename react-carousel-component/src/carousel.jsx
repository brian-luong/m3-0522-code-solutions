import React from "react";

const pokedex = [
  {
    pokemonId: 1,
    imageUrl: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/001.png'
  },
  {
    pokemonId: 2,
    imageUrl: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/002.png'
  },
  {
    pokemonId: 3,
    imageUrl: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/003.png'
  },
  {
    pokemonId: 4,
    imageUrl: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/004.png'
  },
  {
    pokemonId: 5,
    imageUrl: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/005.png'
  }
]

function ProgressDot (props) {
  const activeId = props.activeId;
  return (
  <ul className="progress-bar">
      {
        pokedex.map((dot, index) => {
          return <li className="progress-dot" key={dot.pokemonId}><i className={index === activeId ? "fas fa-circle" : "far fa-circle"}></i></li>
        }

      )
      }
  </ul>
  )
}

function DisplayImage(props) {
  const activeId = props.activeId;
  return (
    <img src={pokedex[activeId].imageUrl}/>
  )
}


class Carousel extends React.Component {
  constructor(props) {
    super(props);
    this.nextImg = this.nextImg.bind(this);
    this.prevImg = this.prevImg.bind(this);
    this.state = {
      activeId: 0
    };
  }


  nextImg() {
    this.setState({ activeId: this.state.activeId + 1 });
  }

  prevImg() {
    this.setState({ activeId: this.state.activeId - 1 });
  }



  render(){

    const active = this.state.activeId;

    console.log(active);
    return (
      <div className="carousel">
        <div className="image-carousel">
          <i className="fas fa-chevron-left ctrl" onClick={this.prevImg}></i>
          <div className="img-gallery">
            <DisplayImage activeId={active} />
          </div>
          <i className="fas fa-chevron-right ctrl" onClick={this.nextImg}></i>
        </div>
        <ProgressDot activeId={active} />
      </div>
    )
  }
}

export default Carousel;
