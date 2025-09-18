import * as fs from 'fs';
import * as path from 'path';
import { blogPosts } from '../src/data/posts';

const SITE_URL = 'https://nettoyageuno.com';
const SITE_TITLE = 'Nettoyage Uno Blog';
const SITE_DESCRIPTION = 'Expert insights on commercial cleaning, facility management, and industry trends for Montréal businesses.';

function generateRSSFeed(): void {
  // Sort posts by date (newest first)
  const sortedPosts = [...blogPosts].sort((a, b) => 
    new Date(b.date).getTime() - new Date(a.date).getTime()
  );

  // Generate RSS items
  const rssItems = sortedPosts.map(post => {
    const pubDate = new Date(post.date).toUTCString();
    const postUrl = `${SITE_URL}/blog/${post.slug}`;
    
    return `    <item>
      <title>${escapeXml(post.title)}</title>
      <link>${postUrl}</link>
      <guid>${postUrl}</guid>
      <pubDate>${pubDate}</pubDate>
      <description>${escapeXml(post.excerpt)}</description>
      <category>${escapeXml(post.category)}</category>
      <author>info@nettoyageuno.com (${escapeXml(post.author.name)})</author>
    </item>`;
  }).join('\n');

  // Generate complete RSS feed
  const rssContent = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>${escapeXml(SITE_TITLE)}</title>
    <link>${SITE_URL}/blog</link>
    <description>${escapeXml(SITE_DESCRIPTION)}</description>
    <language>en-ca</language>
    <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
    <atom:link href="${SITE_URL}/feed.xml" rel="self" type="application/rss+xml" />
    <managingEditor>info@nettoyageuno.com (Nettoyage Uno)</managingEditor>
    <webMaster>info@nettoyageuno.com (Nettoyage Uno)</webMaster>
    <copyright>Copyright ${new Date().getFullYear()} Nettoyage Uno. All rights reserved.</copyright>
    <category>Commercial Cleaning</category>
    <category>Facility Management</category>
    <category>Business Services</category>
    <ttl>1440</ttl>
${rssItems}
  </channel>
</rss>`;

  // Ensure public directory exists
  const publicDir = path.join(process.cwd(), 'public');
  if (!fs.existsSync(publicDir)) {
    fs.mkdirSync(publicDir, { recursive: true });
  }

  // Write RSS feed
  const feedPath = path.join(publicDir, 'feed.xml');
  fs.writeFileSync(feedPath, rssContent, 'utf8');
  
  console.log(`✅ RSS feed generated with ${sortedPosts.length} posts: ${feedPath}`);
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
    generateRSSFeed();
  } catch (error) {
    console.error('❌ Error generating RSS feed:', error);
    process.exit(1);
  }
}

export { generateRSSFeed };