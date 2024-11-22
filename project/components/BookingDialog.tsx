"use client";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import BookingForm from "./BookingForm";
import { Badge } from "@/components/ui/badge";
import { Check } from "lucide-react";

interface Tour {
  id: number;
  title: string;
  location: string;
  duration: string;
  groupSize: string;
  price: string;
  description: string;
  packageDetails: string[];
}

interface BookingDialogProps {
  tour?: Tour;
}

export default function BookingDialog({ tour }: BookingDialogProps) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button>Book Now</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[800px] max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>{tour ? `Book ${tour.title}` : 'Book Your Tour'}</DialogTitle>
          <DialogDescription>
            {tour ? `Package price: ${tour.price}` : 'Fill in your details below to book your dream vacation.'}
          </DialogDescription>
        </DialogHeader>
        
        {tour && (
          <div className="mb-6">
            <h4 className="text-sm font-semibold mb-2">Package Details:</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
              {tour.packageDetails.map((detail, index) => (
                <div key={index} className="flex items-center gap-2">
                  <Badge variant="secondary" className="h-6 w-6 rounded-full p-0 flex items-center justify-center">
                    <Check className="h-4 w-4" />
                  </Badge>
                  <span className="text-sm">{detail}</span>
                </div>
              ))}
            </div>
          </div>
        )}
        
        <BookingForm selectedTour={tour} />
      </DialogContent>
    </Dialog>
  );
}