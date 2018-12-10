import React from 'react';

const TextAreaFieldGroup = ({ name, placeholder, value, onChange }) => {
  return (
    <div className="form-group">
      <textarea
        className="form-control"
        placeholder={placeholder}
        name={name}
        value={value}
        onChange={onChange}
      />
    </div>
  );
};

export default TextAreaFieldGroup;
