import './App.css';
import Navbar from './components/Navbar/Navbar';
import { Route } from 'react-router-dom';
import Footer from './components/Footer/Footer';
import Homepage from './components/Homepage';
import Store from './components/Store/Store'
function App() {
  return (
    <div className="App">
      <Navbar />
      <Route exact path="/">
        <Homepage/>
      </Route>
      <Route path="/store">
       <Store />
      </Route>

      <Footer/>
    </div>
  );
}

export default App;
