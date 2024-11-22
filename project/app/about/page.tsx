import { Card } from "@/components/ui/card";
import { Users, Award, Globe2, Shield } from "lucide-react";

const features = [
  {
    icon: Users,
    title: "Expert Guides",
    description: "Our professional guides ensure safe and enriching travel experiences."
  },
  {
    icon: Award,
    title: "Quality Service",
    description: "Committed to providing exceptional service and memorable journeys."
  },
  {
    icon: Globe2,
    title: "Global Destinations",
    description: "Curated selection of the world's most remarkable destinations."
  },
  {
    icon: Shield,
    title: "Safe Travel",
    description: "Your safety and comfort are our top priorities throughout the journey."
  }
];

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      <div className="relative py-24 bg-primary/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold mb-4">About Wanderlust Adventures</h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Creating unforgettable travel experiences since 2010. We specialize in crafting unique journeys that combine adventure, culture, and comfort.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {features.map((feature) => (
              <Card key={feature.title} className="p-6">
                <div className="flex flex-col items-center text-center">
                  <div className="p-3 bg-primary/10 rounded-full mb-4">
                    <feature.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-semibold mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </div>
              </Card>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-4">Our Story</h2>
              <p className="text-muted-foreground mb-4">
                Founded with a passion for exploration and adventure, Wanderlust Adventures has grown from a small local tour operator to a globally recognized travel company. Our journey began with a simple mission: to create meaningful travel experiences that inspire and transform.
              </p>
              <p className="text-muted-foreground">
                Today, we continue to uphold our commitment to responsible tourism, cultural preservation, and sustainable travel practices. Every journey we craft is a careful blend of adventure, comfort, and authentic local experiences.
              </p>
            </div>
            <div className="relative aspect-video">
              <img
                src="https://images.unsplash.com/photo-1682687220742-aba13b6e50ba"
                alt="Travel group enjoying sunset"
                className="rounded-lg object-cover w-full h-full"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}