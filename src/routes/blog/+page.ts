import type { PageLoad } from './$types';

export const load: PageLoad = async ({ parent }) => {
  const { articles } = await parent();
  return {
    blog: {
      latest: articles.toSorted((a, b) => (a.metadata.created < b.metadata.created ? 1 : -1)),
      bestOf: articles.toSorted(() => Math.random() - 0.5).slice(0, 3),
      byTags: (...tags: string[]) =>
        articles.filter(({ metadata }) =>
          tags.find((tag) =>
            metadata.tags?.find((metatag) => metatag.toLowerCase() === tag.toLowerCase())
          )
        )
    }
  };
};
