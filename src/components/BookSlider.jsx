import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import b1 from "../assets/images/b1.jpg";
import b2 from "../assets/images/b2.jpg";
import b3 from "../assets/images/b3.jpg";
import b4 from "../assets/images/b4.jpg";

const bookCategories = [
  {
    type: 'Self-Help Books',
    description: 'Books that provide guidance for personal growth and development.',
    benefits: 'Offer practical advice, strategies for self-improvement, and motivation.',
    examples: ['The 7 Habits of Highly Effective People', 'Atomic Habits', 'Mindset'],
    authors: ['Stephen Covey', 'James Clear', 'Carol S. Dweck'],
    image: b1
  },
  {
    type: 'Fiction',
    description: 'Imaginative storytelling that transports readers to different worlds and experiences.',
    benefits: 'Enhances creativity, improves empathy, and provides entertainment.',
    examples: ['To Kill a Mockingbird', '1984', 'The Great Gatsby'],
    authors: ['Harper Lee', 'George Orwell', 'F. Scott Fitzgerald'],
    image: b2
  },
  {
    type: 'Poetry',
    description: 'Expressive and often rhythmic forms of writing that evoke emotions and imagery.',
    benefits: 'Develops language appreciation, emotional intelligence, and creative expression.',
    examples: ['Leaves of Grass', 'The Sun and Her Flowers', 'The Waste Land'],
    authors: ['Walt Whitman', 'Rupi Kaur', 'T.S. Eliot'],
    image: b3
  },
  {
    type: 'Literature',
    description: 'Written works considered to be of superior or lasting artistic merit.',
    benefits: 'Broadens perspectives, improves critical thinking, and explores the human condition.',
    examples: ['Pride and Prejudice', 'One Hundred Years of Solitude', 'Moby-Dick'],
    authors: ['Jane Austen', 'Gabriel García Márquez', 'Herman Melville'],
    image: b4
  }
];

const BookSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide();
    }, 10000);
    return () => clearInterval(timer);
  }, [currentIndex]);

  const nextSlide = () => {
    setDirection(1);
    setCurrentIndex((prevIndex) => (prevIndex + 1) % bookCategories.length);
  };

  const prevSlide = () => {
    setDirection(-1);
    setCurrentIndex((prevIndex) => (prevIndex - 1 + bookCategories.length) % bookCategories.length);
  };

  const variants = {
    enter: (direction) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1
    },
    exit: (direction) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0
    })
  };

  return (
    <div className="bg-[#0D0D0D] py-16 min-h-screen flex items-center mt-64 justify-center">
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-4xl md:text-5xl font-bold text-center mb-6 text-[#E1AA4D] tracking-wide"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Explore the World of Books
        </motion.h2>
        <motion.p
          className="text-lg md:text-xl text-center mb-12 text-gray-300"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Discover the power of reading across different genres
        </motion.p>
        <div className="relative">
          <AnimatePresence initial={false} custom={direction}>
            <motion.div
              key={currentIndex}
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                x: { type: "spring", stiffness: 300, damping: 30 },
                opacity: { duration: 0.2 }
              }}
              className="bg-white rounded-lg shadow-lg overflow-hidden md:flex"
            >
              <div className="md:w-1/3 w-full">
                <img
                  src={bookCategories[currentIndex].image}
                  alt={bookCategories[currentIndex].type}
                  className="w-full h-64 md:h-full object-cover"
                />
              </div>
              <div className="md:w-2/3 p-8 space-y-4">
                <h3 className="text-2xl md:text-3xl font-semibold text-[#333]">
                  {bookCategories[currentIndex].type}
                </h3>
                <p className="text-gray-700">{bookCategories[currentIndex].description}</p>
                <h4 className="text-lg font-semibold text-[#E1AA4D]">Benefits:</h4>
                <p className="text-gray-600">{bookCategories[currentIndex].benefits}</p>
                <h4 className="text-lg font-semibold text-[#E1AA4D]">Notable Examples:</h4>
                <ul className="list-disc list-inside text-gray-600 space-y-1">
                  {bookCategories[currentIndex].examples.map((book, index) => (
                    <li key={index}>{book}</li>
                  ))}
                </ul>
                <h4 className="text-lg font-semibold text-[#E1AA4D]">Famous Authors:</h4>
                <p className="text-gray-600">{bookCategories[currentIndex].authors.join(', ')}</p>
              </div>
            </motion.div>
          </AnimatePresence>
          <button
            onClick={prevSlide}
            className="absolute left-2 md:left-4 top-1/2 transform -translate-y-1/2 bg-[#E1AA4D] text-white p-3 rounded-full shadow-lg hover:bg-[#C58940] transition-colors"
          >
            <ChevronLeft size={24} />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-2 md:right-4 top-1/2 transform -translate-y-1/2 bg-[#E1AA4D] text-white p-3 rounded-full shadow-lg hover:bg-[#C58940] transition-colors"
          >
            <ChevronRight size={24} />
          </button>
        </div>
        <div className="flex justify-center mt-6">
          {bookCategories.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                setDirection(index > currentIndex ? 1 : -1);
                setCurrentIndex(index);
              }}
              className={`w-4 h-4 rounded-full mx-1 ${
                index === currentIndex ? 'bg-[#E1AA4D]' : 'bg-gray-400'
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default BookSlider;
