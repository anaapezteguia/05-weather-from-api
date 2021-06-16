import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Form from './components/Form';

function App() {
  // form state
  const [search, setSearch] = useState({
    city: '',
    country: '',
  });
  const [query, setQuery] = useState(false);

  // extract city and country
  const { city, country } = search;

  useEffect(() => {
    const fetchAPI = async () => {
      if (query) {
        const appId = process.env.REACT_APP_WEATHER_API_KEY;
        const url = `//api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${appId}`;
        const response = await fetch(url);
        const result = await response.json();
        console.log(result);
      }
    };
    fetchAPI();
    // eslint-disable-next-line
  }, [query]);

  return (
    <>
      <Header title="Weather React App" />
      <div className="contenedor-form">
        <div className="container">
          <div className="row">
            <div className="col m6 s12">
              <Form search={search} setSearch={setSearch} setQuery={setQuery} />
            </div>
            <div className="col m6 s12">2</div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
