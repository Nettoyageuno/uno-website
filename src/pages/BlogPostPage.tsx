import React from 'react';
import { Link, useParams, Navigate } from 'react-router-dom';
import { Calendar, Clock, ArrowLeft, ArrowRight, Tag, User, Mail, Leaf } from 'lucide-react';
import { getPostBySlug, blogPosts, formatDate } from '../data/posts';
import { slugify } from '../utils/slugify';
import SEO from '../components/SEO';
import CategoryPill from '../components/CategoryPill';
import EcoTip from '../components/EcoTip';
import { getCategoryColor } from '../utils/blogColors';

const BlogPostPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  
  if (!slug) {
    return <Navigate to="/blog" replace />;
  }

  const post = getPostBySlug(slug);
  
  if (!post) {
    return <Navigate to="/blog" replace />;
  }

  // Find previous and next posts
  const currentIndex = blogPosts.findIndex(p => p.slug === slug);
  const prevPost = currentIndex < blogPosts.length - 1 ? blogPosts[currentIndex + 1] : null;
  const nextPost = currentIndex > 0 ? blogPosts[currentIndex - 1] : null;

  // Generate JSON-LD structured data
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": post.title,
    "description": post.excerpt,
    "image": post.heroSrc || "https://nettoyageuno.com/blog-default.jpg",
    "datePublished": post.date,
    "dateModified": post.date,
    "author": {
      "@type": "Organization",
      "name": post.author.name,
      "email": post.author.email
    },
    "publisher": {
      "@type": "Organization",
      "name": "Nettoyage Uno",
      "logo": {
        "@type": "ImageObject",
        "url": "https://nettoyageuno.com/logo.png"
      }
    },
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": `https://nettoyageuno.com/blog/${post.slug}`
    },
    "articleSection": post.category,
    "keywords": post.tags.join(", "),
    "wordCount": post.body.split(/\s+/).length,
    "timeRequired": `PT${post.readMinutes}M`
  };

  // Breadcrumb structured data
  const breadcrumbData = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://nettoyageuno.com/"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Blog",
        "item": "https://nettoyageuno.com/blog"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": post.title,
        "item": `https://nettoyageuno.com/blog/${post.slug}`
      }
    ]
  };

  // Process blog content (simple markdown-like processing)
  const processContent = (content: string) => {
    return content
      .split('\n')
      .map((line, index) => {
        line = line.trim();
        if (!line) return <br key={index} />;
        
        // Headers
        if (line.startsWith('# ')) {
          return <h1 key={index} className="text-3xl font-bold text-gray-900 mt-8 mb-4">{line.slice(2)}</h1>;
        }
        if (line.startsWith('## ')) {
          return <h2 key={index} className="text-2xl font-semibold text-gray-900 mt-6 mb-3">{line.slice(3)}</h2>;
        }
        if (line.startsWith('### ')) {
          return <h3 key={index} className="text-xl font-semibold text-gray-900 mt-5 mb-2">{line.slice(4)}</h3>;
        }
        
        // Blockquotes
        if (line.startsWith('> ')) {
          return (
            <blockquote key={index} className="border-l-4 border-gray-300 pl-4 py-2 my-4 italic text-gray-700 bg-gray-50">
              {line.slice(2)}
            </blockquote>
          );
        }
        
        // Lists
        if (line.startsWith('- ') || line.startsWith('* ')) {
          return (
            <li key={index} className="ml-4 mb-1 text-gray-700">
              {line.slice(2)}
            </li>
          );
        }
        
        // Bold text sections (like **Key points:**)
        if (line.includes('**') && line.includes(':')) {
          const processed = line.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
          return (
            <p key={index} className="text-gray-700 mb-3 leading-relaxed" dangerouslySetInnerHTML={{ __html: processed }} />
          );
        }
        
        // Regular paragraphs
        if (line.length > 0 && !line.startsWith('**') && !line.startsWith('-') && !line.startsWith('*')) {
          // Process inline links [text](/url)
          const processedLine = line.replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2" class="text-gray-900 underline hover:text-gray-700 transition-colors">$1</a>');
          return (
            <p key={index} className="text-gray-700 mb-4 leading-relaxed" dangerouslySetInnerHTML={{ __html: processedLine }} />
          );
        }
        
        return null;
      })
      .filter(Boolean);
  };

  return (
    <div className="bg-white">
      <SEO 
        title={`${post.title} | Nettoyage Uno Blog`}
        description={post.excerpt}
        keywords={post.tags.join(', ')}
        canonical={`https://nettoyageuno.com/blog/${post.slug}`}
      />

      {/* Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify(structuredData)}
      </script>
      <script type="application/ld+json">
        {JSON.stringify(breadcrumbData)}
      </script>

      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Back to Blog */}
        <div className="mb-8">
          <Link
            to="/blog"
            className="inline-flex items-center text-gray-600 hover:text-gray-900 transition-colors focus:outline-none focus:ring-2 focus:ring-gray-900 focus:ring-offset-2 rounded"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Blog
          </Link>
        </div>

        {/* Article Header */}
        <header className="mb-8">
          <div className="mb-4">
            <Link
              to={`/blog/category/${slugify(post.category)}`}
              className="inline-block focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-300 rounded-full"
            >
              <CategoryPill
                label={post.category}
                icon={post.category?.toLowerCase() === 'sustainability' ? <Leaf className="w-4 h-4" /> : undefined}
                color={getCategoryColor(post.category)}
              />
            </Link>
          </div>
          
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 leading-tight mb-6">
            {post.title}
          </h1>
          
          <div className="flex flex-wrap items-center gap-6 text-gray-600 mb-6">
            <div className="flex items-center">
              <Calendar className="w-4 h-4 mr-2" />
              <time dateTime={post.date}>{formatDate(post.date)}</time>
            </div>
            <div className="flex items-center">
              <Clock className="w-4 h-4 mr-2" />
              {post.readMinutes} min read
            </div>
            <div className="flex items-center">
              <User className="w-4 h-4 mr-2" />
              {post.author.name}
            </div>
          </div>
        </header>

        {/* Feature Image Placeholder */}
        {/* Hero Image */}
        <div className="aspect-[16/9] bg-gray-100 rounded-lg mb-8 overflow-hidden">
          {post.heroSrc ? (
            <img
              src={post.heroSrc}
              alt={post.heroAlt}
              width={800}
              height={450}
              loading="lazy"
              className="w-full h-full object-cover"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-gray-100 to-gray-200">
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-3 bg-gray-300 rounded-lg flex items-center justify-center">
                  <svg className="w-8 h-8 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </div>
                <span className="text-gray-500 text-sm font-medium">{post.heroAlt}</span>
              </div>
            </div>
          )}
        </div>

        {/* Article Content */}
        <div className="prose prose-lg max-w-none">
          <div className="text-xl text-gray-600 mb-8 leading-relaxed font-medium">
            {post.excerpt}
          </div>
          
          {/* Add EcoTip for sustainability posts */}
          {post.category.toLowerCase() === 'sustainability' && (
            <EcoTip>
              <p>
                Sustainable cleaning practices not only protect the environment but also create healthier workspaces for your team. 
                Ask us about eco-certified products and green cleaning methods for your Montréal facility.
              </p>
            </EcoTip>
          )}
          
          {/* Add EcoTip for sustainability posts */}
          {post.category.toLowerCase() === 'sustainability' && (
            <EcoTip>
              <p>
                Sustainable cleaning practices not only protect the environment but also create healthier workspaces for your team. 
                Ask us about eco-certified products and green cleaning methods for your Montréal facility.
              </p>
            </EcoTip>
          )}
          
          <div className="space-y-4">
            {processContent(post.body)}
          </div>
        </div>

        {/* Tags */}
        <div className="mt-8 pt-8 border-t border-gray-200">
          <div className="flex flex-wrap items-center gap-2">
            <span className="text-sm font-medium text-gray-700">Tags:</span>
            {post.tags.map((tag) => (
              <Link
                key={tag}
                to={`/blog/tag/${slugify(tag)}`}
                className="inline-flex items-center px-2 py-1 bg-gray-50 text-gray-600 text-sm rounded hover:bg-gray-100 transition-colors focus:outline-none focus:ring-2 focus:ring-gray-900 focus:ring-offset-2"
              >
                <Tag className="w-3 h-3 mr-1" />
                {tag}
              </Link>
            ))}
          </div>
        </div>

        {/* Author Box */}
        <div className="mt-8 p-6 bg-gray-50 rounded-lg border border-gray-200">
          <div className="flex items-start space-x-4">
            <div className="w-16 h-16 bg-gray-200 rounded-full flex items-center justify-center">
              <User className="w-8 h-8 text-gray-400" />
            </div>
            <div className="flex-1">
              <h3 className="text-lg font-semibold text-gray-900">{post.author.name}</h3>
              <p className="text-gray-600 text-sm mb-2">{post.author.role}</p>
              {post.author.email && (
                <a
                  href={`mailto:${post.author.email}`}
                  className="inline-flex items-center text-gray-600 hover:text-gray-900 text-sm transition-colors focus:outline-none focus:ring-2 focus:ring-gray-900 focus:ring-offset-2 rounded"
                >
                  <Mail className="w-4 h-4 mr-1" />
                  Contact {post.author.name.split(' ')[0]}
                </a>
              )}
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-12 p-8 bg-gray-900 rounded-lg text-center">
          <h3 className="text-2xl font-bold text-white mb-4">Looking for a reliable cleaning partner in Montréal?</h3>
          <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
            Partner with Nettoyage Uno for professional commercial cleaning services tailored to your facility's needs.
          </p>
          <Link
            to="/get-quote"
            className="inline-flex items-center justify-center px-6 py-3 bg-white text-gray-900 font-medium rounded-md hover:bg-gray-100 transition-colors focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-900"
          >
            Get a Quote
            <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
        </div>

        {/* Navigation */}
        <nav className="mt-12 pt-8 border-t border-gray-200" aria-label="Article navigation">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {prevPost && (
              <Link
                to={`/blog/${prevPost.slug}`}
                className="group p-4 border border-gray-200 rounded-lg hover:border-gray-300 transition-colors focus:outline-none focus:ring-2 focus:ring-gray-900 focus:ring-offset-2"
              >
                <div className="flex items-center text-gray-600 text-sm mb-2">
                  <ArrowLeft className="w-4 h-4 mr-1" />
                  Previous Article
                </div>
                <h4 className="font-semibold text-gray-900 group-hover:text-gray-700 transition-colors">
                  {prevPost.title}
                </h4>
              </Link>
            )}
            
            {nextPost && (
              <Link
                to={`/blog/${nextPost.slug}`}
                className="group p-4 border border-gray-200 rounded-lg hover:border-gray-300 transition-colors focus:outline-none focus:ring-2 focus:ring-gray-900 focus:ring-offset-2 md:text-right"
              >
                <div className="flex items-center justify-end text-gray-600 text-sm mb-2">
                  Next Article
                  <ArrowRight className="w-4 h-4 ml-1" />
                </div>
                <h4 className="font-semibold text-gray-900 group-hover:text-gray-700 transition-colors">
                  {nextPost.title}
                </h4>
              </Link>
            )}
          </div>
        </nav>
      </article>
    </div>
  );
};

export default BlogPostPage;