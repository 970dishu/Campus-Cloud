// import React, { useState } from 'react';
// import { ArrowRight } from 'lucide-react';
// import './Overview.css'; 

// import f1 from "../assets/images/f1.jpg"
// import f2 from "../assets/images/f2.jpg"
// import f3 from "../assets/images/f3.jpg"
// import f4 from "../assets/images/f4.jpg"
// import f5 from "../assets/images/f5.jpg"
// import f6 from "../assets/images/f6.jpg"
// import f7 from "../assets/images/f7.jpg"
// const tabsData = [
//   {
//     title: "Mastering Productivity",
//     content: "Discover powerful techniques to boost your productivity and achieve more in less time. Learn how to prioritize tasks effectively, manage your time wisely, and overcome procrastination",
//     image: f1
//   },
//   {
//     title: "Mindfulness and Mental Clarity",
//     content: "Explore the world of mindfulness and learn how to cultivate mental clarity in your daily life. Our comprehensive guide covers various meditation techniques, breathing exercises, and mindfulness practices that can reduce stress, improve focus, and enhance overall well-",
//     image: f2
//   },
//   {
//     title: "Effective Communication Skills",
//     content: "Master the art of effective communication and unlock new opportunities in both personal and professional spheres. Learn how to articulate your thoughts clearly, listen actively",
//     image: f3
//   },
//   {
//     title: "Financial Wisdom for Life",
//     content: "Gain essential financial knowledge and develop smart money habits that will serve you throughout life. Our comprehensive guide covers budgeting techniques, investment strategies, and tips for building long-term wealth. Learn how to set financial goals, create a robust savings plan, ",
//     image: f4
//   }
// ];

// const Overview = () => {
//   const [activeIndex, setActiveIndex] = useState(0);

//   const handleTabClick = (index) => {
//     setActiveIndex(index);
//   };

//   return (
//     <main id='about' className=" py-16">
//       <div className="container mx-auto px-4">
//         <header className="text-center mb-12">
//           <h2 className="text-4xl font-bold text-[#8B4513] mb-4">
//             <span className="text-[#E1AA4D]">Explore</span> Life-Changing Wisdom
//           </h2>
//           <p className="text-xl text-[#594545]">Discover powerful insights to transform your life and achieve your goals</p>
//         </header>
//         <section className="flex flex-col md:flex-row gap-8">
//           <ul className="indexes md:w-1/4 flex md:flex-col justify-center md:justify-start gap-4">
//             {tabsData.map((_, index) => (
//               <li
//                 key={index}
//                 data-index={index}
//                 onClick={() => handleTabClick(index)}
//                 className={`cursor-pointer text-2xl font-bold p-4 rounded-lg transition-all ${
//                   activeIndex === index
//                     ? 'bg-[#E1AA4D] text-white'
//                     : 'bg-white text-[#8B4513] hover:bg-[#C58940] hover:text-white'
//                 }`}
//               >
//                 {String(index + 1).padStart(2, '0')}
//               </li>
//             ))}
//           </ul>
//           <ul className="tabs md:w-3/4">
//             {tabsData.map((tab, index) => (
//               <li
//                 className={`tab ${activeIndex === index ? 'block' : 'hidden'}`}
//                 key={index}
//               >
//                 <article className="tab-content  p-2 rounded-lg shadow-lg">
//                   <h3 className="text-3xl font-bold text-[#8B4513] mb-4">{tab.title}</h3>
//                   <p className="text-[#594545] mb-6 leading-relaxed">{tab.content}</p>
//                   <button className="bg-[#E1AA4D] text-white px-6 py-3 rounded-full hover:bg-[#C58940] transition-colors flex items-center gap-2">
//                     Read More
//                     <ArrowRight size={20} />
//                   </button>
//                 </article>
//                 <div className="tab-image mt-8">
//                   <img src={tab.image} alt={tab.title} className="w-full h-64 object-cover rounded-lg shadow-lg" />
//                 </div>
//               </li>
//             ))}
//           </ul>
//         </section>
//       </div>
//     </main>
//   );
// };

