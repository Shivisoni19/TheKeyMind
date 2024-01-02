import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./BestsellerProducts.css";
import { Link, useNavigate } from "react-router-dom";
import { db } from "../../firebase";
import { collection, onSnapshot } from "firebase/firestore";
import { Button } from "semantic-ui-react";

const BestsellerProducts = () => {
  
  const [users1, setUsers1] = useState([]);
  const [loading, setLoading] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
     setLoading(true);
     const unsub = onSnapshot(collection(db, "bestsellers"), (snapshot) => {
         let list = [];
         snapshot.docs.forEach((doc) => {
             list.push({id: doc.id, ...doc.data()})
         });
         setUsers1(list)
         setLoading(false);
     },
      (error) => {
        console.log(error);
      } 
     );
     return () => {
      unsub();
     }
  },[])

  // useEffect(() => {
  //   const fetchData = () => {
  //     const BestsellerProducts = [
  //       {
  //         name: "Windows 10 Professional 32/64 Bit - Product Key",
  //         rprice: "$112.99",
  //         nprice: "$39.99",
  //         product_img: "img/products/product-1.png",
  //       },
  //       {
  //         name: "Windows 10 Professional 32/64 Bit - Product Key",
  //         rprice: "$112.99",
  //         nprice: "$39.99",
  //         product_img: "img/products/product-1.png",
  //       },
  //       {
  //         name: "Windows 10 Professional 32/64 Bit - Product Key",
  //         rprice: "$112.99",
  //         nprice: "$39.99",
  //         product_img: "img/products/product-1.png",
  //       },
  //       {
  //         name: "Windows 10 Professional 32/64 Bit - Product Key",
  //         rprice: "$112.99",
  //         nprice: "$39.99",
  //         product_img: "img/products/product-1.png",
  //       },
  //       {
  //         name: "Windows 10 Professional 32/64 Bit - Product Key",
  //         rprice: "$112.99",
  //         nprice: "$39.99",
  //         product_img: "img/products/product-1.png",
  //       },
  //       {
  //         name: "Windows 10 Professional 32/64 Bit - Product Key",
  //         rprice: "$112.99",
  //         nprice: "$39.99",
  //         product_img: "img/products/product-1.png",
  //       },
  //     ];

  //     setProducts(BestsellerProducts);
  //   };

  //   fetchData();
  // }, []);

  const settings = {
    autoplay: true,
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4, // Display 4 products in one row
    slidesToScroll: 1, // Scroll one product at a time
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3, // Display 3 products in one row for screen width <= 1200px
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2, // Display 2 products in one row for screen width <= 992px
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1, // Display 1 product in one row for screen width <= 768px
        },
      },
    ],
  };

  return (
    <div className="bestsellers container mt-70 mb-50">
      <div className="row">
        <div className="title">
          <h1>
            <i className="fa fa-star"></i>BESTSELLERS<i className="fa fa-star"></i>
          </h1>
          <div className="title-border"></div>
        </div>
        <Slider {...settings}>
          {users1 && users1.map((product) => (
            <div key={product.id} className="col-lg-3 col-md-6 col-sm-6">
              <div className="container-fadeInTop mt30">
                <div className="office-content">
                  <img
                    src={product.img}
                    alt={product.name}
                    style={{ width: "100%" }}
                  />
                  <div className="office-content-overlay"></div>
                  <div className="office-content-details fadeIn-top">
                    {/* <Link to={`/product/${product.id}`} className="wishlist go-to-product-btn">
                      Go to Product
                    </Link> */}
                    {/* <Button onClick={() => navigate(`/bestsellerdata/${product.id}`,{
                      state:{bestsellerdataId: product.id}
                    })} className="wishlist">
                      Go To Product  
                    </Button> */}
                     <Button
                      onClick={() => navigate(`/bestsellerdata/${product.id}`, {
                        state: { bestsellerdataId: product.id }
                      })}
                      className="wishlist"
                    >
                      Go To Product
                    </Button>
                  </div>
                </div>
                <div className="arr-content">
                  <Link to={`/bestsellerdata/${product.id}`}>
                    <p>{product.name}</p>
                  </Link>
                  <ul>
                    <li>
                      <span className="d-flex">
                        <del className="delete-price">${product.rprice}</del>
                        <span className="low-price">${product.nprice}</span>
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default BestsellerProducts;
