import React from 'react';
import { Provider } from 'react-redux';
import { store } from './src/redux/app';

// Components
import { Layout } from './src/app';

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <Layout />
    </Provider>
  );
};

export default App;
