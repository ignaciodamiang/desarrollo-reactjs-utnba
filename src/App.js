import logo from './logo.svg';
import './App.css';
import './assets/TopNavBar.css';
import './assets/ContactForm.css';
import { ContactForm } from './components/ContactForm';
import { TopNavBar } from './components/TopNavBar';

function App() {
  return (
    <div className='App'>
      <TopNavBar />
      <main>
        <ContactForm />
      </main>
    </div>
  );
}

export default App;
