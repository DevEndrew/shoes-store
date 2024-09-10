import "./shoes.css";
import "../../components/global.css";

function Shoes() {
  return (
    <>
      <section className="header-shoes">
        <div className="container-shoes">
          <div className="text-shoes">
            <h1>Os melhores em só lugar 👟</h1>
            <p>
              A marca Jordan na Shoes Store é a escolha certa para os amantes de
              sneakers que buscam estilo e conforto.
            </p>
            <p></p>
          </div>
        </div>
      </section>
      <main className="shoes">
        <div className="container-grid">
          <div className="productsGrid">
            <a href="" className="productItem">
              <div className="photo">
                <img src="../../../public/jordan.png" alt="" />
              </div>
              <div className="info">
                <div className="productCategory">Casual</div>
                <div className="productName">Air Jordan 1 Mid Dutch Green</div>
                <div className="productPrice">R$ 1.199,99</div>
              </div>
            </a>
          </div>
          <div className="productsGrid">
            <a href="" className="productItem">
              <div className="photo">
                <img src="../../../public/jordan2.png" alt="" />
              </div>
              <div className="info">
                <div className="productCategory">Casual</div>
                <div className="productName">
                  Air Jordan 1 High Zoom CMFT Tropical Twist
                </div>
                <div className="productPrice">R$ 1.199,99</div>
              </div>
            </a>
          </div>
          <div className="productsGrid">
            <a href="" className="productItem">
              <div className="photo">
                <img src="../../../public/jordan3.png" alt="" />
              </div>
              <div className="info">
                <div className="productCategory">Casual</div>
                <div className="productName">
                  Air Jordan 1 Mid "White Black"
                </div>
                <div className="productPrice">R$ 1.199,99</div>
              </div>
            </a>
          </div>
          <div className="productsGrid">
            <a href="" className="productItem">
              <div className="photo">
                <img src="../../../public/jordan4.png" alt="" />
              </div>
              <div className="info">
                <div className="productCategory">Casual</div>
                <div className="productName">
                  Air Jordan 1 Mid GS "Light Smoke Grey"
                </div>
                <div className="productPrice">R$ 1.199,99</div>
              </div>
            </a>
          </div>
          <div className="productsGrid">
            <a href="" className="productItem">
              <div className="photo">
                <img src="../../../public/jordan5.png" alt="" />
              </div>
              <div className="info">
                <div className="productCategory">Casual</div>
                <div className="productName">
                  Air Jordan 1 Mid SE Bright Citrus
                </div>
                <div className="productPrice">R$ 1.199,99</div>
              </div>
            </a>
          </div>
          <div className="productsGrid">
            <a href="" className="productItem">
              <div className="photo">
                <img src="../../../public/jordan6.png" alt="" />
              </div>
              <div className="info">
                <div className="productCategory">Casual</div>
                <div className="productName">Air Jordan 1 Mid Grey Camo</div>
                <div className="productPrice">R$ 1.199,99</div>
              </div>
            </a>
          </div>
        </div>
      </main>
    </>
  );
}

export default Shoes;
