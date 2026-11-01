import { Search, BookOpen, ClipboardCheck, BookCheck } from "lucide-react";

const steps = [
  {
    number: "01",
    icon: Search,
    
    title: "Explore Books",
    description:
      "Browse our collection and discover books that match your interests.",
  },
  {
    number: "02",
    icon: BookOpen,
    href:"/all-books",
    title: "Choose Your Book",
    description:
      "Find your favorite book and check its availability before borrowing.",
  },
  {
    number: "03",
    icon: ClipboardCheck,
    title: "Request to Borrow",
    description: "Place your borrowing request and wait for confirmation.",
  },
  {
    number: "04",
    icon: BookCheck,
    title: "Enjoy & Return",
    description: "Enjoy your reading journey and return the book on time.",
  },
];

const HowBorrowingBooks = () => {
  return (
    <section className="bg-background px-4 py-16 sm:py-20">
      <div className="container mx-auto">
        {/* Section Heading */}
        <div className="mx-auto mb-14 max-w-2xl text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-deep-olive">
            Simple & Easy
          </p>

          <h2 className="text-3xl font-bold text-coffee-brown dark:text-warm-ivory sm:text-4xl">
            How Borrowing Books Works
          </h2>

          <p className="mt-4 text-muted-foreground">
            Your next favorite story is just a few simple steps away. Borrow
            books easily and make every moment a reading adventure.
          </p>
        </div>

        {/* Steps */}
        <div
        
         className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step) => {
            const Icon = step.icon;

            return (
              <div
                key={step.number}
                className="group relative rounded-2xl border border-terracotta/40 bg-card p-7 text-center shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-lg"
              >
                {/* Step Number */}
                <span className="absolute right-5 top-5 text-sm font-bold text-deep-olive/60">
                  {step.number}
                </span>

                {/* Icon */}
                <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-terracotta/30 text-coffee-brown transition-colors group-hover:bg-sunny-yellow dark:text-warm-ivory">
                  <Icon size={30} strokeWidth={1.8} />
                </div>

                <h3 className="mb-3 text-xl font-semibold text-coffee-brown dark:text-warm-ivory">
                  {step.title}
                </h3>

                <p className="text-sm leading-7 text-muted-foreground">
                  {step.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default HowBorrowingBooks;
