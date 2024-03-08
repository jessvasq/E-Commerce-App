import './App.css';
import { BrowserRouter as  Route, RouterProvider, createBrowserRouter} from 'react-router-dom';
import { Outlet } from 'react-router-dom';

import NavBar from './components/NavBar/NavBar';
import Footer from './components/Footer/Footer';
import Home from './pages/Home/Home';
import Product from './pages/Product/Product';
import Products from './pages/Products/Products';

const Layout  = () => {
  return (
    <div className='app'>
      <NavBar />
      <Outlet />
      <Footer /> 
    </div>
  )
}

const router = createBrowserRouter([{
    path: '/',
    element: <Layout/>, 
    children: [
      {
        path:'/', 
        element: <Home />
      }, 
      {
        path: '/product/:id', 
        element: <Product />
      }, 
      {
        path: '/products/:id',
        element: <Products />
      }
    ]
  },
])


function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
      {/* <Router>
        <Route exact path='/' element={Home} />
      </Router>
      <h1>E-Commerce</h1> */}
    </div>
  );
}

export default App;
