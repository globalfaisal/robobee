import React, { useState, useEffect } from 'react';
import Robohash from 'react-robohash';
import ImageCard from '../image-card/image-card';
import SearchBox from '../search-box/search-box';
import './demo.css';

export default function Demo() {
  let timeout;
  const [robohash, setRobohash] = useState('');
  const [loading, setLoading] = useState(false);
  const [searchValue, setSearchValue] = useState('');

  useEffect(() => {
    setRobohash('default');
    setLoading(false);

    return () => {
      window.clearTimeout(timeout);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleSearchSubmit = e => {
    e.preventDefault();
    setLoading(true);
    timeout = window.setTimeout(() => {
      setLoading(false);
      setRobohash(searchValue);
    }, 2000);
  };

  return (
    <section className="section-demo" id="section-demo">
      <div className="content">
        <h3 className="title">GENERATE UNIQUE ROBOTS FROM ANY TEXT</h3>
        <SearchBox
          type="search"
          value={searchValue}
          onSearchChange={e => setSearchValue(e.target.value)}
          onSearchSubmit={handleSearchSubmit}
          placeholder="Write anything..."
          loading={loading}
        />
        <Robohash name={robohash} size={300}>
          {imgUrl => <ImageCard src={imgUrl} alt={`Robobee-${robohash}`} />}
        </Robohash>
      </div>
    </section>
  );
}
