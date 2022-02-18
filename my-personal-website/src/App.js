import logo from './logo.svg';
import './App.css';
import { SideNavigation } from './componenets/side-navigation/sideNavigation';
import Header from './componenets/header';
import Introduciton from './componenets/sections/introduction';
import Home from './componenets/sections/home';

function App() {
  return (
    <div className="grid grid-cols-8 bg-primary text-white font-sans">
      <div className= "col-start-1 col-end-8 ml-10 mr-10">
        <div className="min-h-screen" id="section-1"> 
          <Home></Home>
        </div>
        <div className="min-h-screen ml-24" id="section-2"> 
          <Introduciton></Introduciton>
        </div>
      </div>
      <div>
        <SideNavigation></SideNavigation>
      </div>
    </div>
  );
}

export default App;
