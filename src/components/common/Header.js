import React, { PropTypes, Component } from 'react';
import CustomHeader from './CustomHeader';

class Header extends Component {
  render() {
    return (
      <header className="header">
		<CustomHeader />
      </header>
    );
  }
}

export default Header;
