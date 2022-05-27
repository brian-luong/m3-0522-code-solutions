import React from 'react';

class ToggleSwitch extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.state = { isClicked: false };
  }

  handleClick() {
    this.setState(prevState => ({
      isClicked: !prevState.isClicked
    }));
  }

  render() {
    let label;
    let bgColor;
    let position;
    const isClicked = this.state.isClicked;
    if (isClicked) {
      label = 'ON';
      bgColor = 'green-bg';
      position = 'on';
    } else {
      label = 'OFF';
      position = 'off';
    }

    return (
      <div className='switch-container'>
        <button className={`switch ${bgColor}`} onClick={this.handleClick}>
          <div className={`circle ${position}`}>
          </div>
        </button>
        <div>{label}</div>
      </div>
    );
  }
}

export default ToggleSwitch;
