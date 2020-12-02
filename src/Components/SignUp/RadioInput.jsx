import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { requestPositions } from '../api';

const fetchPositions = async(setState) => {
  const response = await requestPositions();
  const { positions } = response;

  setState(positions);
};

export const FormRadioInput = ({ handleChange, onBlur }) => {
  const [positions, setPositions] = useState([]);

  useEffect(() => {
    fetchPositions(setPositions);
  }, []);

  return (
    <>
      <p>
        Select your position
      </p>
      <div>
        {positions.map((position) => {
          const { id, name } = position;

          return (
            <div key={id}>
              <input
                type="radio"
                id={id}
                key={id}
                name="position"
                value={id}
                onChange={handleChange}
                onBlur={onBlur}
              />
              <label htmlFor={id}>
                {name}
              </label>
              <br />
            </div>
          );
        })}
      </div>
    </>
  );
};

FormRadioInput.propTypes = {
  handleChange: PropTypes.func.isRequired,
  onBlur: PropTypes.func.isRequired,
};
