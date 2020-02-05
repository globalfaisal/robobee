import React, { Component } from 'react';

import Robohash from 'react-robohash';

import Card from '../card/card';
import SearchBox from '../search-box/search-box';

import './demo.css';

class Demo extends Component {
  constructor() {
    super();
    this.state = {
      robohash: '',
      searchValue: '',
      loading: false,
    };
  }

  componentDidMount() {
    this.setState({
      robohash: 'deafult',
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
        robohash: searchValue,
        loading: false,
      });
    }, 2000);
  };

  render() {
    const { searchValue, robohash, loading } = this.state;
    return (
      <section className="section-demo" id="section-demo">
        <div className="container">
          <h3 className="title">GENERATE UNIQUE ROBOTS</h3>
          <SearchBox
            type="search"
            value={searchValue}
            onSearchChange={e => this.setState({ searchValue: e.target.value })}
            onSearchSubmit={this.handleSearchSubmit}
            placeholder="Write anything..."
            loading={loading}
          />
          <Robohash name={robohash}>
            {imgUrl => <Card imgSrc={imgUrl} />}
          </Robohash>
        </div>
      </section>
    );
  }
}
export default Demo;
