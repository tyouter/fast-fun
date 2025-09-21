import React from 'react';
import HeroBanner from '../components/ui/HeroBanner';
import FeaturedProducts from '../components/products/FeaturedProducts';
import CategoryShowcase from '../components/categories/CategoryShowcase';
import LatestArticles from '../components/blog/LatestArticles';

function HomePage() {
  return (
    <div className="container mx-auto px-4">
      <HeroBanner 
        title="探索户外的无限可能" 
        subtitle="高品质装备，让每次冒险更加安全与舒适"
        ctaText="浏览产品"
        ctaLink="/products"
        imageSrc="/images/hero-banner.jpg"
      />
      
      <section className="py-12">
        <h2 className="text-3xl font-bold text-center mb-8">热门产品</h2>
        <FeaturedProducts />
      </section>
      
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">探索分类</h2>
          <CategoryShowcase />
        </div>
      </section>
      
      <section className="py-12">
        <h2 className="text-3xl font-bold text-center mb-8">最新户外资讯</h2>
        <LatestArticles />
      </section>
    </div>
  );
}

export default HomePage;