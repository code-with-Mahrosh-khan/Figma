import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from './components/navbar';
import Homepage from './components/Homepage';
import Mainpage from './components/mainpage';
import Sidebar from './components/sidebar';
import Page from './components/page';
import Count from './components/about/Count';
import Footer from './components/footer';
import Thank from "./components/home/Thank";

function App() {
  return (
    <Router>
      <div className="bg-black">
        <Navbar />
       
        <Routes>
        <Route
            exact path={"/"} element={<><Homepage /> </> }
          />
          <Route exact path="/Mainpage" element={<Mainpage />} />

          <Route path="/sidebar" element={<Sidebar />} />
          <Route path="/page" element={<Page />} />
          <Route path="/Count" element={<Count />} />
          <Route path="/Footer" element={<Footer/>} />
        </Routes>
       
 <Routes>
<Route path="/thank" element={<Thank />} />
        </Routes>
        <Footer />

      </div>

    </Router>



  );
}

export default App;
