// src/components/ButtonComponent.jsx

import React from 'react';
import { useSelector } from 'react';

const ButtonComponent = () => {
  const number = useSelector((state) => state.number);

  return (
    <button>{number}</button>
  );
};

export default ButtonComponent;