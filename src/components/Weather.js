import React from 'react';
import PropTypes from 'prop-types';

const Weather = ({ result }) => {
  // extract values
  const { name, main, sys } = result;

  if (!name) return null;

  // Kelvin degrees
  const kelvin = 273.15;

  return (
    <div className="card-panel white col s12">
      <div className="black-text">
        <h2>
          The weather in {name} ({sys.country}) is:
        </h2>
        <p className="temperatura">
          {/* conversion to Celsius */}
          {parseFloat(main.temp - kelvin, 10).toFixed(2)}
          <span> &#x2103;</span>
        </p>
        <p>
          Max. temperature: {parseFloat(main.temp_max - kelvin, 10).toFixed(2)}
          <span> &#x2103;</span>
        </p>
        <p>
          Min. temperature: {parseFloat(main.temp_min - kelvin, 10).toFixed(2)}
          <span> &#x2103;</span>
        </p>
      </div>
    </div>
  );
};

Weather.propTypes = {
  result: PropTypes.object.isRequired,
};

export default Weather;
