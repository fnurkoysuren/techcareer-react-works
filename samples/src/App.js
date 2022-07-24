import { useContext } from "react";
import { Link, Route, Router, Routes } from "react-router-dom";
import AutocompleteSample from "./metarialSample/AutocompleteSample";
import DataDisplay from "./metarialSample/DataDisplay";
import ProductDataGrid from "./metarialSample/ProductDataGrid";
import RefHookSample from "./otherHooks/RefHookSample";
import QuizAppSample from "./quizApp/QuizAppSample";
import AboutPage from "./routerSample/AboutPage";
import CartPage from "./routerSample/CartPage";
import ContactPage from "./routerSample/ContactPage";
import HomePage from "./routerSample/HomePage";
import NoMatch from "./routerSample/NoMatch";
import ProductDetail from "./routerSample/ProductDetail";
import ProductList from "./routerSample/ProductList";
import { cartContext } from "./store/cartContext";
function App() {

  const { cart, setCart } = useContext(cartContext)

  let totalPrice = 0;

  cart.forEach(element => {
    totalPrice += (element.price * element.quantity)
  });

  return (<>
    <h1>Site Header</h1>
    <h1>Cart Count: {cart.length}</h1>
    <h1>Total Price: {totalPrice.toFixed(2)}</h1>

    <ul>
      <li><Link to={'/'}>Home</Link></li>
      <li><Link to={'/hakkimizda'}>About</Link></li>
      <li><Link to={'/iletisim'}>Contact</Link></li>
      <li><Link to={'/urunler'}>Products</Link></li>
      <li><Link to={'/datadisplay'}>Metarial Data Display</Link></li>
      <li><Link to={'/productdatagrid'}>Product Data Grid</Link></li>
      <li><Link to={'/autocomplete'}>Auto Complete Sample</Link></li>
      <li><Link to={'/cart'}>Cart Sample</Link></li>
      <li><Link to={'/refsample'}>Ref Sample</Link></li>
      <li><Link to={'/quizapp'}>Quiz App Sample</Link></li>
      
    </ul>

    <Routes>
      <Route path="/" element={<HomePage />}></Route>
      <Route path="/hakkimizda" element={<AboutPage />}></Route>
      <Route path="/iletisim" element={<ContactPage />}></Route>
      <Route path="/urunler" element={<ProductList />}></Route>
      <Route path="/urunler/:id" element={<ProductDetail />}></Route>
      <Route path='/datadisplay' element={<DataDisplay />}></Route>
      <Route path="/productdatagrid" element={<ProductDataGrid />}></Route>
      <Route path="/autocomplete" element={<AutocompleteSample />}></Route>
      <Route path="/cart" element={<CartPage />}></Route>
      <Route path="/refsample" element={<RefHookSample/>}></Route>
      <Route path="/quizapp" element={<QuizAppSample/>}></Route>

      <Route path="*" element={<NoMatch />}></Route>
    </Routes>
    <h1>Site Footer</h1>
  </>
  )
}

export default App;
