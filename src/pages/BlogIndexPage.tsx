import React, { useState, useMemo } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { Search, ArrowRight, Calendar, Clock, Tag, Leaf } from 'lucide-react';
import { blogPosts, getAllCategories, getAllTags, formatDate } from '../data/posts';
import { slugify } from '../utils/slugify';
import SEO from '../components/SEO';
import CategoryPill from '../components/CategoryPill';
import FadeInSection from '../components/FadeInSection';
import { getCategoryColor } from '../utils/blogColors';
import AnimatedImage from '../components/media/AnimatedImage';
import GradientBackdrop from '../components/brand/GradientBackdrop';

const BlogIndexPage: React.FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [searchTerm, setSearchTerm] = useState(searchParams.get('search') || '');
  const [selectedCategory, setSelectedCategory] = useState(searchParams.get('category') || '');
  const [selectedTag, setSelectedTag] = useState(searchParams.get('tag') || '');
  const [currentPage, setCurrentPage] = useState(1);
  
  const postsPerPage = 9;
  const categories = getAllCategories();
  const tags = getAllTags();

  // Filter posts based on search and filters
  const filteredPosts = useMemo(() => {
    return blogPosts.filter(post => {
      const matchesSearch = searchTerm === '' || 
        post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
        post.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
      
      const matchesCategory = selectedCategory === '' || 
        post.category.toLowerCase().replace(/\s+/g, '-') === selectedCategory;
      
      const matchesTag = selectedTag === '' || 
        post.tags.some(tag => tag.toLowerCase().replace(/\s+/g, '-') === selectedTag);
      
      return matchesSearch && matchesCategory && matchesTag;
    }).sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
  }, [searchTerm, selectedCategory, selectedTag]);

  // Pagination
  const totalPages = Math.ceil(filteredPosts.length / postsPerPage);
  const startIndex = (currentPage - 1) * postsPerPage;
  const paginatedPosts = filteredPosts.slice(startIndex, startIndex + postsPerPage);

  // Update URL params when filters change
  const updateFilters = (search: string, category: string, tag: string) => {
    const params = new URLSearchParams();
    if (search) params.set('search', search);
    if (category) params.set('category', category);
    if (tag) params.set('tag', tag);
    setSearchParams(params);
    setCurrentPage(1);
  };

  const handleSearchChange = (value: string) => {
    setSearchTerm(value);
    updateFilters(value, selectedCategory, selectedTag);
  };

  const handleCategoryChange = (category: string) => {
    const newCategory = selectedCategory === category ? '' : category;
    setSelectedCategory(newCategory);
    updateFilters(searchTerm, newCategory, selectedTag);
  };

  const handleTagChange = (tag: string) => {
    const newTag = selectedTag === tag ? '' : tag;
    setSelectedTag(newTag);
    updateFilters(searchTerm, selectedCategory, newTag);
  };

  const clearFilters = () => {
    setSearchTerm('');
    setSelectedCategory('');
    setSelectedTag('');
    setSearchParams({});
    setCurrentPage(1);
  };

  return (
    <div className="bg-white">
      <SEO 
        title="Commercial Cleaning Blog Montréal | Nettoyage Uno"
        description="Expert articles on office, warehouse, condo, post-construction, and sustainable cleaning practices in Montréal."
        keywords="commercial cleaning blog, facility management tips, cleaning industry insights, Montréal business resources"
      />

      {/* Pagination SEO Links */}
      <Helmet>
        {currentPage > 1 && (
          <link 
            rel="prev" 
            href={`https://nettoyageuno.com/blog${currentPage === 2 ? '' : `?page=${currentPage - 1}`}${searchTerm ? `${currentPage === 2 ? '?' : '&'}search=${encodeURIComponent(searchTerm)}` : ''}${selectedCategory ? `${(currentPage === 2 && !searchTerm) ? '?' : '&'}category=${selectedCategory}` : ''}${selectedTag ? `${(currentPage === 2 && !searchTerm && !selectedCategory) ? '?' : '&'}tag=${selectedTag}` : ''}`}
          />
        )}
        {currentPage < totalPages && (
          <link 
            rel="next" 
            href={`https://nettoyageuno.com/blog?page=${currentPage + 1}${searchTerm ? `&search=${encodeURIComponent(searchTerm)}` : ''}${selectedCategory ? `&category=${selectedCategory}` : ''}${selectedTag ? `&tag=${selectedTag}` : ''}`}
          />
        )}
      </Helmet>

      {/* Hero Section */}
      <section className="relative uno-hero uno-noise py-16">
        <GradientBackdrop />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeInSection>
            <div className="text-center">
              <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight">
                Commercial Cleaning Insights & Resources
              </h1>
              <p className="mt-6 text-xl text-gray-300 max-w-2xl mx-auto">
                Expert articles on facility maintenance, office cleaning, warehouse care, and sustainability in Montréal.
              </p>
            </div>
          </FadeInSection>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-3">
            {/* Search and Filters */}
            <div className="mb-8">
              {/* Search Bar */}
              <div className="relative mb-6">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search cleaning topics..."
                  value={searchTerm}
                  onChange={(e) => handleSearchChange(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent"
                  aria-label="Search cleaning topics"
                />
              </div>

              {/* Category Pills */}
              <div className="mb-4">
                <h3 className="text-sm font-medium text-gray-700 mb-3">Categories</h3>
                <div className="flex flex-wrap gap-2 mb-2">
                  {categories.map((category) => {
                    const categorySlug = category.toLowerCase().replace(/\s+/g, '-');
                    const isSelected = selectedCategory === categorySlug;
                    const categoryColor = getCategoryColor(category);
                    const categoryIcon = category?.toLowerCase() === 'sustainability' ? <Leaf className="w-4 h-4" /> : undefined;
                    return (
                      <button
                        key={category}
                        onClick={() => handleCategoryChange(categorySlug)}
                        className={`transition-colors focus:outline-none focus:ring-2 focus:ring-gray-900 focus:ring-offset-2 ${
                          isSelected
                            ? 'ring-2 ring-gray-900 ring-offset-2'
                            : 'hover:scale-105'
                        }`}
                        aria-pressed={isSelected}
                      >
                        <CategoryPill 
                          label={category} 
                          icon={categoryIcon}
                          color={isSelected ? 'gray' : categoryColor}
                        />
                      </button>
                    );
                  })}
                </div>
                <p className="text-xs text-gray-500">
                  <Leaf className="w-3 h-3 inline mr-1 text-emerald-600" />
                  Green indicates sustainability-focused content
                </p>
              </div>

              {/* Tag Cloud */}
              <div className="mb-6">
                <h3 className="text-sm font-medium text-gray-700 mb-3">Tags</h3>
                <div className="flex flex-wrap gap-2">
                  {tags.slice(0, 12).map((tag) => {
                    const tagSlug = tag.toLowerCase().replace(/\s+/g, '-');
                    const isSelected = selectedTag === tagSlug;
                    return (
                      <button
                        key={tag}
                        onClick={() => handleTagChange(tagSlug)}
                        className={`px-2 py-1 text-xs rounded border transition-colors focus:outline-none focus:ring-2 focus:ring-gray-900 focus:ring-offset-2 ${
                          isSelected
                            ? 'bg-gray-900 text-white border-gray-900'
                            : 'bg-gray-50 text-gray-600 border-gray-200 hover:border-gray-300'
                        }`}
                        aria-pressed={isSelected}
                      >
                        {tag}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Active Filters */}
              {(searchTerm || selectedCategory || selectedTag) && (
                <div className="flex items-center gap-2 mb-6">
                  <span className="text-sm text-gray-600">Active filters:</span>
                  {searchTerm && (
                    <span className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded">
                      Search: "{searchTerm}"
                    </span>
                  )}
                  {selectedCategory && (
                    <span className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded">
                      Category: {categories.find(c => c.toLowerCase().replace(/\s+/g, '-') === selectedCategory)}
                    </span>
                  )}
                  {selectedTag && (
                    <span className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded">
                      Tag: {tags.find(t => t.toLowerCase().replace(/\s+/g, '-') === selectedTag)}
                    </span>
                  )}
                  <button
                    onClick={clearFilters}
                    className="text-xs text-gray-500 hover:text-gray-700 underline focus:outline-none"
                  >
                    Clear all
                  </button>
                </div>
              )}
            </div>

            {/* Results Count */}
            <div className="mb-6">
              <p className="text-gray-600">
                {filteredPosts.length === 0 
                  ? 'No articles found matching your criteria.'
                  : `Showing ${filteredPosts.length} article${filteredPosts.length !== 1 ? 's' : ''}`
                }
              </p>
            </div>

            {/* Blog Posts Grid */}
            {paginatedPosts.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
                {paginatedPosts.map((post) => (
                  <FadeInSection key={post.slug}>
                    <article className="bg-white border border-gray-200 rounded-2xl overflow-hidden hover:shadow-lg transition-all duration-300 hover:-translate-y-1 group">
                      <AnimatedImage 
                        src={post.heroSrc} 
                        alt={post.heroAlt} 
                        aspect="16/9"
                      />
                    
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
                          {post.tags.slice(0, 3).map((tag) => (
                            <Link
                              key={tag}
                              to={`/blog/tag/${slugify(tag)}`}
                              className="inline-flex items-center px-2 py-1 bg-gray-50 text-gray-600 text-xs rounded hover:bg-gray-100 transition-colors"
                            >
                              <Tag className="w-3 h-3 mr-1" />
                              {tag}
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
            ) : (
              <div className="text-center py-12">
                <p className="text-gray-500 mb-4">No articles match your current filters.</p>
                <button
                  onClick={clearFilters}
                  className="text-gray-900 font-medium hover:text-gray-700 transition-colors"
                >
                  Clear filters to see all articles
                </button>
              </div>
            )}

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
              {/* CTA Card */}
              <div className="bg-gray-50 p-6 rounded-2xl border border-gray-200">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Start Your Partnership</h3>
                <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                  Ready to work with Montréal's trusted commercial cleaning partner? Get your custom proposal within 24 hours.
                </p>
                <Link
                  to="/contact"
                  className="btn-cta inline-flex items-center justify-center w-full px-4 py-2 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-gray-900 focus:ring-offset-2"
                >
                  Get Your Quote
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
                    to="/services/office-cleaning"
                    className="block text-gray-600 hover:text-gray-900 text-sm transition-colors"
                  >
                    Office Cleaning
                  </Link>
                  <Link
                    to="/services/building-cleaning"
                    className="block text-gray-600 hover:text-gray-900 text-sm transition-colors"
                  >
                    Building Maintenance
                  </Link>
                  <Link
                    to="/services/warehouse-cleaning"
                    className="block text-gray-600 hover:text-gray-900 text-sm transition-colors"
                  >
                    Warehouse Cleaning
                  </Link>
                  <Link
                    to="/why-partner"
                    className="block text-gray-600 hover:text-gray-900 text-sm transition-colors"
                  >
                    Why Partner with Us
                  </Link>
                </div>
              </div>

              {/* Popular Tags */}
              <div className="bg-white p-6 rounded-2xl border border-gray-200">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Popular Topics</h3>
                <div className="flex flex-wrap gap-2">
                  {tags.slice(0, 8).map((tag) => (
                    <Link
                      key={tag}
                      to={`/blog/tag/${slugify(tag)}`}
                      className="px-2 py-1 bg-gray-50 text-gray-600 text-xs rounded hover:bg-gray-100 transition-colors focus:outline-none focus:ring-2 focus:ring-gray-900 focus:ring-offset-2"
                    >
                      {tag}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogIndexPage;
