import React from 'react';
import PropTypes from 'prop-types';

function Market(props){
  return (
    <div>
      <style jsx>{`
        div {

        }
      `}</style>
      <h3>{props.day}</h3>
      <h3>{props.location}</h3>
      <h3>{props.hours}</h3>
      <h3>{props.issue}</h3>
    </div>
  );
}

Market.propTypes = {
  day: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  hours: PropTypes.string.isRequired,
  issue: PropTypes.string
};

export default Market;