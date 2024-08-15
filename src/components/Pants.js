import React, { useContext } from 'react';
import CartContext from './CartContext';
import './Product.css';

const Pants = () => {
  const { addToCart } = useContext(CartContext);

  const pants = [
    {
      id: 1,
      name: 'Basic Jogger Trousers',
      price: '₹ 2550.00',
      discount: '10% off',
      shipping: 'Free Shipping',
      brand: 'Zara',
      image: 'https://static.zara.net/assets/public/edfd/dbe0/01654d45846d/ab1f3aaa3059/04393352807-e1/04393352807-e1.jpg?ts=1722871773842&amp;w=563',
    },
    {
      id: 2,
      name: 'Cotton - Linen Trousers',
      price: '₹ 4350.00',
      discount: '15% off',
      shipping: 'Free Shipping',
      brand: 'Zara',
      image: 'https://static.zara.net/assets/public/ad8c/51dd/c2814af48673/05ba05ef25b7/07147300700-e1/07147300700-e1.jpg?ts=1720108318006&amp;w=563',
    },
    {
      id: 3,
      name: 'Linen/Cotton Trousers',
      price: '₹ 4290.00',
      discount: '20% off',
      shipping: 'Free Shipping',
      brand: 'Zara',
      image: 'https://static.zara.net/assets/public/86f2/1df5/7cdb41c3bc20/5f69d35c0ff4/04302474515-e1/04302474515-e1.jpg?ts=1719560916108&amp;w=563',
    },
    {
      id: 4,
      name: 'Striped Textured Trousers',
      price: '₹ 4350.00',
      discount: '5% off',
      shipping: 'Free Shipping',
      brand: 'Zara',
      image: 'https://static.zara.net/assets/public/22c2/508d/761c48ccacb2/b21f3ca4d48e/01063300052-e1/01063300052-e1.jpg?ts=1719474262579&amp;w=563',
    },
    {
      id: 5,
      name: 'Faded Carpenter Trousers with Pocket',
      price: '₹ 4950.00',
      discount: '12% off',
      shipping: 'Free Shipping',
      brand: 'Zara',
      image: 'https://static.zara.net/assets/public/bd5a/d2d4/f8ae4b1c8f27/e28ff6db8698/01538398420-e1/01538398420-e1.jpg?ts=1721719008101&amp;w=563',
    },
    {
      id: 6,
      name: 'Textured Suit Trousers',
      price: '₹ 4990.00',
      discount: '18% off',
      shipping: 'Free Shipping',
      brand: 'Zara',
      image: 'https://static.zara.net/assets/public/b579/7cc8/eb554e7cb22d/e3c640250a74/01564421403-e1/01564421403-e1.jpg?ts=1723200212270&amp;w=563',
    },
    {
      id: 7,
      name: 'Pinstripe Suit Trousers',
      price: '₹ 4950.00',
      discount: '19% off',
      shipping: 'Free Shipping',
      brand: 'Zara',
      image: 'https://static.zara.net/assets/public/7b1e/5e15/0d1541829e69/99e74d5f68cd/05753128401-e1/05753128401-e1.jpg?ts=1723200242315&amp;w=563',
    },
    {
      id: 8,
      name: 'Cargo Trousers',
      price: '₹ 2990.00',
      discount: '21% off',
      shipping: 'Free Shipping',
      brand: 'Zara',
      image: 'https://static.zara.net/assets/public/8f50/eb52/5bdb4e289f28/1cb74ea7d6eb/00108412707-e1/00108412707-e1.jpg?ts=1702889786882&amp;w=563',
    },
  ];

  return (
    <div className="product-container">
      <h1>Pants Collection</h1>
      <div className="product-list">
        {pants.map(pant => (
          <div key={pant.id} className="product-card">
            <img src={pant.image} alt={pant.name} />
            <h3>{pant.name}</h3>
            <p className="price">{pant.price}</p>
            <p className="discount">{pant.discount}</p>
            <p className="shipping">{pant.shipping}</p>
            <p className="brand">Brand: {pant.brand}</p>
            <button onClick={() => addToCart(pant)}>Add to Cart</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Pants;

   