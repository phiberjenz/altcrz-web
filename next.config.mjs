const nextConfig = {
  output: "export",
  // No trailing slashes: the pages are exported as /myweblog/privacy.html, which GitHub Pages
  // serves at /myweblog/privacy. (vinext's prerender 308-redirects nested routes when
  // trailingSlash is on.)
  trailingSlash: false,
};

export default nextConfig;
