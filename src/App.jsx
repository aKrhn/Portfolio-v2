import Header from "./components/header/Header";
import Present from "./components/present/Present"
import Portfolio from "./components/portfolio/Portfolio"
import Contact from "./components/contact/Contact"
import "./app.scss"
import { useState } from "react";
import Menu from "./components/menu/Menu";

function App() {
  const [menuOpen,setMenuOpen] = useState(false)
  return (
    <div className="app">
     <Header menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
     <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
     <div className="sections">
       <Present/>
       <Portfolio/>
       <Contact/>
     </div>
    </div>
  );
}

export default App;
