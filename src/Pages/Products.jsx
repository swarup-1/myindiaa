import React from 'react';
import { useSelector } from 'react-redux';
import Card from '../Components/Card';

const Products = () => {
  const { products, loading, error } = useSelector(state => state.products);

  if (loading) {
    return <div className="flex justify-center items-center h-screen">Loading...</div>;
  }

  if (error) {
    return <div className="flex justify-center items-center h-screen">Error fetching products.</div>;
  }

  return (
    <div className="container mx-auto mt-8 px-4"> {/* Added padding top here */}
      <div className="flex flex-wrap justify-center">
        {products.map(product => (
          <Card key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default Products;
