import { MDXRemote } from 'next-mdx-remote/rsc';
import remarkGfm from 'remark-gfm';
import rehypeSlug from 'rehype-slug';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import {
  Callout,
  FeatureHighlight,
  AppScreenshot,
  VideoEmbed,
  CodeBlock,
} from './mdx-components';
import { BlogNewsletterCTA } from '@/components/newsletter';

const components = {
  Callout,
  FeatureHighlight,
  AppScreenshot,
  VideoEmbed,
  CodeBlock,
  BlogNewsletterCTA,
};

interface MDXContentProps {
  source: string;
}

export function MDXContent({ source }: MDXContentProps) {
  return (
    <MDXRemote
      source={source}
      components={components}
      options={{
        mdxOptions: {
          remarkPlugins: [remarkGfm],
          rehypePlugins: [
            rehypeSlug,
            [
              rehypeAutolinkHeadings,
              {
                behavior: 'wrap',
                properties: {
                  className: ['heading-anchor'],
                },
              },
            ],
          ],
        },
      }}
    />
  );
}
