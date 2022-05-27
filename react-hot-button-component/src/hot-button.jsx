import React from 'react';

class CustomButton extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.state = { counter: 0 };
  }

  handleClick() {
    this.setState({ counter: this.state.counter + 1 });
  }

  render() {
    let btnClass;
    if (this.state.counter > 2 && this.state.counter < 6) {
      btnClass = 'btn-dark-purple';
    } else if (this.state.counter > 5 && this.state.counter < 9) {
      btnClass = 'btn-purple';
    } else if (this.state.counter > 8 && this.state.counter < 12) {
      btnClass = 'btn-red';
    } else if (this.state.counter > 11 && this.state.counter < 15) {
      btnClass = 'btn-orange';
    } else if (this.state.counter > 14 && this.state.counter < 18) {
      btnClass = 'btn-yellow';
    } else if (this.state.counter > 17) {
      btnClass = 'btn-white';
    }
    return (
      <button className={`btn ${btnClass}`} onClick={this.handleClick}>Hot Button</button>
    );
  }
}

export default CustomButton;
