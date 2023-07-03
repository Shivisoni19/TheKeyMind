import React from 'react';
import './TermsCss/Terms.css';

const Terms11 = () => {
  const numbers11 = [
    {
      name: ') Warranty for Contracts under Cl. 3.2, 3.3 a) and 3.3 c)',
      elements11: [
        'These GTC shall apply towards both consumers (section 14 BGB (German Civil Code)) and entrepreneurs (section 14 BGB). Unless the GTC below contain separate notes, any and all terms shall equally apply to contracts with entrepreneurs and consumers. Where individual terms do not apply to consumers at all or only in modified form, this shall be expressly mentioned.',
        'These terms shall also apply to future contractual relationships between the Customer and the Seller where the Customer is an entrepreneur',
      ],
    },
  ];

  return (
    <>
      <div className="container terms-contents-container">
        <div className="row">
          {numbers11.map((list, index) => (
            <div className="table-contents" key={list.name}>
              <ol start={index + 11} className="outer-ol11">
                <li>
                  {list.name}
                  <ol className="inner-ol11">
                    {list.elements11.map((element11, subIndex) => (
                      <li key={subIndex}>{element11}</li>
                    ))}
                  </ol>
                </li>
              </ol>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Terms11;
