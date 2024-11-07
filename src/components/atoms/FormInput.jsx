import React from 'react';

const FormInput = ({ label, type, placeholder, name, value, onChange }) => {
  return (
    <div className='form-group mb-2'>
      <label className='form-label'>{label}</label>
      <input 
        type={type} 
        placeholder={placeholder} 
        name={name} 
        className='form-control' 
        value={value} 
        onChange={onChange} 
      />
    </div>
  );
};

export default FormInput;
