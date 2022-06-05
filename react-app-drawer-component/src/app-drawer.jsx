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
    if (!event.target.className === 'menu-overlay'){
      return;
    }
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

  render() {
    return (
<div>
  <div className='bars' onClick={this.openMenu}><i class="fa-solid fa-bars"></i></div>
    <div className={`menu-overlay ${this.hideClass()}`}>
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
    <div className='shade' onClick={this.closeMenu}></div>
  </div>
  <main>
          <img src="https://i.etsystatic.com/7897174/r/il/edb48e/667405984/il_794xN.667405984_2nm1.jpg" alt="Tri Force" />
  </main>
</div>
    );
  }

}

export default ToggleMenu;
