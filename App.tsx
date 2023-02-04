import React from 'react';
import { Provider } from 'react-redux';

import Layout from './src/app/Layout';
import { store } from './src/redux/app';

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <Layout />
    </Provider>
  );
};

export default App;
