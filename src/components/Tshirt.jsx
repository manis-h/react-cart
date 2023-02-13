import React from 'react'
import toast from "react-hot-toast";
import { useDispatch } from "react-redux";
const img1 =
"https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T2/images/I/81diI+5cpAL._AC_UL320_.jpg";
const img2 =
"https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T2/images/I/71BkK4MkLnL._AC_UL320_.jpg";
const img3 ="https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T2/images/I/91dfe8PaD+L._AC_UL320_.jpg";


function Tshirt() {
   
  const productList = [
    {
      name: "Denim Jacket",
      price: 120,
      imgSrc: img1,
      id: "dj1",
    },
    {
      name: "Tshirt",
      price: 50,
      imgSrc: img2,
      id: "ts1",
    },
    {
      name:"Jeans",
      price:59,
      imgSrc: img3,
      id:"js1"
    },
    {
        name:"Jeans",
        price:59,
        imgSrc: img3,
        id:"js2"
      }
  ];

  const dispatch = useDispatch();

  const addToCartHandler = (options) => {
    dispatch({ type: "addToCart", payload: options });
    dispatch({ type: "calculatePrice" });
    toast.success("Added To Cart");
  };
  
  return (
    <div className="home">
    <div className="container text-center">
      <h1 className="text-white">FEATURED PRODUCTS</h1>
    </div>
    {productList.map((i) => (
      <ProductCard
        key={i.id}
        imgSrc={i.imgSrc}
        name={i.name}
        price={i.price}
        id={i.id}
        handler={addToCartHandler}
      />
    ))}
  </div>
);
};

const ProductCard = ({ name, id, price, handler, imgSrc }) => (
<div className="productCard">
  <img src={imgSrc} alt={name} />
  <p>{name}</p>
  <h4 >${price}</h4>
  <button onClick={() => handler({ name, price, id, quantity: 1, imgSrc })}>
    Add to Cart
  </button>
</div>
);
  

export default Tshirt