import { getAllPosts } from '@/lib/blog';

export function GET(
  _request: Request,
  { params }: { params: { locale: string } },
) {
  const { locale } = params;
  const posts = getAllPosts(locale);
  const siteUrl = 'https://lumenlingo.com';

  const items = posts
    .map(
      (post) => `
    <item>
      <title><![CDATA[${post.frontmatter.title}]]></title>
      <description><![CDATA[${post.frontmatter.description}]]></description>
      <link>${siteUrl}/${locale}/blog/${post.slug}</link>
      <guid isPermaLink="true">${siteUrl}/${locale}/blog/${post.slug}</guid>
      <pubDate>${new Date(post.frontmatter.publishedAt).toUTCString()}</pubDate>
      <author>${post.frontmatter.author}</author>
      <category>${post.frontmatter.category}</category>
    </item>`,
    )
    .join('');

  const feed = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>LumenLingo Blog</title>
    <description>Tips, guides, and insights for language learners from LumenLingo.</description>
    <link>${siteUrl}/blog</link>
    <atom:link href="${siteUrl}/${locale}/blog/feed.xml" rel="self" type="application/rss+xml"/>
    <language>${locale}</language>
    <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
    <managingEditor>support&#64;lumenlingo&#46;com (LumenShore Team)</managingEditor>
    <webMaster>support&#64;lumenlingo&#46;com (LumenShore Team)</webMaster>
    <image>
      <url>${siteUrl}/logo.png</url>
      <title>LumenLingo Blog</title>
      <link>${siteUrl}/blog</link>
    </image>${items}
  </channel>
</rss>`;

  return new Response(feed, {
    headers: {
      'Content-Type': 'application/rss+xml; charset=utf-8',
      'Cache-Control': 'public, max-age=3600, s-maxage=3600',
    },
  });
}
