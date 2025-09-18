import React, { useState } from 'react';
import { Link, useParams, Navigate } from 'react-router-dom';
import { ArrowRight, Calendar, Clock, Tag, ArrowLeft, Leaf } from 'lucide-react';
import { getPostsByTag, getAllTags, formatDate } from '../data/posts';
import { slugify } from '../utils/slugify';
import SEO from '../components/SEO';
import CategoryPill from '../components/CategoryPill';
import FadeInSection from '../components/FadeInSection';
import { getCategoryColor } from '../utils/blogColors';

const BlogTagPage: React.FC = () => {
  const { tag } = useParams<{ tag: string }>();
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 9;

  if (!tag) {
    return <Navigate to="/blog" replace />;
  }

  const posts = getPostsByTag(tag);
  const tags = getAllTags();
  const tagName = tags.find(t => slugify(t) === tag);

  if (!tagName || posts.length === 0) {
    return <Navigate to="/blog" replace />;
  }

  // Pagination
  const totalPages = Math.ceil(posts.length / postsPerPage);
  const startIndex = (currentPage - 1) * postsPerPage;
  const paginatedPosts = posts.slice(startIndex, startIndex + postsPerPage);

  return (
    <div className="bg-white">
      <SEO 
        title={`${tagName} Articles | Nettoyage Uno Blog`}
        description={`Articles tagged with ${tagName} - expert insights for Montréal businesses from commercial cleaning professionals.`}
        keywords={`${tagName}, commercial cleaning, Montréal business resources, facility management`}
      />

      {/* Hero Section */}
      <section className="bg-warm py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeInSection>
            <div className="mb-6">
              <Link
                to="/blog"
                className="inline-flex items-center text-gray-600 hover:text-gray-900 transition-colors focus:outline-none focus:ring-2 focus:ring-gray-900 focus:ring-offset-2 rounded"
              >
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to All Articles
              </Link>
            </div>
            <div className="text-center">
              <div className="inline-flex items-center px-3 py-1 bg-gray-100 text-gray-700 rounded-full mb-4">
                <Tag className="w-4 h-4 mr-2" />
                {tagName}
              </div>
              <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 leading-tight">
                Articles tagged "{tagName}"
              </h1>
              <p className="mt-6 text-xl text-gray-600 max-w-2xl mx-auto">
                {posts.length} article{posts.length !== 1 ? 's' : ''} with this tag
              </p>
            </div>
          </FadeInSection>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-3">
            {/* Blog Posts Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
              {paginatedPosts.map((post) => (
                <FadeInSection key={post.slug}>
                  <article className="bg-white border border-gray-200 rounded-2xl overflow-hidden hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                  {/* TODO: Add feature image when available */}
                    <div className="aspect-video bg-gray-100 flex items-center justify-center">
                      <div className="text-center">
                        <div className="w-16 h-16 mx-auto mb-3 bg-gray-200 rounded-lg flex items-center justify-center">
                          <svg className="w-8 h-8 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                          </svg>
                        </div>
                        <span className="text-gray-500 text-xs font-medium">{post.heroAlt}</span>
                      </div>
                    </div>
                  
                    <div className="p-6">
                      <div className="flex items-center gap-4 text-sm text-gray-500 mb-3">
                        <div className="flex items-center">
                          <Calendar className="w-4 h-4 mr-1" />
                          {formatDate(post.date)}
                        </div>
                        <div className="flex items-center">
                          <Clock className="w-4 h-4 mr-1" />
                          {post.readMinutes} min read
                        </div>
                      </div>
                      
                      <div className="mb-3">
                        <CategoryPill 
                          label={post.category}
                          icon={post.category?.toLowerCase() === 'sustainability' ? <Leaf className="w-4 h-4" /> : undefined}
                          color={getCategoryColor(post.category)}
                        />
                      </div>
                      
                      <h2 className="text-xl font-semibold text-gray-900 mb-3 leading-tight">
                        <Link 
                          to={`/blog/${post.slug}`}
                          className="hover:text-gray-700 transition-colors"
                        >
                          {post.title}
                        </Link>
                      </h2>
                      
                      <p className="text-gray-600 text-sm leading-relaxed mb-4">
                        {post.excerpt}
                      </p>
                      
                      <div className="flex flex-wrap gap-1 mb-4">
                        {post.tags.slice(0, 3).map((postTag) => (
                          <Link
                            key={postTag}
                            to={`/blog/tag/${slugify(postTag)}`}
                            className={`inline-flex items-center px-2 py-1 text-xs rounded transition-colors ${
                              postTag === tagName
                                ? 'bg-gray-900 text-white'
                                : 'bg-gray-50 text-gray-600 hover:bg-gray-100'
                            }`}
                          >
                            <Tag className="w-3 h-3 mr-1" />
                            {postTag}
                          </Link>
                        ))}
                      </div>
                      
                      <Link
                        to={`/blog/${post.slug}`}
                        className="inline-flex items-center text-gray-900 font-medium text-sm hover:text-gray-700 transition-colors"
                      >
                        Read more
                        <ArrowRight className="ml-1 w-4 h-4" />
                      </Link>
                    </div>
                  </article>
                </FadeInSection>
              ))}
            </div>

            {/* Pagination */}
            {totalPages > 1 && (
              <div className="flex justify-center items-center space-x-2">
                <button
                  onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
                  disabled={currentPage === 1}
                  className="px-3 py-2 text-sm border border-gray-300 rounded-md disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-50 transition-colors focus:outline-none focus:ring-2 focus:ring-gray-900 focus:ring-offset-2"
                >
                  Previous
                </button>
                
                {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                  <button
                    key={page}
                    onClick={() => setCurrentPage(page)}
                    className={`px-3 py-2 text-sm border rounded-md transition-colors focus:outline-none focus:ring-2 focus:ring-gray-900 focus:ring-offset-2 ${
                      currentPage === page
                        ? 'bg-gray-900 text-white border-gray-900'
                        : 'border-gray-300 hover:bg-gray-50'
                    }`}
                    aria-current={currentPage === page ? 'page' : undefined}
                  >
                    {page}
                  </button>
                ))}
                
                <button
                  onClick={() => setCurrentPage(Math.min(totalPages, currentPage + 1))}
                  disabled={currentPage === totalPages}
                  className="px-3 py-2 text-sm border border-gray-300 rounded-md disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-50 transition-colors focus:outline-none focus:ring-2 focus:ring-gray-900 focus:ring-offset-2"
                >
                  Next
                </button>
              </div>
            )}
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-8 space-y-8">
              {/* Related Tags */}
              <div className="bg-white p-6 rounded-2xl border border-gray-200">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Related Tags</h3>
                <div className="flex flex-wrap gap-2">
                  {tags.filter(t => t !== tagName).slice(0, 12).map((relatedTag) => (
                    <Link
                      key={relatedTag}
                      to={`/blog/tag/${slugify(relatedTag)}`}
                      className="px-2 py-1 bg-gray-50 text-gray-600 text-xs rounded hover:bg-gray-100 transition-colors focus:outline-none focus:ring-2 focus:ring-gray-900 focus:ring-offset-2"
                    >
                      {relatedTag}
                    </Link>
                  ))}
                </div>
              </div>

              {/* CTA Card */}
              <div className="bg-gray-50 p-6 rounded-2xl border border-gray-200">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Need Professional Cleaning?</h3>
                <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                  Get a customized cleaning plan for your Montréal facility. Professional service with flexible scheduling.
                </p>
                <Link
                  to="/get-quote"
                  className="btn-cta inline-flex items-center justify-center w-full px-4 py-2 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-gray-900 focus:ring-offset-2"
                >
                  Get a Quote
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </div>

              {/* Quick Links */}
              <div className="bg-white p-6 rounded-2xl border border-gray-200">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Explore Our Services</h3>
                <div className="space-y-3">
                  <Link
                    to="/services"
                    className="block text-gray-600 hover:text-gray-900 text-sm transition-colors"
                  >
                    All Cleaning Services
                  </Link>
                  <Link
                    to="/why-partner"
                    className="block text-gray-600 hover:text-gray-900 text-sm transition-colors"
                  >
                    Why Partner with Us
                  </Link>
                  <Link
                    to="/industries"
                    className="block text-gray-600 hover:text-gray-900 text-sm transition-colors"
                  >
                    Industries We Serve
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogTagPage;