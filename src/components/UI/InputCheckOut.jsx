import React from 'react';

const InputCheckOut = ({
  title,
  label,
  type,
  maxLength = 30,
  minLength = 4,
  ...props
}) => {
  return (
    <div className="space-y-1 w-full">
      <label htmlFor={label} className="text-sm md:text-base pl-2">
        {title}
      </label>
      <input
        minLength={minLength}
        maxLength={maxLength}
        name={label}
        type={type}
        className="outline-none w-full border-b border-b-primary 
        rounded-lg py-2 shadow-md pl-2"
        required
        {...props}
      />
    </div>
  );
};

export default InputCheckOut;
