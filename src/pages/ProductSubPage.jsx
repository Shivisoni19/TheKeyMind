import React from "react";
import PageMain from "../components/SubPage/PageMain";
import PageHeader from "../components/SubPage/PageHeader";
import PageHeading from "../components/SubPage/PageHeading";
import PageProducts from "../components/SubPage/PageProducts";

const ProductSubPage = () => {
  return (
    <>
      <PageHeader />
      <PageHeading />
      <PageProducts />
      <PageMain />
    </>
  );
};

export default ProductSubPage;
