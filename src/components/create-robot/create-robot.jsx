import React, { Component } from 'react';

import './create-robot.css';
import InputBox from '../input-box/input-box';

class CreateRobot extends Component {
  constructor() {
    super();
    this.state = {
      searchTerm: '',
    };
  }

  handleSearchChange = e => {
    this.setState({ searchTerm: e.target.value });
  };

  handleSearchSubmit = e => {
    e.preventDefault();
    const { searchTerm } = this.state;
    console.log(searchTerm);
  };

  render() {
    const { searchTerm } = this.state;
    return (
      <div className="create-robot">
        <div className="container">
          <h3 className="title">GENERATE UNIQUE ROBOTS</h3>
          <InputBox
            value={searchTerm}
            onChange={this.handleSearchChange}
            onSubmit={this.handleSearchSubmit}
          />
        </div>
      </div>
    );
  }
}
export default CreateRobot;
