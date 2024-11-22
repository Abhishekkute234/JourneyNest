import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MapPin, Calendar, Users } from "lucide-react";

const tours = [
  {
    id: 1,
    title: "Mountain Trek Adventure",
    location: "Swiss Alps",
    duration: "7 Days",
    groupSize: "10-15 people",
    price: "$1,999",
    image: "https://images.unsplash.com/photo-1682687220742-aba13b6e50ba",
    description: "Experience the breathtaking beauty of the Swiss Alps with our guided mountain trek."
  },
  {
    id: 2,
    title: "Tropical Paradise Tour",
    location: "Maldives",
    duration: "5 Days",
    groupSize: "8-12 people",
    price: "$2,499",
    image: "https://images.unsplash.com/photo-1682687220742-aba13b6e50ba",
    description: "Relax and unwind in the pristine beaches of the Maldives."
  },
  {
    id: 3,
    title: "Cultural Heritage Tour",
    location: "Kyoto, Japan",
    duration: "8 Days",
    groupSize: "12-15 people",
    price: "$2,799",
    image: "https://images.unsplash.com/photo-1682687220742-aba13b6e50ba",
    description: "Immerse yourself in the rich cultural heritage of ancient Kyoto."
  }
];

export default function FeaturedTours() {
  return (
    <section className="py-24 bg-muted/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Featured Tours</h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Discover our most popular travel experiences
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {tours.map((tour) => (
            <Card key={tour.id} className="overflow-hidden">
              <div className="aspect-video relative">
                <img
                  src={tour.image}
                  alt={tour.title}
                  className="object-cover w-full h-full"
                />
              </div>
              <CardHeader>
                <CardTitle>{tour.title}</CardTitle>
                <CardDescription className="flex items-center">
                  <MapPin className="h-4 w-4 mr-1" />
                  {tour.location}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">{tour.description}</p>
                <div className="flex items-center justify-between text-sm">
                  <div className="flex items-center">
                    <Calendar className="h-4 w-4 mr-1" />
                    {tour.duration}
                  </div>
                  <div className="flex items-center">
                    <Users className="h-4 w-4 mr-1" />
                    {tour.groupSize}
                  </div>
                </div>
              </CardContent>
              <CardFooter className="flex items-center justify-between">
                <span className="text-xl font-bold">{tour.price}</span>
                <Button>Book Now</Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}