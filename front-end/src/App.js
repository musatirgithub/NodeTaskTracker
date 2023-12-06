import { Provider } from 'react-redux';
import './App.css';
import AppRouter from "./router/AppRouter"
import { PersistGate } from 'redux-persist/integration/react';
import store, { persistor } from './app/store';

function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <AppRouter />
      </PersistGate>
    </Provider>
  );
}

export default App;
