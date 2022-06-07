import React from "react";

class ValidateInput extends React.Component {
  constructor(props) {
    super(props);
    this.validatePassword = this.validatePassword.bind(this);
    this.state = { password: '' };
  }

validatePassword(){
  this.setState({ password: event.target.value });
}


  render() {
    let errorMsg;
    let icon;
    if (this.state.password === '') {
      errorMsg = 'A password is required.'
      icon = 'fa-x'
    } else if (this.state.password.length < 8) {
      errorMsg = 'Your password is too short.'
      icon = 'fa-x'
    } else {
      icon = 'fa-check'
    }


    return (
      <form>
        <label htmlFor="password">
          Password
        </label>
        <input type="password" id="password" name="password" value={this.state.password} onChange={this.validatePassword} />
        <div className="password-icon">
          <i className={`fa-solid ${icon}`}></i>
        </div>
        <div className="error-msg">
          {errorMsg}
        </div>
      </form>
    );
  }
}

export default ValidateInput;
