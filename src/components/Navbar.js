import React from "react";
// import "./LayoutSummary.css";
// import "./GlobalSummary.css";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="container">
        <a href="hulk">Hulk</a>
        {/* <!-- Currently Active --> */}
        <a href="mavel" className="logo is-active">
          Mavel
        </a>
        <a href="venom">Venom</a>
      </div>
    </nav>
  );
}

export default Navbar;
