"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import InnerPageLayout from "../components/InnerPageLayout";
import { getAllEvents, formatDate, Event } from "../lib/eventsData";
import { FaCalendar, FaUser, FaTag, FaSearch, FaChevronRight, FaMapMarkerAlt } from "react-icons/fa";

export default function Events() {
  const allEvents = getAllEvents();
  const [searchQuery, setSearchQuery] = useState<string>("");

  // Filter events based on search query
  const filteredEvents = allEvents.filter((event) => {
    const matchesSearch = 
      event.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      event.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesSearch;
  });

  return (
    <InnerPageLayout section="news">
      <div className="max-w-7xl mx-auto px-8 py-6">
        {/* Page Header */}
        <div>
          <h1 className="text-4xl font-bold text-theme-blue mb-3">Events</h1>
          <p className="text-xl text-gray-600">
            Discover upcoming and ongoing events at University of Wah
          </p>
        </div>

        {/* Search Bar */}
        <div className="=p-1 mt-3">
          <div className="relative">
            <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Search events..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-theme-orange"
            />
          </div>
        </div>

        {/* Results Count */}
        <div className="text-gray-600 text-sm py-4">
          Showing <span className="font-bold text-theme-orange">{filteredEvents.length}</span> {filteredEvents.length === 1 ? "event" : "events"}
        </div>

        {/* Events List Cards */}
        {filteredEvents.length > 0 ? (
          <div className="space-y-6">
            {filteredEvents.map((event) => (
              <EventListCard key={event.id} event={event} />
            ))}
          </div>
        ) : (
          <div className="bg-gray-50 rounded-xl p-12 text-center border border-gray-200">
            <p className="text-gray-500 text-lg">No events found matching your criteria.</p>
          </div>
        )}
      </div>
    </InnerPageLayout>
  );
}

// Event List Card Component (horizontal list style)
function EventListCard({ event }: { event: Event }) {
  return (
    <Link href={`/events/${event.id}`}>
      <div className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 border-l-4 border-theme-orange overflow-hidden group cursor-pointer mb-3">
        <div className="flex flex-col md:flex-row">
          {/* Image */}
          <div className="relative md:w-64 h-48 md:h-auto overflow-hidden flex-shrink-0">
            <Image
              src={event.image}
              alt={event.title}
              width={300}
              height={200}
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
            />
            {event.featured && (
              <div className="absolute top-4 left-4">
                <span className="bg-red-500 text-white px-3 py-1 rounded-full text-xs font-bold">
                  Featured
                </span>
              </div>
            )}
            <div className="absolute bottom-4 right-4">
              <span className="bg-theme-orange text-white px-4 py-2 rounded-lg text-xs font-bold shadow-lg uppercase">
                EVENT
              </span>
            </div>
          </div>

          {/* Content */}
          <div className="flex-1 p-6 flex flex-col justify-between">
            <div>
              {/* Category and Date */}
              <div className="flex flex-wrap items-center gap-4 text-sm mb-3">
                <span className="flex items-center gap-2 bg-theme-orange/10 text-theme-orange px-3 py-1 rounded-full font-semibold">
                  <FaTag className="text-xs" />
                  {event.category}
                </span>
                <span className="flex items-center gap-2 text-gray-600">
                  <FaCalendar className="text-theme-orange" />
                  <span className="font-semibold">{formatDate(event.date)}</span>
                </span>
                {event.author && (
                  <span className="flex items-center gap-2 text-gray-600">
                    <FaUser className="text-theme-blue" />
                    {event.author}
                  </span>
                )}
              </div>

              {/* Title */}
              <h2 className="text-2xl font-bold text-theme-blue mb-3 group-hover:text-theme-orange transition-colors line-clamp-2">
                {event.title}
              </h2>

              {/* Excerpt */}
              <p className="text-gray-600 line-clamp-2 mb-4">{event.excerpt}</p>

              {/* Event Location (if needed) */}
              <div className="flex items-center gap-2 text-sm text-gray-500">
                <FaMapMarkerAlt className="text-theme-orange" />
                <span>University of Wah Campus</span>
              </div>
            </div>

            {/* View Details */}
            <div className="flex items-center gap-2 text-theme-orange font-semibold mt-4">
              View Event Details
              <FaChevronRight className="text-sm group-hover:translate-x-2 transition-transform" />
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}
