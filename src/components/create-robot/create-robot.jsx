import React, { Component } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import InputBox from '../input-box/input-box';
import Card from '../card/card';

import './create-robot.css';

class CreateRobot extends Component {
  constructor() {
    super();
    this.state = {
      robotImgUrl: '',
      inputValue: '',
      error: false,
      loading: false,
    };
  }

  componentDidMount() {
    this.getRobotImage('Robobee');
  }

  getRobotImage = value => {
    this.setState(state => ({
      ...state,
      error: false,
      loading: true,
    }));
    fetch(`https://robohash.org/${value}?size=300x300`, {
      mode: 'no-cors', // 'cors' by default
    })
      .then(() => {
        this.setState(state => ({
          ...state,
          robotImgUrl: `https://robohash.org/${value}?size=300x300`,
          error: false,
          loading: false,
        }));
      })
      .catch(err =>
        this.setState(state => ({ ...state, error: true, loading: false }))
      );
  };

  handleSearchChange = e => {
    e.persist();
    this.setState(state => ({ ...state, inputValue: e.target.value }));
  };

  handleSearchSubmit = e => {
    e.preventDefault();
    const { inputValue } = this.state;
    this.getRobotImage(inputValue);
  };

  render() {
    const { inputValue, robotImgUrl, loading, error } = this.state;
    return (
      <div className="create-robot">
        <div className="container">
          <div className="title">
            <FontAwesomeIcon icon="robot" className="title-icon" />
            <h3 className="title">GENERATE UNIQUE ROBOTS</h3>
          </div>
          <InputBox
            value={inputValue}
            onChange={this.handleSearchChange}
            onSubmit={this.handleSearchSubmit}
            type="search"
            placeholder="Write anything..."
            loading={loading}
          />
          {error && (
            <p className="error-message">
              Oops! No robot wants to be called that name. <br /> Try with a
              different name
            </p>
          )}
          {!error && robotImgUrl && <Card imgSrc={robotImgUrl} />}
        </div>
      </div>
    );
  }
}
export default CreateRobot;
