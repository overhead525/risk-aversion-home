const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => (m && m.default) || m


exports.components = {
  "component---cache-dev-404-page-js": hot(preferDefault(require("/home/theelementace/risk-aversion-home/.cache/dev-404-page.js"))),
  "component---src-pages-404-tsx": hot(preferDefault(require("/home/theelementace/risk-aversion-home/src/pages/404.tsx"))),
  "component---src-pages-birds-eye-view-tsx": hot(preferDefault(require("/home/theelementace/risk-aversion-home/src/pages/birds-eye-view.tsx"))),
  "component---src-pages-index-tsx": hot(preferDefault(require("/home/theelementace/risk-aversion-home/src/pages/index.tsx"))),
  "component---src-pages-page-2-tsx": hot(preferDefault(require("/home/theelementace/risk-aversion-home/src/pages/page-2.tsx"))),
  "component---src-pages-simulation-core-tsx": hot(preferDefault(require("/home/theelementace/risk-aversion-home/src/pages/simulation-core.tsx"))),
  "component---src-pages-simulation-request-api-tsx": hot(preferDefault(require("/home/theelementace/risk-aversion-home/src/pages/simulation-request-api.tsx"))),
  "component---src-pages-user-interface-tsx": hot(preferDefault(require("/home/theelementace/risk-aversion-home/src/pages/user-interface.tsx"))),
  "component---src-pages-web-application-backend-tsx": hot(preferDefault(require("/home/theelementace/risk-aversion-home/src/pages/web-application-backend.tsx"))),
  "component---src-pages-who-uses-risk-aversion-tsx": hot(preferDefault(require("/home/theelementace/risk-aversion-home/src/pages/who-uses-risk-aversion.tsx"))),
  "component---src-pages-why-build-this-tsx": hot(preferDefault(require("/home/theelementace/risk-aversion-home/src/pages/why-build-this.tsx")))
}

