import React from 'react';
import HeroBanner from '../components/ui/HeroBanner';
import FeaturedProducts from '../components/products/FeaturedProducts';
import CategoryShowcase from '../components/categories/CategoryShowcase';
import LatestArticles from '../components/blog/LatestArticles';

function HomePage() {
  return (
    <div className="font-strava-sans bg-gray-100">
      <HeroBanner 
        title="探索户外的无限可能" 
        subtitle="高品质装备，让每次冒险更加安全与舒适"
        ctaText="浏览产品"
        ctaLink="/products"
        imageSrc="/images/hero-banner.jpg"
      />
      
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-strava-dark-grey text-center mb-12">热门产品</h2>
        <FeaturedProducts />
      </section>
      
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-strava-dark-grey text-center mb-12">探索分类</h2>
          <CategoryShowcase />
        </div>
      </section>
      
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-strava-dark-grey text-center mb-12">最新户外资讯</h2>
        <LatestArticles />
      </section>
    </div>
  );
}

export default HomePage;