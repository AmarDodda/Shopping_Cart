import React, { useState } from 'react';
import './App.css';

function App() {
  const [cartQuantity, setCartQuantity] = useState(0);

  // Define individual cards with their own inCart state
  const [card1, setCard1] = useState({ id: 1, inCart: false });
  const [card2, setCard2] = useState({ id: 2, inCart: false });
  const [card3, setCard3] = useState({ id: 3, inCart: false });
  const [card4, setCard4] = useState({ id: 4, inCart: false });
  const [card5, setCard5] = useState({ id: 5, inCart: false });
  const [card6, setCard6] = useState({ id: 6, inCart: false });
  

  // Function to handle adding a card to the cart
  const addToCart = (cardId) => {
    setCartQuantity(cartQuantity + 1);
    switch (cardId) {
      case 1:
        setCard1({ ...card1, inCart: true });
        break;
      case 2:
        setCard2({ ...card2, inCart: true });
        break;
      case 3:
        setCard3({ ...card3, inCart: true });
        break;
      case 4:
        setCard4({ ...card4, inCart: true });
        break;
      case 5:
        setCard5({ ...card5, inCart: true });
        break;
      case 6:
        setCard6({ ...card6, inCart: true });
        break;
        default:
        break;
    }
  };

  // Function to handle removing a card from the cart
  const removeFromCart = (cardId) => {
    if (cartQuantity > 0) {
      setCartQuantity(cartQuantity - 1);
      switch (cardId) {
        case 1:
          setCard1({ ...card1, inCart: false });
          break;
        case 2:
          setCard2({ ...card2, inCart: false });
          break;
        case 3:
          setCard3({ ...card3, inCart: false });
          break;
        case 4:
          setCard4({ ...card4, inCart: false });
          break;
        case 5:
          setCard5({ ...card5, inCart: false });
          break;
        case 6:
          setCard6({ ...card6, inCart: false });
          break;
          default:
          break;
      }
    }
  };


  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container px-4 px-lg-5">
          <a className="navbar-brand" href="#!">Start Bootstrap</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 ms-lg-4">
              <li className="nav-item"><a className="nav-link active" aria-current="page" href="#!">Home</a></li>
              <li className="nav-item"><a className="nav-link" href="#!">About</a></li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" id="navbarDropdown" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">Shop</a>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li><a className="dropdown-item" href="#!">All Products</a></li>
                  <li><hr className="dropdown-divider" /></li>
                  <li><a className="dropdown-item" href="#!">Popular Items</a></li>
                  <li><a className="dropdown-item" href="#!">New Arrivals</a></li>
                </ul>
              </li>
            </ul>
            <form className="d-flex">
              <button className="btn btn-outline-dark" type="submit">
                <i className="bi-cart-fill me-1"></i>
                Cart
                <span className="badge bg-dark text-white ms-1 rounded-pill">{cartQuantity}</span>
              </button>
            </form>
          </div>
        </div>
      </nav>

      <header className="bg-dark py-5">
        <div className="container px-4 px-lg-5 my-5">
          <div className="text-center text-white">
            <h1 className="display-4 fw-bolder">Shop in style</h1>
            <p className="lead fw-normal text-white-50 mb-0">With this shop hompeage template</p>
          </div>
        </div>
      </header>

      <section className="py-5">
        <div className="container px-4 px-lg-5 mt-5">
          <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
            {/* Product Cards */}
            <div className="col mb-5">
              <div className="card h-100">
                <div className="badge bg-dark text-white position-absolute" style={{ top: '0.5rem', right: '0.5rem' }}>Sale</div>
                <img className="card-img-top" src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg" alt="..." />
                <div className="card-body p-4">
                  <div className="text-center">
                    <h5 className="fw-bolder">Special Item</h5>
                    <div className="d-flex justify-content-center small text-warning mb-2">
                      <div className="bi-star-fill"></div>
                      <div className="bi-star-fill"></div>
                      <div className="bi-star-fill"></div>
                      <div className="bi-star-fill"></div>
                      <div className="bi-star-fill"></div>
                    </div>
                    <span className="text-muted text-decoration-line-through">$20.00</span>
                    $18.00
                  </div>
                </div>
                <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                  <div className="text-center">
                    {card1.inCart ? (
                      <button className="btn btn-outline-dark mt-auto" onClick={() => removeFromCart(card1.id)}>
                        Remove from Cart
                      </button>
                    ) : (
                      <button className="btn btn-outline-dark mt-auto" onClick={() => addToCart(card1.id)}>
                        Add to Cart
                      </button>
                    )}
                  </div>
                </div>
              </div>
            </div>
            {/* End of Card 1 */}

            {/* Card 2 */}
            <div className="col mb-5">
              <div className="card h-100">
                <div className="badge bg-dark text-white position-absolute" style={{ top: '0.5rem', right: '0.5rem' }}>Sale Item</div>
                <img className="card-img-top" src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg" alt="..." />
                <div className="card-body p-4">
                  <div className="text-center">
                    <h5 className="fw-bolder">Sale Item</h5>
                    <span className="text-muted text-decoration-line-through">$50.00</span>
                    $25.00
                  </div>
                </div>
                <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                  <div className="text-center">
                    {card2.inCart ? (
                      <button className="btn btn-outline-dark mt-auto" onClick={() => removeFromCart(card2.id)}>
                        Remove from Cart
                      </button>
                    ) : (
                      <button className="btn btn-outline-dark mt-auto" onClick={() => addToCart(card2.id)}>
                        Add to Cart
                      </button>
                    )}
                  </div>
                </div>
              </div>
            </div>

            <div className="col mb-5">
    <div className="card h-100">
        <img className="card-img-top" src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg" alt="..." />
        <div className="card-body p-4">
            <div className="text-center">
                <h5 className="fw-bolder">Popular Item</h5>
                <div className="d-flex justify-content-center small text-warning mb-2">
                    <div className="bi-star-fill"></div>
                    <div className="bi-star-fill"></div>
                    <div className="bi-star-fill"></div>
                    <div className="bi-star-fill"></div>
                    <div className="bi-star-fill"></div>
                </div>
                $40.00
            </div>
        </div>
        <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
            <div className="text-center">
            {card3.inCart ? (
                      <button className="btn btn-outline-dark mt-auto" onClick={() => removeFromCart(card3.id)}>
                        Remove from Cart
                      </button>
                    ) : (
                      <button className="btn btn-outline-dark mt-auto" onClick={() => addToCart(card3.id)}>
                        Add to Cart
                      </button>
                    )}
            </div>
        </div>
    </div>
</div>

<div className="col mb-5">
    <div className="card h-100">
        <img className="card-img-top" src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg" alt="..." />
        <div className="card-body p-4">
            <div className="text-center">
                <h5 className="fw-bolder">Sale Item</h5>
                <span className="text-muted text-decoration-line-through">$50.00</span>
                $25.00
            </div>
        </div>
        <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
            <div className="text-center">
                {card4.inCart ? (
                    <button className="btn btn-outline-dark mt-auto" onClick={() => removeFromCart(card4.id)}>
                        Remove from Cart
                    </button>
                ) : (
                    <button className="btn btn-outline-dark mt-auto" onClick={() => addToCart(card4.id)}>
                        Add to Cart
                    </button>
                )}
            </div>
        </div>
    </div>
</div>

<div className="col mb-5">
    <div className="card h-100">
        <img className="card-img-top" src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg" alt="..." />
        <div className="card-body p-4">
            <div className="text-center">
                <h5 className="fw-bolder">Special Item</h5>
                <div className="d-flex justify-content-center small text-warning mb-2">
                    <div className="bi-star-fill"></div>
                    <div className="bi-star-fill"></div>
                    <div className="bi-star-fill"></div>
                    <div className="bi-star-fill"></div>
                    <div className="bi-star-fill"></div>
                </div>
                <span className="text-muted text-decoration-line-through">$20.00</span>
                $18.00
            </div>
        </div>
        <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
            <div className="text-center">
                {card5.inCart ? (
                    <button className="btn btn-outline-dark mt-auto" onClick={() => removeFromCart(card5.id)}>
                        Remove from Cart
                    </button>
                ) : (
                    <button className="btn btn-outline-dark mt-auto" onClick={() => addToCart(card5.id)}>
                        Add to Cart
                    </button>
                )}
            </div>
        </div>
    </div>
</div>

<div className="col mb-5">
    <div className="card h-100">
        <img className="card-img-top" src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg" alt="..." />
        <div className="card-body p-4">
            <div className="text-center">
                <h5 className="fw-bolder">Popular Item</h5>
                <div className="d-flex justify-content-center small text-warning mb-2">
                    <div className="bi-star-fill"></div>
                    <div className="bi-star-fill"></div>
                    <div className="bi-star-fill"></div>
                    <div className="bi-star-fill"></div>
                    <div className="bi-star-fill"></div>
                </div>
                $40.00
            </div>
        </div>
        <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
            <div className="text-center">
                {card6.inCart ? (
                    <button className="btn btn-outline-dark mt-auto" onClick={() => removeFromCart(card6.id)}>
                        Remove from Cart
                    </button>
                ) : (
                    <button className="btn btn-outline-dark mt-auto" onClick={() => addToCart(card6.id)}>
                        Add to Cart
                    </button>
                )}
            </div>
        </div>
    </div>
</div>


            {/* End of Product Cards */}
          </div>
        </div>
      </section>

      <footer className="py-5 bg-dark">
        <div className="container">
          <p className="m-0 text-center text-white">Copyright &copy; Your Website 2023</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
