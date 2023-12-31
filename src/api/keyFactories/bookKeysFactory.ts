export const bookKeysFactory = {
  all: ["books"] as const,
  lists: () => [...bookKeysFactory.all, "list"] as const,
  filter: () => [...bookKeysFactory.lists(), "filter"] as const,
  list: (title: string, categories: number[], authors: number[]) => [
    ...bookKeysFactory.lists(),
    title,
    categories,
    authors,
  ],
};
