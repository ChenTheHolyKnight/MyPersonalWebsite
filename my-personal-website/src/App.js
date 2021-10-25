import logo from './logo.svg';
import './App.css';
import { SideNavigation } from './componenets/side-navigation/sideNavigation';

function App() {
  return (
    <div className="grid grid-cols-8 bg-primary text-white font-sans">
      <div className= "col-span-7">
        <div className="min-h-screen" id="section-1"> Hello1</div>
        <div className="min-h-screen" id="section-2"> Hello2</div>
      </div>
      <div>
        <SideNavigation></SideNavigation>
      </div>
    </div>
  );
}

export default App;
