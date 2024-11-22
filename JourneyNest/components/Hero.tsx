import { Button } from "@/components/ui/button";
import { MapPin } from "lucide-react";

export default function Hero() {
  return (
    <div className="relative min-h-[85vh] flex items-center">
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1682687220742-aba13b6e50ba')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-black/50" />
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
        <div className="max-w-2xl">
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
            Discover Your Next Adventure
          </h1>
          <p className="mt-6 text-xl text-gray-300">
            Experience unforgettable journeys with our expertly curated travel packages. From scenic mountain treks to coastal getaways, we make your dream vacation a reality.
          </p>
          <div className="mt-10 flex items-center gap-x-6">
            <Button size="lg" className="text-lg">
              Explore Tours
            </Button>
            <Button variant="outline" size="lg" className="text-lg">
              <MapPin className="mr-2 h-5 w-5" />
              View Destinations
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}