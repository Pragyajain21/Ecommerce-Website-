import React from "react";
import ProductDetails from "../ProductDetails";
import Container from "@/app/component/Container";
import ListRating from "./ListRating";
import { products } from "@/utils/products";

interface IPrams {
  productId?: any;
}

const Product = ({ params }: { params: IPrams }) => {
  const product = products.find((item) => item.id === params.productId);
  return (
    <div>
      <Container>
        <ProductDetails product={product} />
        <div className="flex flex-col mt-20 gap-4">
          <div>Add ratings</div>
          <ListRating product={product} />
        </div>
      </Container>
    </div>
  );
};

export default Product;
