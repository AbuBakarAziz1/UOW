"use client";

import { useParams } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { getEventById, getAllEvents, formatDate } from "../../lib/eventsData";
import { FaCalendar, FaUser, FaTag, FaArrowLeft, FaMapMarkerAlt } from "react-icons/fa";
import InnerPageLayout from "../../components/InnerPageLayout";

export default function EventDetail() {
  const params = useParams();
  const id = params.id as string;
  const event = getEventById(id);

  if (!event) {
    return (
      <InnerPageLayout section="news">
        <div className="text-center py-12">
          <h1 className="text-3xl font-bold text-gray-700 mb-4">Event Not Found</h1>
          <Link href="/events" className="text-theme-orange hover:underline">
            ← Back to Events
          </Link>
        </div>
      </InnerPageLayout>
    );
  }

  // Get related events (same category, excluding current)
  const relatedEvents = getAllEvents()
    .filter(e => e.category === event.category && e.id !== event.id)
    .slice(0, 3);

  return (
    <InnerPageLayout section="news">
      <div className="max-w-7xl mx-auto px-8 py-6 space-y-6">
        {/* Back Button */}
        <Link
          href="/events"
          className="inline-flex items-center gap-2 text-theme-orange hover:text-orange-700 font-semibold transition-colors"
        >
          <FaArrowLeft />
          Back to Events
        </Link>

        {/* Event Header */}
        <div>
          <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600 mb-4">
            <span className="flex items-center gap-2 bg-theme-orange/10 text-theme-orange px-4 py-2 rounded-full font-semibold">
              <FaTag />
              {event.category}
            </span>
            <span className="flex items-center gap-2 font-semibold">
              <FaCalendar className="text-theme-orange" />
              {formatDate(event.date)}
            </span>
            {event.author && (
              <span className="flex items-center gap-2">
                <FaUser className="text-theme-blue" />
                {event.author}
              </span>
            )}
            {event.location && (
              <span className="flex items-center gap-2">
                <FaMapMarkerAlt className="text-theme-orange" />
                {event.location}
              </span>
            )}
          </div>

          <h1 className="text-4xl md:text-5xl font-bold text-theme-blue mb-4">
            {event.title}
          </h1>

          <p className="text-xl text-gray-600 leading-relaxed">{event.excerpt}</p>
        </div>

        {/* Featured Image */}
        {event.featured && (
          <div className="mb-4">
            <span className="inline-block bg-red-500 text-white px-4 py-2 rounded-full text-sm font-bold">
              Featured Event
            </span>
          </div>
        )}

        <div className="relative w-full h-96 rounded-2xl overflow-hidden shadow-xl">
          <Image
            src={event.image}
            alt={event.title}
            fill
            className="object-cover"
          />
        </div>

        {/* Event Content */}
        <div className="prose prose-lg max-w-none">
          <div className="bg-orange-50 border-l-4 border-theme-orange p-6 rounded-r-lg mb-6">
            <h3 className="text-xl font-bold text-theme-orange mb-2">Event Details</h3>
            <p className="text-gray-700 leading-relaxed whitespace-pre-line">
              {event.content}
            </p>
          </div>
        </div>

        {/* Related Events */}
        {relatedEvents.length > 0 && (
          <div className="mt-12 border-t pt-8">
            <h2 className="text-3xl font-bold text-theme-blue mb-6">Related Events</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {relatedEvents.map((relatedEvent) => (
                <Link
                  key={relatedEvent.id}
                  href={`/events/${relatedEvent.id}`}
                  className="group"
                >
                  <div className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-200">
                    <div className="relative h-48 overflow-hidden">
                      <Image
                        src={relatedEvent.image}
                        alt={relatedEvent.title}
                        fill
                        className="object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                    </div>
                    <div className="p-4">
                      <div className="flex items-center gap-2 text-xs text-theme-orange mb-2">
                        <FaCalendar />
                        {formatDate(relatedEvent.date)}
                      </div>
                      <h3 className="font-bold text-theme-blue group-hover:text-theme-orange transition-colors line-clamp-2">
                        {relatedEvent.title}
                      </h3>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </InnerPageLayout>
  );
}
