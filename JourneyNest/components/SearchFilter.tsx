"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card } from "@/components/ui/card";
import { Search, MapPin, Calendar, Users } from "lucide-react";

export default function SearchFilter() {
  const [destination, setDestination] = useState("");

  return (
    <Card className="p-6 max-w-5xl mx-auto -mt-16 relative z-20 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 shadow-xl">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="space-y-2">
          <label className="text-sm font-medium">Destination</label>
          <div className="relative">
            <MapPin className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Where to?"
              value={destination}
              onChange={(e) => setDestination(e.target.value)}
              className="pl-9"
            />
          </div>
        </div>

        <div className="space-y-2">
          <label className="text-sm font-medium">Duration</label>
          <Select>
            <SelectTrigger className="w-full">
              <Calendar className="mr-2 h-4 w-4" />
              <SelectValue placeholder="Duration" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="3-5">3-5 days</SelectItem>
              <SelectItem value="6-10">6-10 days</SelectItem>
              <SelectItem value="11-15">11-15 days</SelectItem>
              <SelectItem value="15+">15+ days</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-2">
          <label className="text-sm font-medium">Group Size</label>
          <Select>
            <SelectTrigger className="w-full">
              <Users className="mr-2 h-4 w-4" />
              <SelectValue placeholder="Group size" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="1-5">1-5 people</SelectItem>
              <SelectItem value="6-10">6-10 people</SelectItem>
              <SelectItem value="11-15">11-15 people</SelectItem>
              <SelectItem value="15+">15+ people</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-2">
          <label className="text-sm font-medium">&nbsp;</label>
          <Button className="w-full">
            <Search className="mr-2 h-4 w-4" />
            Search Tours
          </Button>
        </div>
      </div>
    </Card>
  );
}