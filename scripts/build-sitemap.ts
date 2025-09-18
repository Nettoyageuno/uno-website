import * as fs from 'fs';
import * as path from 'path';
import { blogPosts, getAllCategories, getAllTags, slugify } from '../src/data/posts';

interface SitemapUrl {
  loc: string;
  lastmod: string;
  changefreq: 'always' | 'hourly' | 'daily' | 'weekly' | 'monthly' | 'yearly' | 'never';
  priority: string;
}

const BASE_URL = 'https://nettoyageuno.com';

function generateSitemap(): void {
  const urls: SitemapUrl[] = [];
  const currentDate = new Date().toISOString().split('T')[0]; // YYYY-MM-DD format

  // Static routes with priorities and change frequencies
  const staticRoutes = [
    { path: '/', priority: '1.0', changefreq: 'weekly' as const },
    { path: '/services', priority: '0.9', changefreq: 'monthly' as const },
    { path: '/services/office-cleaning', priority: '0.8', changefreq: 'monthly' as const },
    { path: '/services/building-cleaning', priority: '0.8', changefreq: 'monthly' as const },
    { path: '/services/warehouse-cleaning', priority: '0.8', changefreq: 'monthly' as const },
    { path: '/services/post-construction', priority: '0.8', changefreq: 'monthly' as const },
    { path: '/services/specialized-add-ons', priority: '0.8', changefreq: 'monthly' as const },
    { path: '/services/duct-ventilation-cleaning', priority: '0.8', changefreq: 'monthly' as const },
    { path: '/industries', priority: '0.7', changefreq: 'monthly' as const },
    { path: '/why-partner', priority: '0.7', changefreq: 'monthly' as const },
    { path: '/about', priority: '0.6', changefreq: 'monthly' as const },
    { path: '/contact', priority: '0.9', changefreq: 'monthly' as const },
    { path: '/get-quote', priority: '0.9', changefreq: 'monthly' as const },
    { path: '/blog', priority: '0.8', changefreq: 'weekly' as const },
  ];

  // Add static routes
  staticRoutes.forEach(route => {
    urls.push({
      loc: `${BASE_URL}${route.path}`,
      lastmod: currentDate,
      changefreq: route.changefreq,
      priority: route.priority
    });
  });

  // Add blog post routes
  blogPosts.forEach(post => {
    urls.push({
      loc: `${BASE_URL}/blog/${post.slug}`,
      lastmod: post.date,
      changefreq: 'monthly',
      priority: '0.6'
    });
  });

  // Add blog category routes
  const categories = getAllCategories();
  categories.forEach(category => {
    urls.push({
      loc: `${BASE_URL}/blog/category/${slugify(category)}`,
      lastmod: currentDate,
      changefreq: 'weekly',
      priority: '0.5'
    });
  });

  // Add blog tag routes
  const tags = getAllTags();
  tags.forEach(tag => {
    urls.push({
      loc: `${BASE_URL}/blog/tag/${slugify(tag)}`,
      lastmod: currentDate,
      changefreq: 'weekly',
      priority: '0.4'
    });
  });

  // Generate XML
  const xmlContent = generateXML(urls);
  
  // Ensure public directory exists
  const publicDir = path.join(process.cwd(), 'public');
  if (!fs.existsSync(publicDir)) {
    fs.mkdirSync(publicDir, { recursive: true });
  }

  // Write sitemap.xml
  const sitemapPath = path.join(publicDir, 'sitemap.xml');
  fs.writeFileSync(sitemapPath, xmlContent, 'utf8');
  
  console.log(`✅ Sitemap generated with ${urls.length} URLs: ${sitemapPath}`);
}

function generateXML(urls: SitemapUrl[]): string {
  const urlElements = urls.map(url => `  <url>
    <loc>${escapeXml(url.loc)}</loc>
    <lastmod>${url.lastmod}</lastmod>
    <changefreq>${url.changefreq}</changefreq>
    <priority>${url.priority}</priority>
  </url>`).join('\n');

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urlElements}
</urlset>`;
}

function escapeXml(unsafe: string): string {
  return unsafe.replace(/[<>&'"]/g, (c) => {
    switch (c) {
      case '<': return '&lt;';
      case '>': return '&gt;';
      case '&': return '&amp;';
      case '\'': return '&apos;';
      case '"': return '&quot;';
      default: return c;
    }
  });
}

// Run the script
if (require.main === module) {
  try {
    generateSitemap();
  } catch (error) {
    console.error('❌ Error generating sitemap:', error);
    process.exit(1);
  }
}

export { generateSitemap };