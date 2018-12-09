import React from 'react';

const InputGroup = ({ name, placeholder, value, onChange }) => {
  return (
    <div className="input-group mb-3">
      <div className="input-group-prepend" />
      <input
        className="form-control"
        type="text"
        placeholder={placeholder}
        name={name}
        value={value}
        onChange={onChange}
      />
    </div>
  );
};

export default InputGroup;
