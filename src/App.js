// import logo from './logo.svg';
import './App.css';
import Header from './includes/Header';
import HeaderBottom from './includes/HeaderBottom';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from './components/screens/Home';
import Footer from './components/footer/Footer';
import Products from './components/screens/Products'
import Detail from './components/screens/Detail';



function App() {
  return (  
    <>
      <Router>
        <Header/>
        <HeaderBottom/>
        <div className='wrapper'> 
          <Routes>
            <Route path='/' element={<Home/>}/>    
            <Route path='/product' element={<Products/>}/>
            <Route path='/detail/:id' element={<Detail/>}/>
          </Routes>
        </div>
        <Footer/>
     </Router>
    </> 
  );
}

export default App;
