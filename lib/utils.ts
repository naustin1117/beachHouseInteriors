// Helper to get the correct asset path for GitHub Pages
export function getAssetPath(path: string): string {
  const isGitHubPages = process.env.NEXT_PUBLIC_GITHUB_PAGES === "true";
  const basePath = isGitHubPages ? "/beachHouseInteriors" : "";

  // If path already starts with basePath, return as is
  if (path.startsWith(basePath)) {
    return path;
  }

  // Otherwise prepend basePath
  return `${basePath}${path}`;
}
