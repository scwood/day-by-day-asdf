import React, { Component, PropTypes } from 'react';

import MainNavbar from '../components/MainNavbar';
import signOut from '../utils/signOut';

class Main extends Component {

  constructor() {
    super();
    this.handleSignOutClick = this.handleSignOutClick.bind(this);
  }

  handleSignOutClick() {
    signOut();
  }

  render() {
    return (
      <div>
        <MainNavbar onSignOutClick={this.handleSignOutClick} />;
        <div className="container max-app-width" style={{ marginTop: 60 }}>
          <div className="row">
            <div className="col-xs-12">
              {this.props.children}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

Main.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Main;
