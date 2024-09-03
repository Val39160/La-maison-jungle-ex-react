import Banner from './Banner';
import Cart from './Cart';
import ShoppingList from './ShoppingList';
import logo from '../logo.svg';
import '../App.css';
import { Fragment } from 'react';

function App() {
  return (
    <Fragment>
     <Banner/>
     <Cart/>
      <ShoppingList/>
    </Fragment>
  );
}

export default App;
