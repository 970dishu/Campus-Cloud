import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ChevronRight, Plus, Search, Trash2, ArrowRight } from 'lucide-react';
import Overview from "./Overview.jsx"
import o1 from "../assets/images/o1.jpg"
import o2 from "../assets/images/o3.jpg"
import o3 from "../assets/images/o2.jpg"
import f1 from "../assets/images/f1.jpg"
import f2 from "../assets/images/f2.jpg"
import f3 from "../assets/images/f3.jpg"
import f4 from "../assets/images/f4.jpg"
import f5 from "../assets/images/f5.jpg"
import f6 from "../assets/images/f6.jpg"
import f7 from "../assets/images/f7.jpg"
import bg from "../assets/images/bg.jpg"
import BookSlider from './BookSlider';

const categories = [
  { name: 'Verbal Skills', color: '#2A3B4F', icon: '🗣️' },
  { name: 'Soft Skills', color: '#2A3B4F', icon: '🤝' },
  { name: 'Books', color: '#2A3B4F', icon: '📚' },
  { name: 'Cultural', color: '#4F6B6B', icon: '🌍' },
  { name: 'Health', color: '#7C9D8E', icon: '💪' },
  { name: 'Food', color: '#FFD7C2', icon: '🍳' },
  { name: 'Sports', color: '#BFBFBF', icon: '⚽' },
  { name: 'Wisdom', color: '#E3CAA5', icon: '🧠' }
];

const lifeHacks = [
  {
    id: 1,
    title: 'Master Active Listening',
    category: 'Verbal Skills',
    shortDescription: 'Improve your communication skills through active listening techniques.',
    fullDescription: 'Active listening is a crucial skill that can transform your personal and professional relationships. It involves fully concentrating on what is being said rather than just passively hearing the message of the speaker.',
    tips: [
      'Give the speaker your undivided attention',
      'Use non-verbal cues to show engagement',
      'Ask clarifying questions',
      'Avoid interrupting',
      'Provide meaningful feedback'
    ],
    image: f1,
    author: 'Communication Expert',
    readingTime: '5 min'
  },
  {
    id: 2,
    title: 'Use LinkedIn Projects and Media Sections',
    category: 'Soft Skills',
    shortDescription: 'Showcase your work and skills effectively on LinkedIn.',
    fullDescription: 'Utilize LinkedIns Projects and Media sections to highlight your achievements, portfolio pieces, and professional development. This can significantly enhance your profile and attract potential employers or collaborators.',
    tips: [
      'Add detailed descriptions to your projects',
      'Include visual elements like images or videos',
      'Link to external resources or live projects',
      'Keep your profile updated with your latest work'
    ],
    image: f2,
    author: 'Career Coach',
    readingTime: '4 min'
  },
  {
    id: 3,
    title: 'Build an Online Portfolio',
    category: 'Soft Skills',
    shortDescription: 'Create a professional online presence to showcase your work.',
    fullDescription: 'An online portfolio is a powerful tool to display your skills, projects, and achievements. It serves as a digital resume and can significantly improve your chances of landing opportunities in your field.',
    tips: [
      'Choose a clean, professional design',
      'Showcase your best and most relevant work',
      'Include a brief bio and contact information',
      'Ensure your portfolio is mobile-friendly',
      'Update regularly with new projects and skills'
    ],
    image: f3,
    author: 'Web Designer',
    readingTime: '6 min'
  },
  {
    id: 4,
    title: 'Learn Time Management Skills',
    category: 'Soft Skills',
    shortDescription: 'Master the art of managing your time effectively.',
    fullDescription: 'Effective time management is crucial for success in both academic and professional life. By learning to prioritize tasks, avoid procrastination, and use your time efficiently, you can increase productivity and reduce stress.',
    tips: [
      'Use a planner or digital calendar',
      'Break large tasks into smaller, manageable chunks',
      'Set realistic goals and deadlines',
      'Use the Pomodoro Technique for focused work sessions',
      'Learn to say no to non-essential commitments'
    ],
    image: f4,
    author: 'Productivity Expert',
    readingTime: '5 min'
  },
  {
    id: 5,
    title: 'Seek Mentorship',
    category: 'Soft Skills',
    shortDescription: 'Find a mentor to guide you in your personal and professional growth.',
    fullDescription: 'A mentor can provide valuable insights, advice, and support as you navigate your career or personal development. They can help you avoid common pitfalls, expand your network, and accelerate your growth.',
    tips: [
      'Identify potential mentors in your field of interest',
      'Reach out respectfully and explain why you had like their mentorship',
      'Be clear about your goals and expectations',
      'Show appreciation for your mentors time and advice',
      'Be proactive in scheduling regular check-ins'
    ],
    image: f5,
    author: 'Career Counselor',
    readingTime: '5 min'
  },
  {
    id: 6,
    title: 'Use Social Media Wisely',
    category: 'Soft Skills',
    shortDescription: 'Leverage social media for professional growth and networking.',
    fullDescription: 'Social media can be a powerful tool for building your personal brand, networking, and staying informed about your industry. However, it is important to use it strategically and maintain a professional online presence.',
    tips: [
      'Curate your content to reflect your professional interests',
      'Engage with industry leaders and join relevant discussions',
      'Share your own insights and work',
      'Be mindful of what you post - it can impact your professional image',
      'Use privacy settings to control what potential employers can see'
    ],
    image: f6,
    author: 'Digital Marketing Specialist',
    readingTime: '4 min'
  },
  {
    id: 7,
    title: 'Connect with Professors and Alumni',
    category: 'Soft Skills',
    shortDescription: 'Build relationships that can benefit your academic and professional life.',
    fullDescription: 'Professors and alumni can be valuable resources for academic guidance, career advice, and networking opportunities. Building strong relationships with them can open doors to internships, research opportunities, and job prospects.',
    tips: [
      'Attend office hours and engage in class discussions',
      'Participate in alumni events and networking sessions',
      'Follow up after meetings to maintain connections',
      'Seek advice on course selections and career paths',
      'Offer to help with research or projects of mutual interest'
    ],
    image: f7,
    author: 'University Career Advisor',
    readingTime: '5 min'
  },
];

