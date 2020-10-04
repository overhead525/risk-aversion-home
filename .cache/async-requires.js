// prefer default export if available
const preferDefault = m => m && m.default || m

exports.components = {
  "component---cache-dev-404-page-js": () => import("./dev-404-page.js" /* webpackChunkName: "component---cache-dev-404-page-js" */),
  "component---src-pages-404-tsx": () => import("./../src/pages/404.tsx" /* webpackChunkName: "component---src-pages-404-tsx" */),
  "component---src-pages-blog-posts-tsx": () => import("./../src/pages/blogPosts.tsx" /* webpackChunkName: "component---src-pages-blog-posts-tsx" */),
  "component---src-pages-index-tsx": () => import("./../src/pages/index.tsx" /* webpackChunkName: "component---src-pages-index-tsx" */),
  "component---src-pages-page-2-tsx": () => import("./../src/pages/page-2.tsx" /* webpackChunkName: "component---src-pages-page-2-tsx" */)
}
