import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Body from './components/Body';
import { Provider } from 'react-redux';
import store from './utils/store';
import { RouterProvider } from 'react-router-dom';
import router from './utils/routing';

function App() {
  return (
    <Provider store={store}>
      <div className='p-4'>
        <Header />
        <RouterProvider router={router} />
      </div>
    </Provider>
  );
}

export default App;
