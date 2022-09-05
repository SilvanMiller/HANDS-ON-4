import { Provider } from 'react-redux';
import './index.css';
import Routes from './Routes'
import { store } from './store';

function App() {

  return (
    <Provider store={store}>
      <Routes />
    </Provider>
  )
}

export default App

