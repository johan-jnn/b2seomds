import type { Article } from '$lib/server/articles';
import type { PageLoad } from '../$types';
export const prerender = false;

const minArticles = 5;
export const load: PageLoad = async ({ url: { searchParams }, parent }) => {
  const { articles } = await parent();
  const q = searchParams.get('q')?.toLowerCase();
  const found: Article[] = [];

  if (q) {
    found.push(
      ...articles.filter(
        ({ metadata }) =>
          metadata.title.toLowerCase().includes(q) ||
          metadata.tags?.find((tag) => tag.toLowerCase().includes(q)) ||
          metadata.category.toLowerCase().includes(q) ||
          metadata.author.toLowerCase().includes(q)
      )
    );
  }

  found.push(
    ...articles
      .toSorted(() => Math.random() - 0.5)
      .slice(0, Math.max(0, minArticles - found.length))
  );
  return { found };
};