export default function Home() {
  const [wheelRotation, setWheelRotation] = useState(0);
  const [selectedHack, setSelectedHack] = useState(null);
  const [userHacks, setUserHacks] = useState([]);
  const [isAddHackModalOpen, setIsAddHackModalOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [previewImage, setPreviewImage] = useState(null);
  const modalRef = useRef(null);
  const hackDetailRef = useRef(null);

  useEffect(() => {
    const storedHacks = localStorage.getItem('userHacks');
    if (storedHacks) {
      setUserHacks(JSON.parse(storedHacks));
    }
  }, []);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        setIsAddHackModalOpen(false);
      }
      if (hackDetailRef.current && !hackDetailRef.current.contains(event.target)) {
        setSelectedHack(null);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const spinWheel = () => {
    const newRotation = wheelRotation + 1800 + Math.floor(Math.random() * 360);
    setWheelRotation(newRotation);
    setTimeout(() => {
      const randomHack = lifeHacks[Math.floor(Math.random() * lifeHacks.length)];
      setSelectedHack(randomHack);
    }, 1500);
  };

  const addUserHack = (hack) => {
    const updatedHacks = [...userHacks, { ...hack, id: Date.now() }];
    setUserHacks(updatedHacks);
    localStorage.setItem('userHacks', JSON.stringify(updatedHacks));
    setIsAddHackModalOpen(false);
    setPreviewImage(null);
  };

  const deleteUserHack = (hackId) => {
    const updatedHacks = userHacks.filter(hack => hack.id !== hackId);
    setUserHacks(updatedHacks);
    localStorage.setItem('userHacks', JSON.stringify(updatedHacks));
  };

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreviewImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="min-h-screen bg-[#0D0D0D] text-[#F2F2F2] font-serif">
      <section
        className="pb-16 pt-48 bg-cover h-[90vh]  bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${bg})` }}
      >
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white drop-shadow-lg">
              Discover Life's Wisdom
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl mb-8 text-white opacity-90 drop-shadow-md">
              Explore a collection of life-changing tips and tricks to enhance your daily life
            </p>
            <button
              onClick={() => document.getElementById('wheel').scrollIntoView({ behavior: 'smooth' })}
              className="bg-white text-[#0D0D0D] px-6 py-3 text-lg sm:text-xl rounded-full hover:bg-[#8C8C8C] hover:text-white transition-colors shadow-lg"
            >
              Get Started
            </button>
          </div>
        </div>
      </section>

      <Overview />
      <BookSlider />

      <section id="wheel" className="py-20 bg-[#0D0D0D]">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between md:space-x-16 lg:space-x-32">
            <div className="relative w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 mb-12 md:mb-0">
              <motion.div
                className="w-full h-full rounded-full border-8 border-[#E1AA4D] shadow-xl overflow-hidden"
                style={{ rotate: wheelRotation }}
                transition={{ duration: 5, ease: "easeOut" }}
              >
                {categories.map((category, index) => (
                  <div
                    key={category.name}
                    className="absolute w-full h-full"
                    style={{
                      transform: `rotate(${(index * 360) / categories.length}deg)`,
                      transformOrigin: '50% 50%',
                    }}
                  >
                    <div
                      className="w-1/2 h-full origin-right flex items-center justify-center"
                      style={{ backgroundColor: category.color }}
                    >
                      <span className="text-white font-bold text-xs sm:text-sm md:text-base transform -rotate-90">
                        {category.name}
                      </span>
                    </div>
                  </div>
                ))}
              </motion.div>
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-6 h-6 sm:w-8 sm:h-8 bg-white rounded-full shadow-lg z-10"></div>
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20">
                <div className="w-0 h-0 border-l-[15px] border-r-[15px] border-t-[30px] sm:border-l-[20px] sm:border-r-[20px] sm:border-t-[40px] border-l-transparent border-r-transparent border-t-[#C58940]"></div>
              </div>
            </div>

            <div className="md:max-w-lg text-center md:text-left">
              <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-[#E1AA4D] mb-4">
                Spin for <span className="text-[#C58940]">Daily Wisdom</span>
              </h2>
              <p className="text-base sm:text-lg md:text-xl text-gray-300 mb-8 leading-relaxed">
                Discover insights, tips, and tricks to elevate your everyday life.
                From motivation to mindfulness, there's something new to uncover each day.
              </p>
              <button
                onClick={spinWheel}
                className="bg-[#E1AA4D] text-white px-8 py-3 text-lg sm:text-xl rounded-full hover:bg-[#C58940] transition-all duration-300 ease-in-out shadow-xl font-semibold tracking-wide"
              >
                Spin the Wheel
              </button>
            </div>
          </div>
        </div>
      </section>

      

      <section className="py-16 bg-[#0D0D0D]">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-12">Life Hacks</h2>
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <div className="relative w-full sm:w-auto">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Search hacks..."
                className="w-full sm:w-auto pl-10 pr-4 py-2 border rounded-full text-black"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            <select
              className="w-full sm:w-auto px-4 text-[#404040] py-2 border rounded-full"
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
            >
              <option className='px-4' value="all">All Categories</option>
              {categories.map((category) => (
                <option key={category.name} value={category.name}>
                  {category.name}
                </option>
              ))}
            </select>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {lifeHacks
              .filter(hack => 
                (selectedCategory === 'all' || hack.category === selectedCategory) &&
                (hack.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                 hack.shortDescription.toLowerCase().includes(searchQuery.toLowerCase()))
              )
              .map((hack) => (
                <motion.div
                  key={hack.id}
                  whileHover={{ y: -10 }}
                  className="bg-white rounded-2xl overflow-hidden shadow-lg"
                >
                  <img src={hack.image} alt={hack.title} className="w-full h-48 object-cover" />
                  <div className="p-6">
                    <h3 className="text-xl text-black font-bold mb-2">{hack.title}</h3>
                    <p className="text-gray-600 mb-4">{hack.shortDescription}</p>
                    <button
                      onClick={() => setSelectedHack(hack)}
                      className="flex items-center text-[#404040] font-bold hover:text-[#BFBFBF]"
                    >
                      Read More <ArrowRight className="ml-2" />
                    </button>
                  </div>
                </motion.div>
              ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-[#0D0D0D]">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-12">Community Wisdom</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {userHacks.map((hack) => (
              <motion.div
                key={hack.id}
                whileHover={{ y: -10 }}
                className="bg-[#FFF8F0] rounded-lg overflow-hidden shadow-lg"
              >
                <img src={hack.image} alt={hack.title} className="w-full h-48 object-cover" />
                <div className="p-6">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-xl text-black font-bold">{hack.title}</h3>
                    <button
                      onClick={() => deleteUserHack(hack.id)}
                      className="text-red-500 hover:text-red-700"
                    >
                      <Trash2 size={20} />
                    </button>
                  </div>
                  <p className="text-gray-600 mb-4">{hack.shortDescription}</p>
                  <button
                    onClick={() => setSelectedHack(hack)}
                    className="flex items-center text-[#E1AA4D] font-bold hover:text-[#C58940]"
                  >
                    Read More <ArrowRight className="ml-2" />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <AnimatePresence>
        {isAddHackModalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50 overflow-y-auto"
          >
            <motion.div
              ref={modalRef}
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              className="bg-white rounded-lg p-6 max-w-md w-full max-h-[90vh] overflow-y-auto"
            >
              <h3 className="text-xl sm:text-2xl text-black font-bold mb-6">Share Your Wisdom</h3>
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  const formData = new FormData(e.target);
                  addUserHack({
                    title: formData.get('title'),
                    category: formData.get('category'),
                    shortDescription: formData.get('shortDescription'),
                    fullDescription: formData.get('fullDescription'),
                    tips: formData.get('tips').split('\n'),
                    image: previewImage || '/placeholder.svg?height=400&width=600',
                    author: formData.get('author'),
                    readingTime: '5 min'
                  });
                }}
                className="space-y-4"
              >
                <input
                  type="text"
                  name="title"
                  placeholder="Hack Title"
                  required
                  className="w-full p-2 border text-black rounded"
                />
                <select
                  name="category"
                  required
                  className="w-full text-black p-2 border rounded"
                >
                  {categories.map((category) => (
                    <option key={category.name} value={category.name}>
                      {category.name}
                    </option>
                  ))}
                </select>
                <textarea
                  name="shortDescription"
                  placeholder="Short Description"
                  required
                  className="w-full text-black p-2 border rounded"
                  rows={2}
                />
                <textarea
                  name="fullDescription"
                  placeholder="Full Description"
                  required
                  className="w-full text-black p-2 border rounded"
                  rows={4}
                />
                <textarea
                  name="tips"
                  placeholder="Tips (one per line)"
                  required
                  className="w-full text-black p-2 border rounded"
                  rows={3}
                />
                <input
                  type="text"
                  name="author"
                  placeholder="Your Name"
                  required
                  className="w-full text-black p-2 border rounded"
                />
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Upload Image
                  </label>
                  <input
                    type="file"
                    accept="image/*"
                    onChange={handleImageUpload}
                    className="w-full"
                  />
                  {previewImage && (
                    <img
                      src={previewImage}
                      alt="Preview"
                      className="mt-2 h-32 object-cover rounded"
                    />
                  )}
                </div>
                <div className="flex justify-end space-x-4">
                  <button
                    type="button"
                    onClick={() => setIsAddHackModalOpen(false)}
                    className="px-4 py-2 border rounded hover:bg-gray-100 text-black"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="px-4 py-2 bg-[#E1AA4D] text-white rounded hover:bg-[#C58940]"
                  >
                    Share Wisdom
                  </button>
                </div>
              </form>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {selectedHack && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50 overflow-y-auto"
          >
            <motion.div
              ref={hackDetailRef}
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              className="bg-white rounded-lg p-6 max-w-2xl w-full max-h-[90vh] overflow-y-auto"
            >
              <button
                onClick={() => setSelectedHack(null)}
                className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
              >
                <X size={24} />
              </button>
              <img
                src={selectedHack.image}
                alt={selectedHack.title}
                className="w-full h-64 object-cover rounded-lg mb-6"
              />
              <h3 className="text-xl sm:text-2xl text-black font-bold mb-4">{selectedHack.title}</h3>
              <div className="flex items-center text-gray-500 mb-4">
                <span>{selectedHack.author}</span>
                <span className="mx-2">•</span>
                <span>{selectedHack.category}</span>
                <span className="mx-2">•</span>
                <span>{selectedHack.readingTime} read</span>
              </div>
              <p className="text-gray-700 mb-6">{selectedHack.fullDescription}</p>
              <h4 className="text-lg sm:text-xl font-bold text-black mb-4">Key Tips:</h4>
              <ul className="list-disc pl-6 mb-6">
                {selectedHack.tips.map((tip, index) => (
                  <li key={index} className="text-gray-700 mb-2">{tip}</li>
                ))}
              </ul>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <button
        onClick={() => setIsAddHackModalOpen(true)}
        className="fixed bottom-8 right-8 bg-[#E1AA4D] text-white w-12 h-12 sm:w-14 sm:h-14 rounded-full shadow-lg flex items-center justify-center hover:bg-[#C58940] transition-colors"
      >
        <Plus size={24} />
      </button>
    </div>
  );
}