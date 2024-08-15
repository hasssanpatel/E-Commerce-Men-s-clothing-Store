import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css'; // Ensure this file contains the updated CSS

const Home = () => {
  return (
    <div className="home-container">
      <header className="hero">
        <h1>Welcome to Our E-commerce Men's Clothing Store</h1>
        <p>Find the latest trends and styles in men's fashion.</p>
      </header>
      <section className="featured-products">
        <h2>Featured Products</h2>
        <div className="product-list">
          <Link className="product-card" to="/TShirts">
            <img src="https://png.pngtree.com/thumb_back/fh260/background/20230625/pngtree-t-shirts-in-3d-render-against-a-white-backdrop-image_3678014.jpg" alt="T-Shirts" />
          </Link>
          <Link className="product-card" to="/Pants">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSU1S1U80EXG9aW97ucq3Ws43YQw0DkY7HOFg&s" alt="Pants" />
          </Link>
          <Link className="product-card" to="/Jackets">
            <img src="https://media.istockphoto.com/id/872881486/photo/leather-jackets-on-hanger-at-the-trendy-shop-boutique.jpg?s=612x612&w=0&k=20&c=HhAZ4YccpTgtWU6vuZuzMftBiVHWLHUh6P5RzmeF9-c=" alt="Jackets" />
          </Link>
          <Link className="view-cart-button" to="/BuyNow">
            <div className="cart-icon">
              <h3>View Cart</h3>
            </div>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
