import React from "react";


class Carousel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeId: 0
    };
  }
  render(){

    return (
      <div className="carousel">
        <div className="image-carousel">
          <i className="fas fa-chevron-left ctrl"></i>
          <div className="img-gallery">
            <img src="https://assets.pokemon.com/static2/_ui/img/og-default-image.jpeg" alt=""/>
          </div>
          <i className="fas fa-chevron-right ctrl"></i>
        </div>
        <div className="progress-bar">
          <div className="progress-dot"><i className="fas fa-circle" data-id="1"></i></div>
          <div className="progress-dot"><i className="far fa-circle" data-id="2"></i></div>
          <div className="progress-dot"><i className="far fa-circle" data-id="3"></i></div>
          <div className="progress-dot"><i className="far fa-circle" data-id="4"></i></div>
          <div className="progress-dot"><i className="far fa-circle" data-id="5"></i></div>
        </div>
      </div>
    )
  }
}

export default Carousel;
