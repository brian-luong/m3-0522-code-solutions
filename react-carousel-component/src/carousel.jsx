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
        pokedex.map((dot) => {
          return <li className="progress-dot" data-id={dot.pokemonId} key={dot.pokemonId}><i className={dot.pokemonId === activeId ? "fas fa-circle" : "far fa-circle"}></i></li>
        }

      )
      }
  </ul>
  )
}

function DisplayImage(props) {
  const activeId = props.activeId;

  const imgUrl = pokedex.find(element => element.pokemonId === activeId).imageUrl;

  return (
    <img src={imgUrl}/>
  )
}


class Carousel extends React.Component {
  constructor(props) {
    super(props);
    this.nextImg = this.nextImg.bind(this);
    this.prevImg = this.prevImg.bind(this);
    this.state = {
      pokemonId: 1
    };
  }




  nextImg() {
    const pokemonIds = pokedex.map(ele => ele.pokemonId);
    const active = this.state.pokemonId;
    const index = pokemonIds.indexOf(active) + 1;

    if (index < pokemonIds.length) {
      this.setState({ pokemonId: pokemonIds[index] });
    } else if (index === pokemonIds.length) {
      this.setState({ pokemonId: pokemonIds[0] });
    }

  }

  prevImg() {
    const pokemonIds = pokedex.map(ele => ele.pokemonId);
    const active = this.state.pokemonId;
    const index = pokemonIds.indexOf(active) - 1;

    if (index < 0) {
      this.setState({ pokemonId: pokemonIds[pokemonIds.length - 1] });
    } else if (index < pokemonIds.length) {
      this.setState({ pokemonId: pokemonIds[index] });
    }

  }

  render(){
    const active = this.state.pokemonId;
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
