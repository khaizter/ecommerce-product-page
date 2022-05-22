import "../../styles/layout/Product.scss";
import React, { useContext, useState } from "react";
import Counter from "../ui/Counter";
import Button from "../ui/Button";
import CartContext from "../../store/cart-context";
import ImageSlider from "../ui/ImageSlider";

const DUMMY_SLIDES = [
  {
    id: 1,
    imagePath: "./images/image-product-1.jpg",
    thumbnailPath: "./images/image-product-1-thumbnail.jpg",
    alt: "product 1",
  },
  {
    id: 2,
    imagePath: "./images/image-product-2.jpg",
    thumbnailPath: "./images/image-product-2-thumbnail.jpg",
    alt: "product 2",
  },
  {
    id: 3,
    imagePath: "./images/image-product-3.jpg",
    thumbnailPath: "./images/image-product-3-thumbnail.jpg",
    alt: "product 3",
  },
  {
    id: 4,
    imagePath: "./images/image-product-4.jpg",
    thumbnailPath: "./images/image-product-4-thumbnail.jpg",
    alt: "product 4",
  },
];

const initialProduct = {
  id: 491,
  company: "Sneaker Company",
  name: "Autumn Limited Edition Sneakers",
  description:
    "These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they'll withstand everything the weather can offer.",
  discountedPrice: 125.0,
  discount: 50,
  originalPrice: 250.0,
  imageThumbnailPath: "./images/image-product-1-thumbnail.jpg",
  imagePath: "./images/image-product-1.jpg",
};

const Product = ({ product = initialProduct }) => {
  const cartCtx = useContext(CartContext);
  const [quantity, setQuantity] = useState(0);

  const addToCartHandler = () => {
    if (quantity == 0) {
      console.log("Can't add 0 quantity.");
      return;
    }

    cartCtx.addItem({
      id: product.id,
      name: product.name,
      price: product.discountedPrice,
      imageThumbnailPath: product.imageThumbnailPath,
      quantity: quantity,
    });
  };

  return (
    <section className="product">
      {/* <div className="product__display">
        <img src={product.imagePath} alt="" />
      </div> */}
      <ImageSlider slides={DUMMY_SLIDES} />
      <div className="product__details">
        <h4 className="product__company">{product.company}</h4>
        <h1 className="product__name">{product.name}</h1>
        <p className="product__description">{product.description}</p>
        <div className="product__price">
          <div className="product__discounted-price">
            ${product.discountedPrice.toFixed(2)}
          </div>
          <div className="product__discount">{product.discount}%</div>
          <div className="product__original-price">
            ${product.originalPrice.toFixed(2)}
          </div>
        </div>
        <div className="product__actions">
          <Counter value={quantity} setValue={setQuantity} />
          <Button className="product__cta" onClick={addToCartHandler}>
            <svg width="22" height="20" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M20.925 3.641H3.863L3.61.816A.896.896 0 0 0 2.717 0H.897a.896.896 0 1 0 0 1.792h1l1.031 11.483c.073.828.52 1.726 1.291 2.336C2.83 17.385 4.099 20 6.359 20c1.875 0 3.197-1.87 2.554-3.642h4.905c-.642 1.77.677 3.642 2.555 3.642a2.72 2.72 0 0 0 2.717-2.717 2.72 2.72 0 0 0-2.717-2.717H6.365c-.681 0-1.274-.41-1.53-1.009l14.321-.842a.896.896 0 0 0 .817-.677l1.821-7.283a.897.897 0 0 0-.87-1.114ZM6.358 18.208a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm10.015 0a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm2.021-7.243-13.8.81-.57-6.341h15.753l-1.383 5.53Z"
                fill="#FFFFFF"
                fillRule="nonzero"
              />
            </svg>
            <span>Add to cart</span>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Product;
