import React from 'react';
import ProductCard from './ProductCard';

const featuredProductsData = [
  {
    id: 1,
    name: '山地自行车',
    description: '轻量级山地自行车，适合越野骑行。',
    price: 1200,
    image: 'https://via.placeholder.com/300x200?text=Mountain+Bike',
  },
  {
    id: 2,
    name: '徒步背包',
    description: '大容量徒步背包，舒适耐用。',
    price: 150,
    image: 'https://via.placeholder.com/300x200?text=Hiking+Backpack',
  },
  {
    id: 3,
    name: '露营帐篷',
    description: '双人露营帐篷，防风防水。',
    price: 200,
    image: 'https://via.placeholder.com/300x200?text=Camping+Tent',
  },
  {
    id: 4,
    name: '跑步鞋',
    description: '专业跑步鞋，提供卓越的缓震和支撑。',
    price: 100,
    image: 'https://via.placeholder.com/300x200?text=Running+Shoes',
  },
];

const FeaturedProducts = () => {
  return (
    <div className="font-strava-sans">
      <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">精选产品</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {featuredProductsData.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default FeaturedProducts;