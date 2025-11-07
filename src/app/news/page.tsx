"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import InnerPageLayout from "../components/InnerPageLayout";
import { getAllNews, getNewsCategories, formatDate, NewsArticle } from "../lib/newsDataOnly";
import { FaCalendar, FaUser, FaTag, FaSearch, FaChevronRight } from "react-icons/fa";

export default function News() {
  const allNews = getAllNews();
  const categories = getNewsCategories();
  
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [searchQuery, setSearchQuery] = useState<string>("");

  // Filter news based on category and search query
  const filteredNews = allNews.filter((article) => {
    const matchesCategory = selectedCategory === "All" || article.category === selectedCategory;
    const matchesSearch = 
      article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      article.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <InnerPageLayout section="news">
      <div className="max-w-7xl mx-auto px-8 py-6">
        {/* Page Header */}
        <div>
          <h1 className="text-4xl font-bold text-theme-blue mb-3">News &<span className="text-red-500"> Announcements</span></h1>
          <p className="text-xl text-gray-600">
            Stay informed with the latest updates and announcements from University of Wah
          </p>
        </div>

        {/* Search Bar */}
        <div className="p-1 mt-3">
          <div className="relative">
            <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Search news and announcements..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-theme-blue"
            />
          </div>
        </div>

        {/* Results Count */}
        <div className="text-gray-600 text-sm py-4">
          Showing <span className="font-bold text-theme-blue">{filteredNews.length}</span> {filteredNews.length === 1 ? "item" : "items"}
        </div>

        {/* News List Cards */}
        {filteredNews.length > 0 ? (
          <div className="space-y-6">
            {filteredNews.map((article) => (
              <NewsListCard key={article.id} article={article} />
            ))}
          </div>
        ) : (
          <div className="bg-gray-50 rounded-xl p-12 text-center border border-gray-200">
            <p className="text-gray-500 text-lg">No news or announcements found matching your criteria.</p>
          </div>
        )}
      </div>
    </InnerPageLayout>
  );
}

// News List Card Component (horizontal list style)
function NewsListCard({ article }: { article: NewsArticle }) {
  return (
    <Link href={`/news/${article.id}`}>
      <div className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 border-l-4 border-theme-blue overflow-hidden group cursor-pointer mb-3">
        <div className="flex flex-col md:flex-row">
          {/* Image */}
          <div className="relative md:w-64 h-48 md:h-auto overflow-hidden flex-shrink-0">
            <Image
              src={article.image}
              alt={article.title}
              width={300}
              height={200}
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
            />
            {article.featured && (
              <div className="absolute top-4 left-4">
                <span className="bg-red-500 text-white px-3 py-1 rounded-full text-xs font-bold">
                  Featured
                </span>
              </div>
            )}
            <div className="absolute bottom-4 right-4">
              <span className="bg-theme-blue text-white px-4 py-2 rounded-lg text-xs font-bold shadow-lg uppercase">
                {article.type === 'announcement' ? 'ANNOUNCEMENT' : 'NEWS'}
              </span>
            </div>
          </div>

          {/* Content */}
          <div className="flex-1 p-6 flex flex-col justify-between">
            <div>
              {/* Category and Date */}
              <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500 mb-3">
                <span className="flex items-center gap-2 bg-theme-blue/10 text-theme-blue px-3 py-1 rounded-full font-semibold">
                  <FaTag className="text-xs" />
                  {article.category}
                </span>
                <span className="flex items-center gap-2">
                  <FaCalendar className="text-theme-orange" />
                  {formatDate(article.date)}
                </span>
                {article.author && (
                  <span className="flex items-center gap-2">
                    <FaUser className="text-theme-blue" />
                    {article.author}
                  </span>
                )}
              </div>

              {/* Title */}
              <h2 className="text-2xl font-bold text-theme-blue mb-3 group-hover:text-theme-orange transition-colors line-clamp-2">
                {article.title}
              </h2>

              {/* Excerpt */}
              <p className="text-gray-600 line-clamp-2 mb-4">{article.excerpt}</p>
            </div>

            {/* Read More */}
            <div className="flex items-center gap-2 text-theme-orange font-semibold">
              Read More
              <FaChevronRight className="text-sm group-hover:translate-x-2 transition-transform" />
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}

