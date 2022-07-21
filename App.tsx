import React from 'react';
import { Provider } from 'react-redux';

import Layout from './app/Layout';
import { store } from './redux/store';

const App: React.FC = () => (
  <Provider store={store}>
    <Layout />
  </Provider>
);

export default App;
