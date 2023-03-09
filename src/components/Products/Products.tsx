import React from "react";
import { IProduct } from "../../interface/types";
import img2 from "../../assets/imagePath/8.jpg";
import img3 from "../../assets/imagePath/6.jpg";
import img4 from "../../assets/imagePath/1.jpeg";
import img5 from "../../assets/imagePath/7.jpeg";
import img6 from "../../assets/imagePath/9.jpg";
import ProductItem from "../ProductItem/ProductItem";

const products: IProduct[] = [
  {
    _id: "1",
    imagePath: img2,
    name: "Sprite 1L",
    price: 10,
  },
  {
    _id: "2",
    imagePath: img3,
    name: "Sprite 0.5L",
    price: 7,
  },
  {
    _id: "3",
    imagePath: img4,
    name: "Coca-cola 0.5L",
    price: 6,
  },
  {
    _id: "4",
    imagePath: img5,
    name: "sprite 1.5L",
    price: 12,
  },
  {
    _id: "6",
    imagePath: img6,
    name: "Fanta 1L",
    price: 11,
  },
];

const Products = () => {
  return (
    <div>
      {products.map((product) => (
        <ProductItem product={product} key={product._id} />
      ))}
    </div>
  );
};

export default Products;
