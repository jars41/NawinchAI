import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import BookCard from "@/components/BookCard";
import { getCategorizedBooks } from "@/data/books";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const HomePage = () => {
  const categorizedBooks = getCategorizedBooks();

  return (
    <div className="min-h-screen bg-background">
      {/* Search Bar */}
      <div className="pt-24 pb-8 px-4">
        <div className="container mx-auto max-w-2xl">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
            <Input
              placeholder="Busca tu próxima aventura..."
              className="pl-12 h-14 text-lg bg-card border-border focus:ring-2 focus:ring-primary"
            />
          </div>
        </div>
      </div>

      {/* Category Carousels */}
      <div className="px-4 pb-20 space-y-12">
        {categorizedBooks.map((category) => (
          <div key={category.name} className="container mx-auto">
            <h2 className="text-2xl font-bold text-foreground mb-6">
              {category.name}
            </h2>
            <Carousel
              opts={{
                align: "start",
                loop: true,
              }}
              className="w-full"
            >
              <CarouselContent className="-ml-4">
                {category.books.map((book) => (
                  <CarouselItem key={book.id} className="pl-4 basis-auto">
                    <BookCard book={book} />
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="hidden md:flex" />
              <CarouselNext className="hidden md:flex" />
            </Carousel>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomePage;
