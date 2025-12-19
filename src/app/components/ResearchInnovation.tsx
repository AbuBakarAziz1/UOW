"use client";
import React, { useEffect, useRef } from "react";
import { FaArrowRight, FaCalendarAlt } from "react-icons/fa";

const events = [
  {
    id: 1,
    title: "Annual Science Fair 2025 ",
    description: "Explore innovative student projects and cutting-edge research from all departments. Explore innovative student projects and cutting-edge research from all departments. Explore innovative student projects and cutting-edge research from all departments. Join us for a day of scientific discovery and academic excellence.",
    date: "2025-03-15",
    image: "https://images.unsplash.com/photo-1517077304055-6e89abbf09b0?auto=format&fit=crop&w=800&q=80",
    category: "Cultural",
  },
  {
    id: 2,
    title: "International Conference on AI Competition Competition Competition",
    description: "Leading experts from around the world will discuss the latest advancements in Artificial Intelligence and Machine Learning.",
    date: "2025-04-20",
    image: "https://images.unsplash.com/photo-1517077304055-6e89abbf09b0?auto=format&fit=crop&w=800&q=80",
    category: "Conference",
  },
  {
    id: 3,
    title: "Cultural Diversity Festival Competition Competition",
    description: "Celebrating the rich cultural heritage of our diverse student community.",
    date: "2025-05-10",
    image: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=800&q=80",
    category: "Cultural",
  },
  {
    id: 4,
    title: "Engineering Design Competition Competition",
    description: "Students showcase innovative engineering solutions to real-world problems.",
    date: "2025-06-05",
    image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=800&q=80",
    category: "Competition",
  },
  {
    id: 5,
    title: "Graduation Ceremony 2025",
    description: "Celebrating the achievements of our graduating class.",
    date: "2025-07-15",
    image: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=800&q=80",
    category: "Ceremony",
  },
  {
    id: 6,
    title: "Graduation Ceremony 2025",
    description: "Celebrating the achievements of our graduating class.",
    date: "2025-07-15",
    image: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=800&q=80",
    category: "Ceremony",
  },
  {
    id: 7,
    title: "Graduation Ceremony 2025",
    description: "Celebrating the achievements of our graduating class.",
    date: "2025-07-15",
    image: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=800&q=80",
    category: "Ceremony",
  },
  
];

const ResearchInnovation: React.FC = () => {
  const featuredEvent = events[0];
  const otherEvents = events.slice(1);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      month: 'short', 
      day: 'numeric', 
      year: 'numeric' 
    });
  };

  // Auto-scroll functionality - Continuous marquee style
  useEffect(() => {
    const scrollContainer = scrollContainerRef.current;
    if (!scrollContainer) return;

    let scrollInterval: NodeJS.Timeout;

    const startMarqueeScroll = () => {
      scrollInterval = setInterval(() => {
        const { scrollTop, scrollHeight, clientHeight } = scrollContainer;
        
        // If we've reached the bottom, reset to top for continuous loop
        if (scrollTop + clientHeight >= scrollHeight - 1) {
          scrollContainer.scrollTo({ top: 0, behavior: 'auto' });
        } else {
          // Continuous smooth scrolling down
          scrollContainer.scrollBy({
            top: 1, // Small increment for smooth continuous movement
            behavior: 'auto' // Use auto for smoother continuous movement
          });
        }
      }, 50); 
    };

    // Start immediately
    startMarqueeScroll();

    return () => {
      if (scrollInterval) {
        clearInterval(scrollInterval);
      }
    };
  }, []);

  return (
    <section className="w-full py-6 bg-gradient-to-r from-gray-50 via-blue-50 to-gray-100">
      <div className="max-w-7xl mx-auto px-4">
        <h3 className="text-theme-blue font-bold text-center text-2xl sm:text-3xl md:text-4xl tracking-wider drop-shadow-lg py-3 mb-4">
            RESEARCH & <span className="text-red-500">INNOVATIONS</span>
        </h3>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 items-start">
          
          {/* Center and Right Container */}
          <div className="lg:col-span-12">
            <div className="grid grid-cols-1 lg:grid-cols-8 gap-8">
              
              {/* Center - Featured Event Card - Full Overlay */}
              <div className="lg:col-span-5">
                <div 
                  className="relative h-96 rounded-2xl overflow-hidden shadow-xl"
                  style={{ backgroundImage: `url('${featuredEvent.image}')`, backgroundSize: 'cover', backgroundPosition: 'center' }}
                >
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-black/50"></div>
                  
                  {/* Category Badge */}
                  <div className="absolute top-6 left-6">
                    <span className="bg-black/70 text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg">
                      {featuredEvent.category}
                    </span>
                  </div>
                  
                  {/* Content Overlay */}
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                    <div className="flex items-center gap-2 mb-3">
                      <FaCalendarAlt className="text-theme-blue text-lg" />
                      <span className="text-sm font-medium">{formatDate(featuredEvent.date)}</span>
                    </div>
                    <h3 className="text-2xl lg:text-3xl font-bold mb-3">{featuredEvent.title}</h3>
                    <p className="text-gray-200 text-sm leading-relaxed mb-4 line-clamp-3">
                      {featuredEvent.description}
                    </p>
                    <button className="flex items-center gap-2 px-6 py-3 rounded-full bg-theme-blue text-white font-bold text-sm shadow-lg hover:bg-white hover:text-gray-800 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-white">
                      View More <FaArrowRight className="text-xs" />
                    </button>
                  </div>
                </div>
              </div>

              {/* Right Side - Previous Events List */}
              <div className="lg:col-span-3">
                <div className="h-96 flex flex-col">
                  <h3 className="text-xl font-bold text-theme-blue mb-4">Previous Events</h3>
                  <div 
                    ref={scrollContainerRef}
                    className="flex-1 space-y-4 overflow-y-auto scrollbar-hide"
                  >
                    {otherEvents.slice(0, 5).map(event => (
                      <div key={event.id} className="bg-white rounded-xl shadow-md border border-gray-100 overflow-hidden hover:shadow-lg transition-shadow duration-300">
                        <div className="flex h-28">
                          <div 
                            className="w-28 h-full bg-cover bg-center flex-shrink-0"
                            style={{ backgroundImage: `url('${event.image}')` }}
                          ></div>
                          <div className="flex-grow p-3 flex flex-col justify-between">
                            <div>
                              <h4 className="font-semibold text-theme-blue text-sm mb-1 line-clamp-1">
                                {event.title}
                              </h4>
                              <div className="flex items-center gap-1 text-gray-500 text-xs mb-2">
                                <FaCalendarAlt className="text-xs" />
                                <span>{formatDate(event.date)}</span>
                              </div>
                              <p className="text-gray-600 text-xs line-clamp-2">
                                {event.description.substring(0, 50)}...
                              </p>
                            </div>
                            <button className="mt-2 self-start px-3 py-1 rounded-full bg-gray-100 text-theme-blue text-xs font-semibold hover:bg-theme-orange hover:text-white transition-all duration-300">
                              View
                            </button>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                  
                  {/* All Events Button */}
                  <div className="mt-4 pt-4 border-t border-gray-200">
                    <button className="w-full flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-theme-blue text-white font-bold text-sm shadow-lg hover:bg-white hover:text-gray-800 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-theme-blue">
                      View All Events <FaArrowRight className="text-sm" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ResearchInnovation;