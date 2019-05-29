/* eslint-disable */
import React from 'react';

// TODO: Fix eslint issues.

const Checkbox = ({
  children, className, name, id, ...rest
}) => {
  const newId = typeof id === 'undefined' ? name : id;
  return (
    <label
      htmlFor={newId}
      className={`checkbox ${className}`}
    >
      <input
        type="checkbox"
        id={newId}
        name={name}
        {...rest}
      />
      <label
        htmlFor={newId}
        className="cursor-pointer"
      />
    </label>
  );
};

export default Checkbox;
