import React, { useRef } from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Link } from 'react-router-dom';

import './common.css';
import Card from '../Components/Card';

const bannerImages = [
  { id: 1, src: 'https://s.rmjo.in/Fitness-offer-banner-for-Web--2.jpg', alt: 'Banner 1' },
  { id: 2, src: 'https://s.rmjo.in/AC-Offer-Banner-Web-.jpg', alt: 'Banner 2' },
  { id: 3, src: 'https://s.rmjo.in/Paytm-Bank-Desktop-banner-%20(1).jpg', alt: 'Banner 3' },
];

const products = [
  {
    id: 1,
    img: "https://p.rmjo.in/productSquare/em6h6xgy-500x500.jpg",
    name: "Stuart Study Table",
    price: "149",
    o_price: "72"
  },
  {
    id: 2,
    img: "https://p.rmjo.in/productSquare/esf6ag3q-500x500.jpg",
    name: "Marios Office Chair",
    price: "199",
    o_price: "72"
  },
  {
    id: 3,
    img: "https://p.rmjo.in/productSquare/jsxcydcf-500x500.jpg",
    name: "Auto InclinationTr...",
    price: "2119",
    o_price: "72"
  },
  {
    id: 4,
    img: "https://p.rmjo.in/productSquare/ffg0b4na-500x500.jpg",
    name: "Cross Trainer...",
    price: "1109",
    o_price: "72"
  },
  {
    id: 5,
    img: "https://p.rmjo.in/productSquare/mnuazvk3-500x500.jpg",
    name: "Miller Office Chair",
    price: "149",
    o_price: "72"
  },
];

const Home = () => {
  const productsRef = useRef(null);

  const scrollToRight = () => {
    if (productsRef.current) {
      productsRef.current.scrollLeft += 300;
    }
  };

  const scrollToLeft = () => {
    if (productsRef.current) {
      productsRef.current.scrollLeft -= 300;
    }
  };

  return (
    <div className="container mx-auto mt-8">
      <div className="mb-8">
        <Carousel autoPlay infiniteLoop showThumbs={false} showStatus={false}>
          {bannerImages.map((image) => (
            <div key={image.id}>
              <img src={image.src} alt={image.alt} />
            </div>
          ))}
        </Carousel>
      </div>
      <div className="relative">
        <div className="overflow-hidden">
          <div className="flex mb-4">
            <button className="text-gray-600 focus:outline-none" onClick={scrollToLeft}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </button>
            <div
              ref={productsRef}
              className="hide-scrollbar flex-1 px-4 overflow-x-auto whitespace-nowrap scrollbar-hidden"
              style={{ scrollBehavior: 'smooth' }}
            >
              {products.map((product) => (
                <Card key={product.id} product={product} />
              ))}
            </div>
            <button className="text-gray-600 focus:outline-none" onClick={scrollToRight}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
          </div>
        </div>
        <div className="flex justify-center mt-4">
          <Link to="/products">
            <button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition duration-300">
              View All
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
