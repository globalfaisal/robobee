import React, { Component } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import Card from '../card/card';
import SearchBox from '../search-box/search-box';

import './demo.css';

class Demo extends Component {
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
          {imgUrl && <Card imgSrc={imgUrl} />}
        </div>
      </section>
    );
  }
}
export default Demo;
