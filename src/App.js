import "./App.css";
import logo from "./logo.png";
import MockAPI from "./mockAPI";
import {Main} from './components/Main'
import { HeaderNavBar } from "./components/customComponents/HeaderNavBar";
import { Footer } from "./components/customComponents/Footer";

function App() {
  return (
    <div className="App">
      {/* <MockAPI/> */}
      <HeaderNavBar/>
      <Main/>
      <Footer/>
    </div>
  );
}

export default App;
