"use client";

import { useParams } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import InnerPageLayout from "../../components/InnerPageLayout";
import { getAllNews, formatDate, getNewsById } from "../../lib/newsDataOnly";
import { FaCalendar, FaUser, FaTag, FaArrowLeft, FaShare } from "react-icons/fa";

export default function NewsArticle() {
  const params = useParams();
  const id = params?.id as string;
  
  const article = getNewsById(id);
  const latestNews = getAllNews().filter((a) => a.id !== id).slice(0, 3);

  if (!article) {
    return (
      <InnerPageLayout section="news">
        <div className="text-center py-12">
          <h1 className="text-3xl font-bold text-gray-800 mb-4">Article Not Found</h1>
          <p className="text-gray-600 mb-6">The news article you're looking for doesn't exist.</p>
          <Link
            href="/news"
            className="inline-flex items-center gap-2 px-6 py-3 bg-theme-blue text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            <FaArrowLeft />
            Back to News
          </Link>
        </div>
      </InnerPageLayout>
    );
  }

  return (
    <InnerPageLayout section="news">
      <div className="space-y-6 max-w-7xl mx-auto px-8 py-6">
        {/* Back Button */}
        <Link
          href="/news"
          className="inline-flex items-center gap-2 text-theme-blue hover:text-theme-orange transition-colors font-semibold"
        >
          <FaArrowLeft />
          Back to News
        </Link>

        {/* Featured Image */}
        <div className="relative h-96 rounded-xl overflow-hidden shadow-xl">
          <Image
            src={article.image}
            alt={article.title}
            width={1200}
            height={600}
            className="w-full h-full object-cover"
          />
          {article.featured && (
            <div className="absolute top-6 left-6">
              <span className="bg-red-500 text-white px-4 py-2 rounded-full text-sm font-bold">
                Featured Article
              </span>
            </div>
          )}
        </div>

        {/* Article Header */}
        <div className="bg-white rounded-xl shadow-lg p-8 border border-gray-200">
          {/* Category Badge */}
          <div className="mb-4">
            <span className="inline-flex items-center gap-2 bg-theme-blue text-white px-4 py-2 rounded-full text-sm font-bold">
              <FaTag />
              {article.category}
            </span>
          </div>

          {/* Title */}
          <h1 className="text-4xl font-bold text-theme-blue mb-6">{article.title}</h1>

          {/* Meta Information */}
          <div className="flex flex-wrap items-center gap-6 text-gray-600 pb-6 border-b border-gray-200">
            <span className="flex items-center gap-2">
              <FaCalendar className="text-theme-orange" />
              <span className="font-semibold">{formatDate(article.date)}</span>
            </span>
            {article.author && (
              <span className="flex items-center gap-2">
                <FaUser className="text-theme-blue" />
                <span className="font-semibold">{article.author}</span>
              </span>
            )}
            <button className="flex items-center gap-2 text-theme-blue hover:text-theme-orange transition-colors font-semibold ml-auto">
              <FaShare />
              Share
            </button>
          </div>

          {/* Excerpt */}
          <div className="mt-6 bg-blue-50 border-l-4 border-theme-blue p-6 rounded-r-lg">
            <p className="text-lg text-gray-700 italic">{article.excerpt}</p>
          </div>
        </div>

        {/* Article Content */}
        <div className="bg-white rounded-xl shadow-lg p-8 border border-gray-200">
          <div className="prose prose-lg max-w-none">
            <p className="text-gray-700 leading-relaxed text-lg whitespace-pre-line">
              {article.content}
            </p>
          </div>
        </div>

        {/* Related News */}
        {latestNews.length > 0 && (
          <div className="bg-gradient-to-r from-blue-50 to-orange-50 rounded-xl p-8 border border-gray-200">
            <h2 className="text-2xl font-bold text-theme-blue mb-6">Latest News</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {latestNews.map((news) => (
                <Link
                  key={news.id}
                  href={`/news/${news.id}`}
                  className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all group"
                >
                  <div className="relative h-40">
                    <Image
                      src={news.image}
                      alt={news.title}
                      width={400}
                      height={200}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-4">
                    <p className="text-xs text-gray-500 mb-2">{formatDate(news.date)}</p>
                    <h3 className="font-bold text-theme-blue group-hover:text-theme-orange transition-colors line-clamp-2">
                      {news.title}
                    </h3>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}

        {/* Call to Action */}
        <div className="bg-theme-blue text-white rounded-xl p-8 text-center">
          <h3 className="text-2xl font-bold mb-4">Stay Updated</h3>
          <p className="mb-6">
            Don't miss out on important announcements and events. Visit our news page regularly.
          </p>
          <Link
            href="/news"
            className="inline-block px-8 py-3 bg-theme-orange text-white rounded-full font-bold hover:bg-orange-600 transition-colors"
          >
            View All News
          </Link>
        </div>
      </div>
    </InnerPageLayout>
  );
}
