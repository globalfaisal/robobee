import React, { Component } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import SearchBox from '../search-box/search-box';
import Card from '../card/card';

import './create-robot.css';

class CreateRobot extends Component {
  constructor() {
    super();
    this.state = {
      imgUrl: '',
      searchValue: '',
      loading: false,
    };
  }

  componentDidMount() {
    this.setState({
      imgUrl: 'https://robohash.org/skinnyRobot?size=300x300',
      loading: false,
    });
  }

  componentWillUnmount() {
    window.clearTimeout(this.timeout);
  }

  handleSearchSubmit = e => {
    e.preventDefault();
    const { searchValue } = this.state;
    this.setState({ loading: true });
    this.timeout = window.setTimeout(() => {
      this.setState({
        imgUrl: `https://robohash.org/${searchValue}?size=300x300`,
        loading: false,
      });
    }, 3000);
  };

  render() {
    const { searchValue, imgUrl, loading } = this.state;
    return (
      <div className="create-robot">
        <div className="container">
          <div className="title">
            <FontAwesomeIcon icon="robot" className="title-icon" />
            <h3 className="title">GENERATE UNIQUE ROBOTS</h3>
          </div>
          <SearchBox
            type="search"
            value={searchValue}
            onSearchChange={e => this.setState({ searchValue: e.target.value })}
            onSearchSubmit={this.handleSearchSubmit}
            placeholder="Write anything..."
            loading={loading}
          />
          {imgUrl && <Card imgSrc={imgUrl} />}
        </div>
      </div>
    );
  }
}
export default CreateRobot;
