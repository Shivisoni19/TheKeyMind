import React from 'react';
import './TermsCss/Terms.css';

const Terms17 = () => {
  const numbers17 = [
    {
      name: ') Affiliate Program',
      elements17: [
        'These GTC shall apply towards both consumers (section 14 BGB (German Civil Code)) and entrepreneurs (section 14 BGB). Unless the GTC below contain separate notes, any and all terms shall equally apply to contracts with entrepreneurs and consumers. Where individual terms do not apply to consumers at all or only in modified form, this shall be expressly mentioned.',
        'These terms shall also apply to future contractual relationships between the Customer and the Seller where the Customer is an entrepreneur',
      ],
    },
  ];

  return (
    <>
      <div className="container terms-contents-container">
        <div className="row">
          {numbers17.map((list, index) => (
            <div className="table-contents" key={list.name}>
              <ol start={index + 17} className="outer-ol17">
                <li>
                  {list.name}
                  <ol className="inner-ol17">
                    {list.elements17.map((element17, subIndex) => (
                      <li key={subIndex}>{element17}</li>
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

export default Terms17;
