import React from "react";
import ProductCatalog from "../ProductCatalog";
// import SystemRequirements from "./SystemRequirements";

const EaseUsDescription = ({
  note,
  description,
  desc1heading,
  desc2heading,
  desc3heading,
  desc4heading,
  desc5heading,
  desc6heading,
  desc7heading,
  desc8heading,
  desc9heading,
  desc10heading,
  detail1,
  detail2,
  detail3,
  detail4,
  detail5,
  detail6,
  detail7,
  detail8,
  detail9,
  detail10,
  detail11,
  detail12,
  detail13,
  detail14,
  detail15,
  detail16,
  detail17,
  detail18,
  detail19,
  detail20,
  detail21,
  ulheading1,
  ulheading2,
  ulheading3,
  ulheading4,
  ulheading5,
  list1,
  list2,
  list3,
  list4,
  list5,
  list6,
  list7,
  list8,
  list9,
  list10,
  list11,
  list12,
  list13,
  list14,
  list15,
  list16,
  list17,
  list18,
  list19,
  list20,
  list21,
  list22,
  list23,
  list24,
  list25,
  list26,
  list27,
  list28,
  list29,
  list30,
  list31,
  list32,
}) => {
  return (
    <>
      <div className="blog">
        <div className="container description">
          <div class="text-to-action">
            <h2 class="text-uppercase-none mb30">Description</h2>
            <p className="text-uppercase-none">{description}</p>
            {/* <h5 className="text-uppercase-none">{note}</h5> */}

            <h4 className="text-uppercase-none">{desc1heading}</h4>
            <p>{detail1}</p>

            <h4 className="text-uppercase-none">{desc2heading}</h4>
            <p>{detail2}</p>
            <p>{detail3}</p>
            <p>{detail4}</p>
            
            <h4 className="text-uppercase-none">{desc3heading}</h4>

            <p className="text-uppercase-none">{ulheading1}</p>
            <ul className="mb20">
              <li>{list1}</li>
              <li>{list2}</li>
              <li>{list3}</li>
              <li>{list4}</li>
              <li>{list5}</li>
              <li>{list6}</li>
              <li>{list7}</li>
              <li>{list8}</li>
              <li>{list9}</li>
              <li>{list10}</li>
              <li>{list11}</li>
            </ul>
            
            <p>{detail5}</p>
            <p>{detail6}</p>

            <h4 className="text-uppercase-none">{desc4heading}</h4>
            <p>{detail7}</p>
            
            <h4 className="text-uppercase-none">{desc5heading}</h4>
            <p>{detail8}</p>
            
            <h4 className="text-uppercase-none">{desc6heading}</h4>
            <p>{detail9}</p>

            <h4 className="text-uppercase-none">{desc7heading}</h4>
            <p>{detail10}</p>

            <h4 className="text-uppercase-none">{desc8heading}</h4>
            <p>{detail11}</p>

            <h4 className="text-uppercase-none">{ulheading2}</h4>
            <ul className="mb20">
              
              <li>{list12}</li>
              <li>{list13}</li>
              <li>{list14}</li>
              <li>{list16}</li>
              <li>{list17}</li>
            </ul>
            
            <ProductCatalog />
          </div>
        </div>
      </div>
    </>
  );
};

export default EaseUsDescription;
