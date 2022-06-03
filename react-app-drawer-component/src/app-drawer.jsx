import React from 'react';

class ToggleMenu extends React.Component {
  constructor(props) {
    super(props);
    this.openMenu = this.openMenu.bind(this);
    this.closeMenu = this.closeMenu.bind(this);
    this.state = { isClicked: false };
  }

  openMenu() {
    this.setState(prevState => ({
      isClicked: true
    }));
  }

  closeMenu() {
    this.setState(prevState => ({
      isClicked: false
    }));
  }

  listItems () {
    const menuItems = [
      { number: '001', name: 'About' },
      { number: '002', name: 'Get Started' },
      { number: '003', name: 'Sign In' },
      { number: '004', name: 'Contact Us' }
    ];

    return menuItems;
  }

  hideClass () {
    let hide;
    const isClicked = this.state.isClicked;

    if (!isClicked) {
      return 'hide';
    } else {
      return '';
    }
  }

  event () {
    console.log(event.target);
  }


  render() {
    return (
      <div>
        <button className='button' onClick={this.openMenu}>CLICK ME</button>
        <div className={`menu-overlay ${this.hideClass()}`} onClick={this.closeMenu}>
      <div className="menu">
        <h2 className="menu-title">Menu</h2>
        <ul>
          {
                this.listItems().map(item => {
              return <li key={item.number} onClick={this.closeMenu}>{item.name}</li>
            })
          }
        </ul>
      </div>
    </div>
      </div>
    );
  }

}

export default ToggleMenu;