// export default Overview;

import React, { useState } from 'react';
import { ArrowRight } from 'lucide-react';
import './Overview.css'; 

import f1 from "../assets/images/f1.jpg"
import f2 from "../assets/images/f2.jpg"
import f3 from "../assets/images/f3.jpg"
import f4 from "../assets/images/f4.jpg"

const tabsData = [
  {
    title: "Mastering Productivity",
    content: "Discover powerful techniques to boost your productivity and achieve more in less time. Learn how to prioritize tasks effectively, manage your time wisely, and overcome procrastination",
    image: f1
  },
  {
    title: "Mindfulness and Mental Clarity",
    content: "Explore the world of mindfulness and learn how to cultivate mental clarity in your daily life. Our comprehensive guide covers various meditation techniques, breathing exercises, and mindfulness practices that can reduce stress, improve focus, and enhance overall well-being.",
    image: f2
  },
  {
    title: "Effective Communication Skills",
    content: "Master the art of effective communication and unlock new opportunities in both personal and professional spheres. Learn how to articulate your thoughts clearly, listen actively, and improve your interpersonal relationships.",
    image: f3
  },
  {
    title: "Financial Wisdom for Life",
    content: "Gain essential financial knowledge and develop smart money habits that will serve you throughout life. Our comprehensive guide covers budgeting techniques, investment strategies, and tips for building long-term wealth. Learn how to set financial goals, create a robust savings plan, and secure your future.",
    image: f4
  }
];

const Overview = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleTabClick = (index) => {
    setActiveIndex(index);
  };

  return (
    <main id='about' className="py-16 bg-[#0D0D0D]">
      <div className="container mx-auto px-4">
        <header className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#8B4513] mb-4">
            <span className="text-[#E1AA4D]">Explore</span> Life-Changing Wisdom
          </h2>
          <p className="text-lg md:text-xl text-[#594545]">Discover powerful insights to transform your life and achieve your goals</p>
        </header>
        <section className="flex flex-col lg:flex-row gap-8">
          <ul className="indexes flex lg:flex-col justify-center lg:justify-start gap-4 mb-8 lg:mb-0 lg:w-1/4">
            {tabsData.map((_, index) => (
              <li
                key={index}
                data-index={index}
                onClick={() => handleTabClick(index)}
                className={`cursor-pointer text-lg md:text-2xl font-bold p-3 md:p-4 rounded-lg transition-all ${
                  activeIndex === index
                    ? 'bg-[#E1AA4D] text-white'
                    : 'bg-white text-[#8B4513] hover:bg-[#C58940] hover:text-white'
                }`}
              >
                {String(index + 1).padStart(2, '0')}
              </li>
            ))}
          </ul>
          <div className="tabs lg:w-3/4">
            {tabsData.map((tab, index) => (
              <div
                className={`tab ${activeIndex === index ? 'flex' : 'hidden'}`}
                key={index}
              >
                <div className="tab-content bg-white p-6 rounded-lg shadow-lg lg:flex lg:flex-row lg:items-center">
                  <div className="lg:w-1/2 lg:pr-6">
                    <h3 className="text-2xl md:text-3xl font-bold text-[#8B4513] mb-4">{tab.title}</h3>
                    <p className="text-[#594545] mb-6 leading-relaxed">{tab.content}</p>
                    <button className="bg-[#E1AA4D] text-white px-4 py-2 md:px-6 md:py-3 rounded-full hover:bg-[#C58940] transition-colors flex items-center gap-2">
                      Read More
                      <ArrowRight size={20} />
                    </button>
                  </div>
                  <div className="tab-image mt-8 lg:mt-0 lg:w-1/2">
                    <img src={tab.image} alt={tab.title} className="w-full h-48 md:h-64 lg:h-full object-cover rounded-lg shadow-lg" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
};

export default Overview;