


import { BookOpen , Plus , BookCheckIcon} from 'lucide-react';

const MyBooksHeader = () => {

  return (
    
    <section className="overflow-hidden rounded-2xl border border-terracotta/30 bg-linear-to-br from-warm-ivory via-terracotta/50 to-dusty-rose/50 px-4 py-3 shadow-sm sm:px-5 sm:py-4">

      {/* Top row */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <BookOpen size={22} className="text-coffee-brown" strokeWidth={1.8} />

          <p className="text-xs font-semibold tracking-widest text-coffee-brown">
            BOOKNOOK
          </p>
        </div>

        <button
          type="button"
          className="group inline-flex items-center gap-2 rounded-full border border-coffee-brown/70 bg-warm-ivory/30 px-4 py-2 text-xs font-medium tracking-wide text-coffee-brown shadow-sm backdrop-blur-sm transition-all duration-300 hover:border-coffee-brown hover:bg-coffee-brown hover:text-warm-ivory"
        >
          <Plus
            size={14}
            strokeWidth={1.8}
            className="transition-transform duration-300 group-hover:rotate-90"
          />
          Add Book
        </button>
      </div>

      {/* Heading */}
      <div className="mt-3">
        <h1 className="text-2xl font-bold tracking-tight text-coffee-brown sm:text-3xl">
          The collection.
        </h1>

        <p className="mt-1 text-xs text-coffee-brown/80 sm:text-sm">
          Books you've brought into your world.
        </p>
      </div>

      {/* Bottom row */}
      <div className="mt-3 flex items-center justify-between border-t border-coffee-brown/20 pt-2">
        <span className="text-[10px] font-semibold tracking-widest text-coffee-brown">
          MY PERSONAL LIBRARY
        </span>

        <BookCheckIcon size={17} className="text-coffee-brown" />
      </div>
    </section>
  );
};

export default MyBooksHeader;
