import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
// import product from 'img/product/product-1.png'

const MicrosoftOfficeAppProducts = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchData = () => {
      const MicrosoftOfficeAppproducts = [
        {
          name: "Microsoft Project 2019 Professional - Licenza Microsoft",
          description: "$321.99",
          delprice:"$1,564.99",
          product_img: "img/subpages/Microsoftofficeapp/microsoft-project-2019-professional-licenza-microsoft.jpg",
        },
        {
          name: "Microsoft Project 2019 Professional - Licenza Microsoft",
          description: "$163.99",
          delprice:"$675.99",
          product_img: "img/subpages/Microsoftofficeapp/microsoft-project-2016-standard-microsoft-license.jpg",
        },
        {
          name: "Microsoft Project 2016 Professional - Microsoft License",
          description: "$195.99",
          delprice:"$1,286.99",
          product_img: "img/subpages/Microsoftofficeapp/microsoft-project-2016-professional-product-key.jpg",
        },
        {
          name: "Microsoft Project 2019 Standard - Product Key",
          description: "$257.99",
          delprice:"$889.99",
          product_img: "img/subpages/Microsoftofficeapp/microsoft-project-2019-standard-product-key.jpg",
        },
        {
          name: "Microsoft Project 2021 Professional - Product Key",
          description: "$369.999",
          delprice:"$1,779.99",
          product_img: "img/subpages/Microsoftofficeapp/microsoft-project-2021-professional-product-key.jpg",
        },
        {
          name: "Microsoft Project 2021 Standard - Product Key",
          description: "$321.99",
          delprice:"$996.99",
          product_img: "img/subpages/Microsoftofficeapp/microsoft-project-2021-standard-product-key.jpg",
        },
        {
          name: "Microsoft Project Professional 2010 - Product Key",
          description: "$107.99",
          delprice:"$160.99",
          product_img: "img/subpages/Microsoftofficeapp/microsoft-project-professional-2010-product-key.jpg",
        },
        {
          name: "Microsoft Project Professional 2013 - Product Key",
          description: "$139.99",
          delprice:"$203.99",
          product_img: "img/subpages/Microsoftofficeapp/microsoft-project-professional-2013-product-key.jpg",
        },
        {
          name: "Microsoft Project Standard 2010 - Product Key",
          description: "$85.99",
          delprice:"127.99",
          product_img: "img/subpages/Microsoftofficeapp/microsoft-project-standard-2010-product-key.jpg",
        },
        {
          name: "Word 2021 For Mac - Product Key",
          description: "$85.99",
          delprice:"$150.99",
          product_img: "img/subpages/Microsoftofficeapp/word-2021-for-mac-product-key.jpg",
        },
        {
          name: "Word 2021 - Product Key",
          description: "$64.99",
          delprice:"$160.99",
          product_img: "img/subpages/Microsoftofficeapp/word-2021-product-key.jpg",
        },
        {
          name: "Access 2010 - Product Key",
          description: "$21.999",
          delprice:"$53.99",
          product_img: "img/subpages/Microsoftofficeapp/access-2010-product-key.jpg",
        },
        {
          name: "Access 2013 - Product Key",
          description: "$21.99",
          delprice:"$53.99",
          product_img: "img/subpages/Microsoftofficeapp/access-2013-product-key.jpg",
        },
        {
          name: "Access 2016 - Product Key",
          description: "$32.999",
          delprice:"$53.99",
          product_img: "img/subpages/Microsoftofficeapp/access-2016-product-key.jpg",
        },
        {
          name: "Access 2019 - Product Keyft",
          description: "$58.999",
          delprice:"$75.99",
          product_img: "img/subpages/Microsoftofficeapp/access-2019-product-key.jpg",
        },
        {
          name: "Access 2021 - Product Key",
          description: "$64.99",
          delprice:"$160.99",
          product_img: "img/subpages/Microsoftofficeapp/access-2021-product-key.jpg",
        },
        {
          name: "Excel 2021 - Product Key",
          description: "$64.99",
          delprice:"$160.99",
          product_img: "img/subpages/Microsoftofficeapp/excel-2021-product-key.jpg",
        },
        {
          name: "OneNote 2013 - Product Key",
          description: "$32.99",
          delprice:"$53.99",
          product_img: "img/subpages/Microsoftofficeapp/onenote-2013-product-key.jpg",
        },
        {
          name: "Outlook 2016 - Product Keyt",
          description: "$53.99",
          delprice:"$75.99",
          product_img: "img/subpages/Microsoftofficeapp/outlook-2016-product-key.jpg",
        },
        {
          name: "Outlook 2019 - Product Key",
          description: "$64.99",
          delprice:"$128.99",
          product_img: "img/subpages/Microsoftofficeapp/outlook-2019-product-key.jpg",
        },
        {
          name: "Visio 2010 Professional - Product Key",
          description: "$96.99",
          delprice:"$546.99",
          product_img: "img/subpages/Microsoftofficeapp/visio-2010-professional-product-key.jpg",
        },
        {
          name: "Visio 2013 Professional - Product Key",
          description: "$128.99",
          delprice:"$761.99",
          product_img: "img/subpages/Microsoftofficeapp/visio-2013-professional-product-key.jpg",
        },
        {
          name: "Visio 2016 Professional - Product Key",
          description: "$192.99",
          delprice:"$846.99",
          product_img: "img/subpages/Microsoftofficeapp/visio-2016-professional-product-key.jpg",
        },
        {
          name: "Visio 2016 Standard - Product Key",
          description: "$139.99",
          delprice:"$450.99",
          product_img: "img/subpages/Microsoftofficeapp/visio-2016-standard-product-key.jpg",
        },
        {
          name: "Visio 2019 Professional - Product Key",
          description: "$246.99",
          delprice:"$857.99",
          product_img: "img/subpages/Microsoftofficeapp/visio-2019-professional-product-key.jpg",
        },
        {
          name: "Visio 2019 Standard - Product Key",
          description: "$214.99",
          delprice:"$471.99",
          product_img: "img/subpages/Microsoftofficeapp/visio-2019-standard-product-key.jpg",
        },
        {
          name: "Visio Professional 2021 - Product Key",
          description: "$321.99",
          delprice:"$953.99",
          product_img: "img/subpages/Microsoftofficeapp/visio-professional-2021-product-key.jpg",
        },
        {
          name: "Visio Standard 2021 - Product Key",
          description: "$235.99",
          delprice:"$514.99",
          product_img: "img/subpages/Microsoftofficeapp/visio-standard-2021-product-key.jpg",
        },
        {
          name: "Visual Studio 2017 Professional - Product Key",
          description: "$160.99",
          delprice:"$321.99",
          product_img: "img/subpages/Microsoftofficeapp/visual-studio-2017-professional-product-key.jpg",
        },
        {
          name: "Visual Studio 2019 Professional - Product Key",
          description: "$267.99",
          delprice:"$535.99",
          product_img: "img/subpages/Microsoftofficeapp/visual-studio-2019-professional-product-key.jpg",
        },
        {
          name: "Visual Studio Professional 2022 - Product Key",
          description: "$375.99",
          delprice:"$1,651.99",
          product_img: "img/subpages/Microsoftofficeapp/visual-studio-professional-2022-product-key.jpg",
        },
        
        
      ];

      setProducts(MicrosoftOfficeAppproducts);
    };

    fetchData();
  }, []);

  const renderProducts = () => {
    return products.map((product, index) => (
      <div key={index} className="col-md-3">
        <div className="container-fadeInTop">
          <div className="office-content">
            <img src={product.product_img} alt={product.name} style={{width:"100%"}}/>
            <div class="office-content-overlay"></div>
            <div className="office-content-details fadeIn-top">
              <Link href="#" className="medium-button button-red add-cart">
                Add to Cart
              </Link>
              <Link href="#" className="wishlist">
                 Go to Product
              </Link>
            </div>
          </div>
          <div className="arr-content">
            <Link href="#">
              <p>{product.name}</p>
            </Link>
            <ul>
              <li>
                <span className="d-flex">
                  <del className="delete-price">{product.delprice}</del>
                  <span className="low-price">{product.description}</span>
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    ));
  };

  return (
    <div className="container mt-50 mb-50">
      {/* <div className="row"> */}
        {renderProducts()}
      {/* </div> */}
    </div>
  );
};

export default MicrosoftOfficeAppProducts;
