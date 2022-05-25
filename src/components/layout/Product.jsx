import "../../styles/layout/Product.scss";
import React, { useContext, useState } from "react";
import Counter from "../ui/Counter";
import Button from "../ui/Button";
import CartContext from "../../store/cart-context";
import ImageSlider from "../ui/ImageSlider";
import CartIcon from "../icon/CartIcon";

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
    if (quantity === 0) {
      console.log("Can't add 0 quantity.");
      return;
    }

    cartCtx.addItem({
      name: product.name,
      price: product.discountedPrice,
      imageThumbnailPath: product.imageThumbnailPath,
      quantity: quantity,
    });
  };

  return (
    <section className="product">
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
          <Counter
            className="product__quantity"
            value={quantity}
            setValue={setQuantity}
          />
          <Button className="product__cta" onClick={addToCartHandler}>
            <CartIcon className="product__cta-icon" />
            <span>Add to cart</span>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Product;
