import "./App.css";
import { Footer } from "./components/customComponents/Footer";
import { HeaderNavBar } from "./components/customComponents/HeaderNavBar";
import { Router } from "./components/routes";

function App() {
  return (
    <div className="App">
      <HeaderNavBar/>
        <Router/>
      <Footer/>
    </div>
  );
}

export default App;
