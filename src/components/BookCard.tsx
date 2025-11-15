import { Book } from "@/data/books";
import { useNavigate } from "react-router-dom";

interface BookCardProps {
  book: Book;
}

const BookCard = ({ book }: BookCardProps) => {
  const navigate = useNavigate();

  return (
    <div
      onClick={() => navigate(`/book/${book.id}`)}
      className="flex-shrink-0 w-48 cursor-pointer group"
    >
      <div className="relative overflow-hidden rounded-lg shadow-card transition-all duration-300 hover:scale-105 hover:shadow-elevated">
        <img
          src={book.coverUrl}
          alt={book.title}
          className="w-full h-72 object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="absolute bottom-0 left-0 right-0 p-4">
            <h3 className="text-sm font-semibold text-foreground mb-1 line-clamp-2">
              {book.title}
            </h3>
            <p className="text-xs text-muted-foreground">{book.author}</p>
          </div>
        </div>
      </div>
      <h3 className="mt-2 text-sm font-medium text-foreground line-clamp-1">
        {book.title}
      </h3>
      <p className="text-xs text-muted-foreground">{book.author}</p>
    </div>
  );
};

export default BookCard;
