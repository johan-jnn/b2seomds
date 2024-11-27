import type { PageLoad } from './$types';

export const load: PageLoad = async ({ parent }) => {
  const { articles } = await parent();
  return {
    latestArticle: articles.toSorted((a, b) =>
      a.metadata.created < b.metadata.created ? 1 : -1
    )[0]
  };
};
