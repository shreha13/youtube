import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Body from './components/Body';
import { Provider } from 'react-redux';
import store from './utils/store';

function App() {
  return (
    <Provider store={store}>
      <div className='p-4'>
        <Header />
        <Body />
      </div>
    </Provider>
  );
}

export default App;
