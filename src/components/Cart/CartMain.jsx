import React , { useState} from 'react'
import { Link } from "react-router-dom";

const CartMain = () => {
    const [products, setProducts] = useState([
        {
          id: 1,
          name: "Grey California Dress",
          size: "XL",
          color: "Black",
          price: 3199.0,
          quantity: 1,
        },
        {
          id: 2,
          name: "Grey California Dress",
          size: "XL",
          color: "Black",
          price: 3199.0,
          quantity: 1,
        },
      ]);
    
      const removeProduct = (id) => {
        const updatedProducts = products.filter((product) => product.id !== id);
        setProducts(updatedProducts);
      };
  return (
    <div>
      <div className="check-infos">
          <div className="row">
            <div className="col-md-8">
              <div style={{ overflowX: "auto" }}>
                <table>
                  <thead>
                    <tr>
                      <th></th>
                      <th>Details</th>
                      <th>Price</th>
                      <th>Quantity</th>
                      <th>Subtotal</th>
                      <th></th>
                    </tr>
                  </thead>
                  <tbody>
                    {products.map((product) => (
                      <tr key={product.id}>
                        <td>
                          <img
                            src="img/products/p-1.jpg"
                            width="120"
                            alt=""
                          />
                        </td>
                        <td>
                          <h6>{product.name}</h6>
                          <p>
                            Size: <span>{product.size}</span>
                          </p>
                          <p>
                            Color: <span>{product.color}</span>
                          </p>
                        </td>
                        <td>$ {product.price.toFixed(2)}</td>
                        <td>
                          <input
                            type="number"
                            className="quantity_wanted"
                            placeholder="1"
                            value={product.quantity}
                            onChange={(e) => {
                              const updatedProducts = products.map((p) =>
                                p.id === product.id
                                  ? { ...p, quantity: parseInt(e.target.value) }
                                  : p
                              );
                              setProducts(updatedProducts);
                            }}
                          />
                        </td>
                        <td>
                          $ {(product.price * product.quantity).toFixed(2)}
                        </td>
                        <td>
                          <button
                            onClick={() => removeProduct(product.id)}
                            className="delete-btn"
                          >
                            <img src="img/delete.png" alt="" />
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
            <div className="col-md-4">
              <div className="check-aside">
                <div className="shipping">
                  <h6>CALCULATE SHIPPING</h6>
                  <select className="select">
                    <option value="Select Size">Select Country</option>
                    <option value="Albania">Albania</option>
                    <option value="Australia">Australia</option>
                    <option value="UK">United Kingdom</option>
                    <option value="US">United States</option>
                  </select>
                  <select className="select">
                    <option value="Select Size">Select State</option>
                    <option value="Albania">Albania</option>
                    <option value="Australia">Australia</option>
                    <option value="UK">United Kingdom</option>
                    <option value="US">United States</option>
                  </select>
                  <input type="text" placeholder="Zip/Postcode" />
                </div>
                <div className="orders mb20">
                  <h6>Cart totals</h6>
                  <p>
                    Cart Subtotal: <span>$ 4 122</span>
                  </p>
                  <p>
                    Shipping and Handling: <span>$ 250</span>
                  </p>
                  <p className="bd0">
                    <strong>
                      Order Total: <span>$ 4 372</span>
                    </strong>
                  </p>
                  <Link to="/checkout">
                    <button className="viewcard">CheckOut</button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
    </div>
  )
}

export default CartMain
