import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import Public from './routes/Public';

function App() {
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
