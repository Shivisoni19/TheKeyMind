import React from 'react';
import './TermsCss/Terms.css';

const Terms9 = () => {
  const numbers9 = [
    {
      name: ') Delivery & Shipping Terms',
      elements9: [
        'These General Terms & Conditions UK SOFT LTD (Company number 12461999) shall apply to all contracts of the Seller and a contracting partner (hereinafter “Customer”) on the sale, delivery and temporary provision of digital contents, digital goods and non-digital goods (hereinafter collectively also “Goods”). To the extent that the Seller also offers services, the Seller shall render them exclusively as ancillary service to the aforementioned purchase contracts. Deviating, conflicting or complementing General Terms & Provisions of the Customer shall become part of a contract only if and to the extent that the Seller expressly consented to their application. A tacit recognition of General Terms & Conditions of the Customer by the Seller by conclusive behaviour shall be excluded. Such consent requirement shall apply in any case, including, for example, if the Seller unconditionally renders services towards the Customer while being aware of the Customer’s General Terms & Conditions.',
        'These GTC shall apply towards both consumers (section 14 BGB (German Civil Code)) and entrepreneurs (section 14 BGB). Unless the GTC below contain separate notes, any and all terms shall equally apply to contracts with entrepreneurs and consumers. Where individual terms do not apply to consumers at all or only in modified form, this shall be expressly mentioned.',
        'These terms shall also apply to future contractual relationships between the Customer and the Seller where the Customer is an entrepreneur',
      ],
    },
  ];

  return (
    <>
      <div className="container terms-contents-container">
        <div className="row">
          {numbers9.map((list, index) => (
            <div className="table-contents" key={list.name}>
              <ol start={index + 9} className="outer-ol9">
                <li>
                  {list.name}
                  <ol className="inner-ol9">
                    {list.elements9.map((element9, subIndex) => (
                      <li key={subIndex}>{element9}</li>
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

export default Terms9;
