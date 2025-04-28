
import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { gallery } from "@/data/gallery";

const GallerySection = () => {
  const [activeCategory, setActiveCategory] = useState<"professional" | "social" | "ai" | "random">("professional");

  const categories = {
    professional: gallery.filter(item => item.category === "professional"),
    social: gallery.filter(item => item.category === "social"),
    ai: gallery.filter(item => item.category === "ai"),
    random: gallery.filter(item => item.category === "random")
  };

  return (
    <section id="gallery" className="min-h-screen bg-[#1A1F2C] text-white py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-8 text-center gradient-text">Photo Gallery</h2>
        
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          <Button
            variant={activeCategory === "professional" ? "default" : "outline"}
            onClick={() => setActiveCategory("professional")}
            className="min-w-[120px]"
          >
            Professional
          </Button>
          <Button
            variant={activeCategory === "social" ? "default" : "outline"}
            onClick={() => setActiveCategory("social")}
            className="min-w-[120px]"
          >
            Social
          </Button>
          <Button
            variant={activeCategory === "ai" ? "default" : "outline"}
            onClick={() => setActiveCategory("ai")}
            className="min-w-[120px]"
          >
            AI Generated
          </Button>
          <Button
            variant={activeCategory === "random" ? "default" : "outline"}
            onClick={() => setActiveCategory("random")}
            className="min-w-[120px]"
          >
            Random
          </Button>
        </div>

        <Carousel className="max-w-5xl mx-auto">
          <CarouselContent>
            {categories[activeCategory].map((item, index) => (
              <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                <Card className="bg-gray-800/50 border-gray-700">
                  <CardContent className="p-4">
                    <div className="relative group aspect-square overflow-hidden rounded-lg">
                      <img
                        src={item.url}
                        alt={item.description}
                        className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                        <p className="text-sm text-white">{item.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </section>
  );
};

export default GallerySection;
