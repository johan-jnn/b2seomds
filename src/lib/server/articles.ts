import path from 'node:path';
import { dev } from '$app/environment';

export interface ArticleProps {
  title: string;
  description: string;
  author: string;
  category: string;
  created: string;
  tags?: string[];
  layout?: string;
}

export interface Article {
  metadata: ArticleProps;
  url: string;
  id: string;
}

const cache = new Set<Article>();

export function list_articles(): Article[] {
  if (!dev && cache.size) return Array.from(cache);

  const files = import.meta.glob<{
    metadata: ArticleProps;
  }>('$routes/blog/*/+page.(svx|md)', {
    eager: true
  });

  const result = Object.entries(files).map(([file, data]) => {
    const {metadata} = data
    const pathInfo = path.parse(file);
    const article_id = pathInfo.dir.split('/').at(-1)!;
    
    return {
      id: article_id,
      url: `/blog/${article_id}`,
      metadata
    };
  });

  result.forEach((article) => cache.add(article));
  return result;
}
