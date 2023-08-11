
import Cart from './components/Cart';
import Cat from './components/Cat';
import Details from './components/Details';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import ProductList from './components/ProductList';
import About from './components/About';
import Contact from './components/Contact';
import CatProd from './components/CatProd';
import { useEffect, useState } from 'react';
import PaymentForm from './components/PaymentForm';
import data from './data.json'

function App() {
  const [cartItems, setCartItems] = useState([]);

  const onAdd = (product) => {
  const find = cartItems.find((x)=> x.id === product.id)
  if(find){
    const newCart = cartItems.map((x)=>
    x.id === product.id ? {...find, qty:find.qty + 1}: x );
    setCartItems(newCart);
    localStorage.setItem('cartItems', JSON.stringify(newCart))
  } else{
    const newCart = [...cartItems, {...product}];
    setCartItems(newCart)
    localStorage.setItem('cartItems', JSON.stringify(newCart))
  }

  }

  const onRemove = (product) => {
  const find = cartItems.find((x)=> x.id === product.id);
  console.log(find)
  if(find.qty===1){
    const newCart = cartItems.filter((x)=> x.id !==product.id);
    setCartItems(newCart)
    localStorage.setItem('cartItems', JSON.stringify(newCart))
  }
  else{
    const newCart = cartItems.map((x) =>
    x.id === product.id? {...find, qty: find.qty-1}: x

    );
  setCartItems(newCart)
  localStorage.setItem('cartItems', JSON.stringify(newCart))
  
  }}
console.log(cartItems)
useEffect(()=>{
  const cartItems = localStorage.getItem('cartItems')? JSON.parse(localStorage.getItem('cartItems')):[]
  setCartItems(cartItems)
   },[]);
const sum = cartItems.reduce((total, item)=>{ return total + (item.price * item.qty)}, 0);

const refreshCart = ()=>{
  const newCart = [];
  setCartItems([])
  localStorage.setItem('cartItems', JSON.stringify(newCart));
};
  return (
    <section >
    <Navbar itemCount ={cartItems.length}/>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={ <Cat/>}/>
      <Route path='/details/:slug' element={ <Details/>}/>
      <Route path='/category/:id' element={ <CatProd/>}/>
      <Route path='/cart' element={ <Cart cartItems={cartItems} 
      onRemove={onRemove} sum = {sum}/>}/>
      <Route path='/products' 
      element={ <ProductList onAdd={onAdd} data = {data}/>}/>
      <Route path='/about' element={ <About/>}/>
      <Route path='/contact' element={ <Contact/>}/>
      <Route path='/payment' element={ <PaymentForm sum = {sum} 
      refresh= {refreshCart}/>}/>
    </Routes>
    </BrowserRouter>

  <footer >
      <br />
      <br />
      <br />
    <Footer/>
  </footer>
    </section>
  );
}

export default App;
