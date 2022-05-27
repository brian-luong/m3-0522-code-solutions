import React from 'react';

class StopWatch extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.startTimer = this.startTimer.bind(this);
    this.tick = this.tick.bind(this);
    this.zeroTimer = this.zeroTimer.bind(this);
    this.state = { isPlaying: false, counter: 0 };
  }

  startTimer() {
    this.timerID = setInterval(() => this.tick(), 1000);
  }

  clearTimer() {
    clearInterval(this.timerID);
  }

  tick() {
    this.setState({ counter: this.state.counter + 1 });
  }

  handleClick() {
    this.setState(prevState => ({
      isPlaying: !prevState.isPlaying
    }));
    if (!this.state.isPlaying) {
      this.startTimer();
    } else {
      this.clearTimer();
    }
  }

  zeroTimer() {
    if (!this.state.isPlaying && this.state.counter > 0) {
      this.setState({ counter: 0 });
    }

  }

  render() {
    let btnState;
    if (this.state.isPlaying) {
      btnState = 'fa-pause';
    } else {
      btnState = 'fa-play';
    }

    return (
      <div className='stopwatch-container'>
        <div className='countdown' onClick={this.zeroTimer}>
          {this.state.counter}</div>
        <i className={`btn fa solid ${btnState}`} onClick={this.handleClick}></i>
      </div>
    );
  }
}

export default StopWatch;
