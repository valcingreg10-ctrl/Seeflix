import Home from './pages/home'
import Media from './pages/Media';
import Contact from './pages/Contact';
import About from './pages/About';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import Footer from "./components/home/Footer"
function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
      
      <Route path='/' element={<Home/>} />
      <Route path='/media' element={<Media/>}/>
      <Route path='/contact' element={<Contact/>}/>
      <Route path='/about' element={<About/>}/>

      </Routes>
      <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
