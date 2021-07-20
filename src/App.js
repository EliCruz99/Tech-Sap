import './App.css';
import Navbar from './components/Navbar/Navbar';
import { Route } from 'react-router-dom';
import Footer from './components/Footer/Footer';
import Homepage from './components/Homepage';
import Store from './components/Store/Store'
import ItemDetail from './components/ItemDetail/ItemDetail'
import Categories from './components/Categories Page/Categories';
import CreateCard from './components/CreateNewItem/CreateCard';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Route exact path="/">
        <Homepage/>
      </Route>
      <Route exact path="/store">
       <Store />
      </Route>
      <Route path="/store/:id">
        <ItemDetail/>
      </Route>
      <Route path="/categories">
        <Categories/>
      </Route>
      <Route path="/new-card">
        <CreateCard/>
      </Route>
      <ToastContainer/>
      <Footer/>
    </div>
  );
}

export default App;
