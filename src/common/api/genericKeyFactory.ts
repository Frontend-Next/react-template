export const genericKeyFactory = (domain: string) => ({
  base: { domain } as const,
  list: () => ({ ...genericKeyFactory(domain).base, type: "list" }) as const,
  element: () =>
    ({ ...genericKeyFactory(domain).base, type: "element" }) as const,
});
