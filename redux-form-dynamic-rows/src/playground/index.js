import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import Form from './Form';
import store from './configure-store';

const App = () => (
  <Provider store={store}>
    <Form />
  </Provider>
);

ReactDOM.render(
  <App />,
  document.getElementById('app')
);
