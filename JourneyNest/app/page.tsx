import Hero from '@/components/Hero';
import SearchFilter from '@/components/SearchFilter';
import FeaturedTours from '@/components/FeaturedTours';
import TravelSpots from '@/components/TravelSpots';
import Newsletter from '@/components/Newsletter';

export default function Home() {
  return (
    <div className="min-h-screen">
      <Hero />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SearchFilter />
      </div>
      <TravelSpots />
      <FeaturedTours />
      <Newsletter />
    </div>
  );
}