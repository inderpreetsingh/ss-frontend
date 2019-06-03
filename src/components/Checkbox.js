/* eslint-disable */
import React from 'react';

// TODO: Fix eslint issues.

const Checkbox = ({
  children, className, name, id, ...rest
}) => {
  return (
    <label
      htmlFor={id}
      className={`checkbox ${className}`}
    >
      <input
        type="checkbox"
        id={id}
        name={name}
        {...rest}
      />
      <label
        htmlFor={id}
        className="cursor-pointer"
      />
    </label>
  );
};

export default Checkbox;
