const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => m && m.default || m


exports.components = {
  "component---cache-dev-404-page-js": hot(preferDefault(require("/home/theelementace/risk-aversion-home/.cache/dev-404-page.js"))),
  "component---src-pages-404-tsx": hot(preferDefault(require("/home/theelementace/risk-aversion-home/src/pages/404.tsx"))),
  "component---src-pages-blog-posts-tsx": hot(preferDefault(require("/home/theelementace/risk-aversion-home/src/pages/blogPosts.tsx"))),
  "component---src-pages-index-tsx": hot(preferDefault(require("/home/theelementace/risk-aversion-home/src/pages/index.tsx"))),
  "component---src-pages-page-2-tsx": hot(preferDefault(require("/home/theelementace/risk-aversion-home/src/pages/page-2.tsx")))
}

