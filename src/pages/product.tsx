import React from "react";
import { Page, Navbar, BlockTitle, Block, useStore } from "framework7-react";

interface Product {
  id: string;
  title: string;
  description: string;
}

interface ProductPageProps {
  f7route: {
    params: {
      id: string;
    };
  };
}

const ProductPage: React.FC<ProductPageProps> = ({ f7route }) => {
  const productId = f7route.params.id;

  const products = useStore("products") as Product[];

  const currentProduct = products.find((product) => product.id === productId);

  if (!currentProduct) {
    return (
      <Page name="product">
        <Navbar title="Product Not Found" backLink="Back" />
        <BlockTitle>Product Not Found</BlockTitle>
        <Block>The requested product does not exist.</Block>
      </Page>
    );
  }

  return (
    <Page name="product">
      <Navbar title={currentProduct.title} backLink="Back" />
      <BlockTitle>About {currentProduct.title}</BlockTitle>
      <Block>{currentProduct.description}</Block>
    </Page>
  );
};

export default ProductPage;
