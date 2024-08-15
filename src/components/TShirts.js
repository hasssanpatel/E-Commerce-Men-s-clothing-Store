import React, { useContext } from 'react';
import CartContext from './CartContext';
import './Product.css';

const TShirts = () => {
  const { addToCart } = useContext(CartContext);

  const tShirts = [
    {
        id: 1,
        name: 'Basic T-Shirt',
        price: '₹ 990.00',
        discount: '10% off',
        shipping: 'Free Shipping',
        brand: 'Zara',
        image: 'https://static.zara.net/assets/public/e9e9/1a85/339b4549a2d1/dcaa8cd81759/05584261800-e1/05584261800-e1.jpg?ts=1701355317347&amp;w=563',
      },
      {
        id: 2,
        name: 'Buttoned Neck T-Shirt',
        price: '₹ 2650.00',
        discount: '15% off',
        shipping: 'Free Shipping',
        brand: 'Zara',
        image: 'https://static.zara.net/assets/public/3c8c/231d/93144581b88f/1330172fca28/05644373707-e1/05644373707-e1.jpg?ts=1719473587760&amp;w=563',
      },
      {
        id: 3,
        name: 'Striped T-Shirt',
        price: '₹ 2250.00',
        discount: '20% off',
        shipping: 'Free Shipping',
        brand: 'Zara',
        image: 'https://static.zara.net/assets/public/ccf8/bc84/f1ea42eaa801/c5324edaa5ff/04853301105-e1/04853301105-e1.jpg?ts=1722410977918&amp;w=563',
      },
      {
        id: 4,
        name: 'Boxy Fit T-Shirt',
        price: '₹ 1890.00',
        discount: '5% off',
        shipping: 'Free Shipping',
        brand: 'Zara',
        image: 'https://static.zara.net/assets/public/ee70/61e5/c5d44df2b829/18ecd60850df/06462402251-e1/06462402251-e1.jpg?ts=1710950209451&amp;w=563',
      },
      {
        id: 5,
        name: 'V-Neck T-Shirt',
        price: '₹ 2550.00',
        discount: '12% off',
        shipping: 'Free Shipping',
        brand: 'Zara',
        image: 'https://static.zara.net/assets/public/9c28/0f40/7550406ba651/8d9004a6d72d/06096304832-e1/06096304832-e1.jpg?ts=1716303845261&amp;w=563',
      },
      {
        id: 6,
        name: 'Ribbed T-Shirt',
        price: '₹ 1950.00',
        discount: '18% off',
        shipping: 'Free Shipping',
        brand: 'Zara',
        image: 'https://static.zara.net/assets/public/3eeb/bce8/685e432eb708/2cf0bc4fecf5/05644366803-e1/05644366803-e1.jpg?ts=1721287635394&amp;w=563',
      },
      {
        id: 7,
        name: 'Abstract Print T-Shirt',
        price: '₹ 2450.00',
        discount: '17% off',
        shipping: 'Free Shipping',
        brand: 'Zara',
        image: 'https://static.zara.net/assets/public/0ecb/5ca0/04af4822a932/0bcf39a29b24/03992326826-e1/03992326826-e1.jpg?ts=1721317004221&amp;w=563',
      },
      {
        id: 8,
        name: 'Textured T-Shirt',
        price: '₹ 2350.00',
        discount: '12% off',
        shipping: 'Free Shipping',
        brand: 'Zara',
        image: 'https://static.zara.net/assets/public/9593/3cb8/90a74176b716/ee8494a2833c/05372304800-e1/05372304800-e1.jpg?ts=1717425927594&amp;w=563',
      },
    
  
  ];

  return (
    <div className="product-container">
      <h1>T-Shirts Collection</h1>
      <div className="product-list">
        {tShirts.map(tShirt => (
          <div key={tShirt.id} className="product-card">
            <img src={tShirt.image} alt={tShirt.name} />
            <h3>{tShirt.name}</h3>
            <p className="price">{tShirt.price}</p>
            <p className="discount">{tShirt.discount}</p>
            <p className="shipping">{tShirt.shipping}</p>
            <p className="brand">Brand: {tShirt.brand}</p>
            <button onClick={() => addToCart(tShirt)}>Add to Cart</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TShirts;

  