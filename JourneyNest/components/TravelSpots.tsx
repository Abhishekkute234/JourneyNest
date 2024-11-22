import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MapPin, Calendar, Star } from "lucide-react";

const spots = [
  {
    id: 1,
    name: "Santorini Sunset Point",
    location: "Greece",
    rating: 4.8,
    season: "Summer",
    image: "https://images.unsplash.com/photo-1613395877344-13d4a8e0d49e",
    tags: ["Beach", "Romantic", "Photography"]
  },
  {
    id: 2,
    name: "Mount Fuji Trail",
    location: "Japan",
    rating: 4.9,
    season: "Spring",
    image: "https://images.unsplash.com/photo-1490806843957-31f4c9a91c65",
    tags: ["Hiking", "Nature", "Adventure"]
  },
  {
    id: 3,
    name: "Machu Picchu",
    location: "Peru",
    rating: 4.9,
    season: "Dry Season",
    image: "https://images.unsplash.com/photo-1587595431973-160d0d94add1",
    tags: ["Historical", "Hiking", "Cultural"]
  }
];

export default function TravelSpots() {
  return (
    <section className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Popular Destinations</h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Explore our carefully selected travel destinations
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {spots.map((spot) => (
            <Card key={spot.id} className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="aspect-video relative">
                <img
                  src={spot.image}
                  alt={spot.name}
                  className="object-cover w-full h-full"
                />
                <div className="absolute top-4 right-4">
                  <Badge variant="secondary" className="flex items-center gap-1">
                    <Star className="h-4 w-4 fill-current" />
                    {spot.rating}
                  </Badge>
                </div>
              </div>
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  {spot.name}
                </CardTitle>
                <div className="flex items-center text-muted-foreground">
                  <MapPin className="h-4 w-4 mr-1" />
                  {spot.location}
                </div>
              </CardHeader>
              <CardContent>
                <div className="flex items-center gap-2 mb-4">
                  <Calendar className="h-4 w-4 text-muted-foreground" />
                  <span className="text-sm text-muted-foreground">Best Time: {spot.season}</span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {spot.tags.map((tag) => (
                    <Badge key={tag} variant="outline">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}