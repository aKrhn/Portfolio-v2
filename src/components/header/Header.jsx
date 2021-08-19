import "./header.scss";

export default function Header({ menuOpen, setMenuOpen }) {
  return (
    <div className={"header " + (menuOpen && "active")}>
      <div className="wrapper">
          <div className="hamburger" onClick={()=>setMenuOpen(!menuOpen)}>
            <span></span>
            <span></span>
            <span></span>
          </div>
      </div>
    </div>
  );
}
