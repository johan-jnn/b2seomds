import path from 'node:path';

interface ArticleProps {
  title: string;
  description: string;
  author: string;
  tags?: string[];
  layout?: string;
}

interface Article {
  metadata: ArticleProps;
  url: string;
  id: string;
}

export function list_articles(): Article[] {
  const files = import.meta.glob<{
    metadata: ArticleProps;
  }>('$routes/blog/*/+page.(svx|md)', {
    eager: true
  });

  return Object.entries(files).map(([file, { metadata }]) => {
    const pathInfo = path.parse(file);
    const article_id = pathInfo.dir.split('/').at(-1)!;
    return {
      id: article_id,
      url: `/blog/${article_id}`,
      metadata
    };
  });
}
