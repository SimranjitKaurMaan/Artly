import "./App.css";
import { ToastContainer } from 'react-toastify';
import { Footer } from "./components/customComponents/Footer";
import { HeaderNavBar } from "./components/customComponents/HeaderNavBar";
import { Router } from "./components/routes";

function App() {
  return (
    <div className="App">
      <HeaderNavBar/>
      <ToastContainer/>
        <Router/>
      <Footer/>
    </div>
  );
}

export default App;
