// src/components/LinkComponent.jsx

import React from 'react';
import { useDispatch } from 'react';
import { updateNumber } from '../State/ActionCreators/actions.jsx';

const LinkComponent = () => {
  const dispatch = useDispatch();

  const handleClick = (e) => {
    e.preventDefault(); // Prevent default link behavior
    dispatch(updateNumber());
  };

  return (
    <a href="#" onClick={handleClick}>Click me to update number</a>
  );
};

export default LinkComponent;
