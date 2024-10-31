import { list_articles } from '$lib/server/articles';

// export const prerender = true;

export const load = async () => {
  const articles = list_articles();

  return { articles };
};
