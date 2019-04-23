import React from 'react';
import PropTypes from 'prop-types';

function Produce(props){
  return (
    <div>
      <style jsx>{`
        <div {

        }
      `}</style>
      <h3>{props.month}</h3>
      <h3>{props.selection}</h3>
    </div>

  );
}

Produce.propTypes = {
  month: PropTypes.string.isRequired,
  selection: PropTypes.array.isRequired
};

export default Produce;