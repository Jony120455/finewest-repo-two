import logo from './logo.svg';
import './App.css';
import Home from './pages/Home';
import { Route, Routes } from 'react-router-dom';
import About from './pages/about/About';
import Blog from './pages/blog/Blog';
import Features from './pages/features/Features';
import Pricing from './pages/pricing/Pricing';
import Faq from './pages/faq/Faq';


function App() {
  return (
    <div className="">
      <Routes>
      <Route path="/" element={<Home></Home>}/>
      <Route path="/about" element={<About></About>}/>
      <Route path="/blog" element={<Blog></Blog>}/>
      <Route path="/features" element={<Features></Features>}/>
      <Route path="/pricing" element={<Pricing></Pricing>}/>
      <Route path="/faq" element={<Faq></Faq>}/>
      
      
      </Routes>
      
    </div>
  );
}

export default App;
