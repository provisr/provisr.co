import Component from 'inferno-component';
import { Provider } from 'inferno-mobx';

import './registerServiceWorker';
import './App.css';

import AppRouter from './components/AppRouter';

import { AppStore } from './stores';
const appStore = AppStore.create();

class App extends Component {
  render() {
    return (
      <div className="App">
        <Provider appStore={appStore}>
          <AppRouter />
        </Provider>
      </div>
    );
  }
}

export default App;
