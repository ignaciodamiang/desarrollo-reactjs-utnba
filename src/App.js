import './App.css';
import './assets/TopNavBar.css';
import './assets/Footer.css';
import { BrowserRouter as Router } from 'react-router-dom';
import Public from './routes/Public';
import firebase from './config/firebase';

function App() {
  console.log('firebase');
  console.log(firebase);

  return (
    <div className='App'>
      <div className='main-container'>
        <Router>
          <Public />
        </Router>
      </div>
      {/* <Footer /> */}
    </div>
  );
}

export default App;
