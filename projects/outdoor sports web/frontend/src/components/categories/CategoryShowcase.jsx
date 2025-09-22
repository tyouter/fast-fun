import React from 'react';

const categoriesData = [
  {
    id: 1,
    name: '跑步',
    description: '探索跑步装备和路线。',
    image: 'https://via.placeholder.com/300x200?text=Running',
  },
  {
    id: 2,
    name: '骑行',
    description: '发现最新骑行装备和挑战。',
    image: 'https://via.placeholder.com/300x200?text=Cycling',
  },
  {
    id: 3,
    name: '徒步',
    description: '准备好下一次徒步旅行。',
    image: 'https://via.placeholder.com/300x200?text=Hiking',
  },
  {
    id: 4,
    name: '露营',
    description: '享受大自然的宁静。',
    image: 'https://via.placeholder.com/300x200?text=Camping',
  },
];

const CategoryCard = ({ category }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden font-strava-sans">
      <img src={category.image} alt={category.name} className="w-full h-48 object-cover" />
      <div className="p-4 text-center">
        <h3 className="font-bold text-lg mb-2">{category.name}</h3>
        <p className="text-gray-700 text-base">{category.description}</p>
      </div>
    </div>
  );
};

const CategoryShowcase = () => {
  return (
    <div className="font-strava-sans">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {categoriesData.map((category) => (
          <CategoryCard key={category.id} category={category} />
        ))}
      </div>
    </div>
  );
};

export default CategoryShowcase;