// src/App.jsx

import React from 'react';
import { Provider } from 'react-redux';
import store from './state/store.jsx';
import LinkComponent from './components/LinkComponent.jsx';
import ButtonComponent from './components/ButtonComponent.jsx';

const App = () => {
  return (
    <Provider store={store}>
      <div>
        <LinkComponent />
        <ButtonComponent />
      </div>
    </Provider>
  );
};

export default App;
