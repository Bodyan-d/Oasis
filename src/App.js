import Header from './Components/Header/Header'
import Main from './Components/Main/Main';
import Footer from './Components/Footer/Footer'
import './App.css';

function App() {
  return (
    <div className="App">
      <Header/>
      <Main/>
      <Footer/>
      <div className='footer-coins_mobile'></div>
    </div>
  );
}

export default App;
