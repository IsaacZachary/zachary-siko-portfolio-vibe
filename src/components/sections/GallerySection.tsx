import { Terminal, Image } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { useState } from "react";
import { galleryData } from "@/data/gallery";

const GallerySection = () => {
  const [activeCategory, setActiveCategory] = useState("professional");
  const [loading, setLoading] = useState(false);
  const [loadingTexts] = useState([
    "Loading gallery...",
    "Fetching images...",
    "Processing photos...",
    "Almost there...",
  ]);

  const handleImageLoad = () => {
    setLoading(false);
  };

  const categories = {
    professional: galleryData.filter(item => item.category === "professional"),
    social: galleryData.filter(item => item.category === "social"),
    ai: galleryData.filter(item => item.category === "ai"),
    random: galleryData.filter(item => item.category === "random")
  };

  return (
    <section id="gallery" className="min-h-screen bg-white text-gray-900 py-20">
      <div className="container mx-auto px-4">
        <div className="flex items-center gap-3 mb-4">
          <Terminal size={24} className="text-green-600" />
          <h2 className="text-4xl font-mono font-bold">~/gallery $</h2>
        </div>
        
        <div className="bg-white border border-gray-200 rounded-lg p-6 mb-10 shadow-sm">
          <div className="flex items-center gap-2 mb-6 border-b border-gray-100 pb-2">
            <div className="w-3 h-3 rounded-full bg-red-400"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
            <div className="w-3 h-3 rounded-full bg-green-400"></div>
            <span className="font-mono text-xs text-gray-400 ml-2">gallery — photos — 80×24</span>
          </div>
          
          <div className="font-mono text-sm mb-6 text-gray-700">
            <p>$ <span className="text-green-600">cat</span> photo_categories.txt</p>
            <p className="ml-4 mt-2">Find below a collection of photos organized by category.</p>
            <p className="ml-4">Select a category to view the associated photos.</p>
          </div>
          
          <div className="flex flex-wrap gap-4 mb-8">
            <Button
              variant={activeCategory === "professional" ? "default" : "outline"}
              onClick={() => setActiveCategory("professional")}
              className={`min-w-[120px] font-mono text-sm ${
                activeCategory === "professional" 
                  ? "bg-green-600 hover:bg-green-700 text-white" 
                  : "border-green-600 text-green-600 hover:bg-green-50"
              }`}
            >
              ./professional.sh
            </Button>
            <Button
              variant={activeCategory === "social" ? "default" : "outline"}
              onClick={() => setActiveCategory("social")}
              className={`min-w-[120px] font-mono text-sm ${
                activeCategory === "social" 
                  ? "bg-blue-600 hover:bg-blue-700 text-white" 
                  : "border-blue-600 text-blue-600 hover:bg-blue-50"
              }`}
            >
              ./social.sh
            </Button>
            <Button
              variant={activeCategory === "ai" ? "default" : "outline"}
              onClick={() => setActiveCategory("ai")}
              className={`min-w-[120px] font-mono text-sm ${
                activeCategory === "ai" 
                  ? "bg-purple-600 hover:bg-purple-700 text-white" 
                  : "border-purple-600 text-purple-600 hover:bg-purple-50"
              }`}
            >
              ./ai-generated.sh
            </Button>
            <Button
              variant={activeCategory === "random" ? "default" : "outline"}
              onClick={() => setActiveCategory("random")}
              className={`min-w-[120px] font-mono text-sm ${
                activeCategory === "random" 
                  ? "bg-amber-600 hover:bg-amber-700 text-white" 
                  : "border-amber-600 text-amber-600 hover:bg-amber-50"
              }`}
            >
              ./random.sh
            </Button>
          </div>
          
          {loading ? (
            <div className="py-20">
              <div className="flex justify-center mb-6">
                <Terminal size={48} className="animate-pulse text-green-600" />
              </div>
              <div className="font-mono text-center">
                <p className="text-green-600 animate-pulse">
                  {loadingTexts[Math.floor(Math.random() * loadingTexts.length)]}
                </p>
                <div className="mt-4 h-2 w-64 mx-auto bg-gray-100 rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-green-500 animate-[loading_1.5s_ease-in-out_infinite]" 
                    style={{width: `${Math.min(100, Math.random() * 100)}%`}}
                  ></div>
                </div>
              </div>
            </div>
          ) : (
            <div className="relative">
              <div className="absolute top-0 left-0 font-mono text-xs text-green-600 flex items-center gap-2">
                <Image size={14} />
                <span>Found {categories[activeCategory].length} items</span>
              </div>
              
              <Carousel className="max-w-5xl mx-auto mt-8">
                <CarouselContent>
                  {categories[activeCategory].length > 0 ? (
                    categories[activeCategory].map((item, index) => (
                      <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                        <Card className="bg-white border-gray-200">
                          <CardContent className="p-4">
                            <div className="relative group aspect-square overflow-hidden rounded-lg">
                              <img
                                src={item.url}
                                alt={item.description}
                                className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-110"
                                onLoad={handleImageLoad}
                              />
                              <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                                <div className="w-full">
                                  <p className="text-sm text-green-600 font-mono">$ <span className="text-white">{item.description}</span></p>
                                  <p className="text-xs text-gray-300 mt-1 font-mono">[{index + 1}/{categories[activeCategory].length}]</p>
                                </div>
                              </div>
                            </div>
                          </CardContent>
                        </Card>
                      </CarouselItem>
                    ))
                  ) : (
                    <CarouselItem className="basis-full">
                      <div className="h-64 flex items-center justify-center">
                        <p className="text-amber-600 font-mono">No images found in this category.</p>
                      </div>
                    </CarouselItem>
                  )}
                </CarouselContent>
                <CarouselPrevious className="bg-white border-gray-200 text-green-600 hover:bg-gray-50 hover:text-green-700" />
                <CarouselNext className="bg-white border-gray-200 text-green-600 hover:bg-gray-50 hover:text-green-700" />
              </Carousel>
              
              <div className="mt-6 text-center font-mono text-xs text-gray-500">
                <p>Use the arrows to navigate or swipe on mobile devices</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
