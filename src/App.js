
//components
import AppBg from './utils/AppBg'
import NavBar from './utils/NavBar'
import Alert from './utils/Alert'
import ContactMe from './utils/ContactMe'

//Redux
import {Provider} from 'react-redux'
import store from './store';

//css
import './App.css'

function App() {

  return (
    <Provider store={store}>
      <div className="App">
            <Alert/>
            <AppBg/>
            <NavBar/>
            <ContactMe />
      </div>
    </Provider>
  );
}

export default App;