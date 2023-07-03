import React from 'react';
import './TermsCss/Terms.css';

const Terms8 = () => {
  const numbers8 = [
    {
      name: ') Prices and Payment Terms',
      elements8: [
        'These General Terms & Conditions UK SOFT LTD (Company number 12461899) shall apply to all contracts of the Seller and a contracting partner (hereinafter “Customer”) on the sale, delivery and temporary provision of digital contents, digital goods and non-digital goods (hereinafter collectively also “Goods”). To the extent that the Seller also offers services, the Seller shall render them exclusively as ancillary service to the aforementioned purchase contracts. Deviating, conflicting or complementing General Terms & Provisions of the Customer shall become part of a contract only if and to the extent that the Seller expressly consented to their application. A tacit recognition of General Terms & Conditions of the Customer by the Seller by conclusive behaviour shall be excluded. Such consent requirement shall apply in any case, including, for example, if the Seller unconditionally renders services towards the Customer while being aware of the Customer’s General Terms & Conditions.',
        'These GTC shall apply towards both consumers (section 14 BGB (German Civil Code)) and entrepreneurs (section 14 BGB). Unless the GTC below contain separate notes, any and all terms shall equally apply to contracts with entrepreneurs and consumers. Where individual terms do not apply to consumers at all or only in modified form, this shall be expressly mentioned.',
        'These terms shall also apply to future contractual relationships between the Customer and the Seller where the Customer is an entrepreneur',
        'Digital contents in the sense hereof shall be all digital services, except for digital Goods, any digitally existing access codes, product keys or other digitally existing information.',
        'Digital Goods in the sense hereof shall be any software not existing on a physical data carrier that is provided by the Seller for downloading, where appropriate with certain rights of use being granted under cl. 5 and 6.',
        'Non-digital Goods in the sense hereof shall be any software existing on a physical data carrier that is distributed in physical form by the Seller, where appropriate with certain rights of use being granted under cl. 5 and 6, as well as other physical products.',
        'The Seller operates an online shop via its own website (hereinafter “Online Shop”). In addition, the Seller also sells products via various marketplaces, such as ebay.de, rakuten.de, or rueducommerce.fr (hereinafter individually “Marketplace” and collectively “Marketplaces”).',
        'By sending the purchase order under cl. 2.2, the Customer shall agree with these GTC.',
      ],
    },
  ];

  return (
    <>
      <div className="container terms-contents-container">
        <div className="row">
          {numbers8.map((list, index) => (
            <div className="table-contents" key={list.name}>
              <ol start={index + 8} className="outer-ol8">
                <li>
                  {list.name}
                  <ol className="inner-ol8">
                    {list.elements8.map((element8, subIndex) => (
                      <li key={subIndex}>{element8}</li>
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

export default Terms8;
