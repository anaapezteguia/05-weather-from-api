import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Form from './components/Form';
import Weather from './components/Weather';
import Error from './components/Error';

function App() {
  // form state
  const [search, setSearch] = useState({
    city: '',
    country: '',
  });
  const [query, setQuery] = useState(false);
  const [result, setResult] = useState({});
  const [error, setError] = useState(false);

  // extract city and country
  const { city, country } = search;

  useEffect(() => {
    const fetchAPI = async () => {
      if (query) {
        //in order to avoid exposing the API key we have to protect it
        // https://create-react-app.dev/docs/adding-custom-environment-variables/
        const appId = process.env.REACT_APP_WEATHER_API_KEY;
        const url = `//api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${appId}`;
        const response = await fetch(url);
        const result = await response.json();
        setResult(result);
        setQuery(false);

        // detect errors in query
        if (result.cod === '404') {
          setError(true);
        } else {
          setError(false);
        }
      }
    };
    fetchAPI();
    // eslint-disable-next-line
  }, [query]);

  // conditional component load
  let component;
  if (error) {
    component = <Error message="There are no results to be shown" />;
  } else {
    component = <Weather result={result} />;
  }

  return (
    <>
      <Header title="Weather React App" />
      <div className="contenedor-form">
        <div className="container">
          <div className="row">
            <div className="col m6 s12">
              <Form search={search} setSearch={setSearch} setQuery={setQuery} />
            </div>
            <div className="col m6 s12">{component}</div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
