import { Card } from "@/components/ui/card";
import FeaturedTours from "@/components/FeaturedTours";
import SearchFilter from "@/components/SearchFilter";

export default function ToursPage() {
  return (
    <div className="min-h-screen">
      <div className="relative py-24 bg-primary/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-center mb-8">Our Tours</h1>
          <p className="text-center text-muted-foreground mb-8 max-w-2xl mx-auto">
            Discover our handpicked selection of extraordinary adventures and experiences around the world.
          </p>
          <SearchFilter />
        </div>
      </div>
      <FeaturedTours />
    </div>
  );
}