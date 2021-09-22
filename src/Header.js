import { useState } from "react";

function Header() {
  const [burger, openBurgerMenu] = useState(false);

  return (
    <header id="header" role="navigation">
      <div className="page-container flex-container-nav">
        <h2 id="site-name">
          <a href="http://navaneeth.dev">navaneeth ashok</a>
        </h2>
        <nav id="main-menu">
          <h3 className="hidden">Main navigation</h3>
          <i
            className={burger ? "menu-btn menu-btn-open" : "menu-btn"}
            id="menu-btn-id"
            onClick={() => {
              console.log(`Menu Clicked`);
              openBurgerMenu(!burger);
            }}
          ></i>
          <ul className={burger ? "menu-block li" : "menu"}>
            <li>
              <a href="#about" className="nav-cls">
                about
              </a>
            </li>

            <li>
              <a href="#portfolio" className="nav-cls">
                projects
              </a>
            </li>
            <li>
              <a href="#contact" className="nav-cls">
                contact
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
