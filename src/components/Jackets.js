import React, { useContext } from 'react';
import CartContext from './CartContext';
import './Product.css';

const Jackets = () => {
  const { addToCart } = useContext(CartContext);

  const jackets = [
   
    {
        id: 1,
        name: 'Linen Jacket',
        price: '₹ 5950.00',
        discount: '10% off',
        shipping: 'Free Shipping',
        brand: 'Zara',
        image: 'https://static.zara.net/assets/public/06c7/b77e/85844edbbb34/ab49fb996ea6/04410333505-e1/04410333505-e1.jpg?ts=1718264706240&amp;w=563',
      },
      {
        id: 2,
        name: 'Cotton Bomber Jacket',
        price: '₹ 5550.00',
        discount: '15% off',
        shipping: 'Free Shipping',
        brand: 'Zara',
        image: 'https://static.zara.net/assets/public/85a9/bfcc/db9e48d3aedc/4c302980f2eb/06987354811-e1/06987354811-e1.jpg?ts=1721749309344&amp;w=563',
      },
      {
        id: 3,
        name: 'Lightweight Bomber Jacket',
        price: '₹ 3550.00',
        discount: '20% off',
        shipping: 'Free Shipping',
        brand: 'Zara',
        image: 'https://static.zara.net/assets/public/2860/19ac/b4b641e3b22d/f496eeca01c7/04302400506-e1/04302400506-e1.jpg?ts=1718264705953&amp;w=563',
      },
      {
        id: 4,
        name: 'Lightweight Bomber Jacket',
        price: '₹ 3550.00',
        discount: '5% off',
        shipping: 'Free Shipping',
        brand: 'Zara',
        image: 'https://static.zara.net/assets/public/7c41/fd24/26474bbc801f/78507cdbe80a/04302400800-e1/04302400800-e1.jpg?ts=1718264706528&amp;w=563',
      },
      {
        id: 5,
        name: 'Denim Jacket',
        price: '₹ 3550.00',
        discount: '12% off',
        shipping: 'Free Shipping',
        brand: 'Zara',
        image: 'https://static.zara.net/assets/public/8973/1ced/300a414fafd3/c233e8be5dfe/01538353710-e1/01538353710-e1.jpg?ts=1723458274680&amp;w=563',
      },
      {
        id: 6,
        name: 'Faux Leather Bomber Jacket',
        price: '₹ 4950.00',
        discount: '18% off',
        shipping: 'Free Shipping',
        brand: 'Zara',
        image: 'https://static.zara.net/assets/public/4276/3764/f06e4fd58393/fab4d6237c92/03918327800-e1/03918327800-e1.jpg?ts=1721287922922&amp;w=563',
      },
      {
        id: 7,
        name: 'Quarter-Zip Sweatshirt',
        price: '₹ 3350.00',
        discount: '18% off',
        shipping: 'Free Shipping',
        brand: 'Zara',
        image: 'https://static.zara.net/assets/public/b16b/f6f0/06074eee9de5/acc84f0d14e6/06462333819-e1/06462333819-e1.jpg?ts=1719843312556&amp;w=563',
      },
      {
        id: 8,
        name: 'Technical Jacket - Limited Edition',
        price: '₹ 8550.00',
        discount: '18% off',
        shipping: 'Free Shipping',
        brand: 'Zara',
        image: 'https://static.zara.net/assets/public/a737/61f7/b09048268915/14fc531d9a20/07627303401-e1/07627303401-e1.jpg?ts=1721987968107&amp;w=563',
      },
  ];

  return (
    <div className="product-container">
      <h1>Jackets Collection</h1>
      <div className="product-list">
        {jackets.map(jacket => (
          <div key={jacket.id} className="product-card">
            <img src={jacket.image} alt={jacket.name} />
            <h3>{jacket.name}</h3>
            <p className="price">{jacket.price}</p>
            <p className="discount">{jacket.discount}</p>
            <p className="shipping">{jacket.shipping}</p>
            <p className="brand">Brand: {jacket.brand}</p>
            <button onClick={() => addToCart(jacket)}>Add to Cart</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Jackets;

