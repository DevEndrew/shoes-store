import "./header.css";
import "../global.css";

function Header() {
  return (
    <>
      <header>
        <div className="container">
          <div className="line-part">
            <p className="message">Frete grátis para todo o Brasil!</p>
          </div>
        </div>
        <nav>
          <div className="container-nav">
            <div className="logo">
              Shoes <span>Store</span>
            </div>
            <div className="search">
              <input type="text" className="search-nav" placeholder="Buscar" />
              <i className="bx bx-search"></i>
            </div>
            <section>
              <ul className="menu-categorias">
                <li>
                  <a href="#" className="option">
                    Feminino ▾
                  </a>
                  <ul className="dropdown">
                    <li>
                      <a href="#">Casual</a>
                    </li>
                    <li>
                      <a href="#">Basquete</a>
                    </li>
                    <li>
                      <a href="#">Skate</a>
                    </li>
                  </ul>
                </li>
                <li>
                  <a href="#" className="option">
                    Masculino ▾
                  </a>
                  <ul className="dropdown">
                    <li>
                      <a href="#">Casual</a>
                    </li>
                    <li>
                      <a href="#">Basquete</a>
                    </li>
                    <li>
                      <a href="#">Skate</a>
                    </li>
                  </ul>
                </li>
                <li>
                  <a href="#" className="option">
                    Crianças ▾
                  </a>
                  <ul className="dropdown">
                    <li>
                      <a href="#">Casual</a>
                    </li>
                    <li>
                      <a href="#">Basquete</a>
                    </li>
                    <li>
                      <a href="#">Skate</a>
                    </li>
                  </ul>
                </li>
              </ul>
            </section>

            <div className="cart-nav">
              <i className="bx bx-cart-alt"></i>
              <p>Carrinho</p>
              <p>
                ( <span className="cart-counter">0</span> )
              </p>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
}

export default Header;
