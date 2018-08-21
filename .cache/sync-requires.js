// prefer default export if available
const preferDefault = m => m && m.default || m


exports.layouts = {
  "layout---index": preferDefault(require("/Users/moro/develop/moai-folio/.cache/layouts/index.js"))
}

exports.components = {
  "component---cache-dev-404-page-js": preferDefault(require("/Users/moro/develop/moai-folio/.cache/dev-404-page.js")),
  "component---src-pages-404-js": preferDefault(require("/Users/moro/develop/moai-folio/src/pages/404.js")),
  "component---src-pages-about-js": preferDefault(require("/Users/moro/develop/moai-folio/src/pages/about.js")),
  "component---src-pages-contact-js": preferDefault(require("/Users/moro/develop/moai-folio/src/pages/contact.js")),
  "component---src-pages-index-js": preferDefault(require("/Users/moro/develop/moai-folio/src/pages/index.js")),
  "component---src-pages-page-2-js": preferDefault(require("/Users/moro/develop/moai-folio/src/pages/page-2.js")),
  "component---src-pages-works-js": preferDefault(require("/Users/moro/develop/moai-folio/src/pages/works.js"))
}

exports.json = {
  "layout-index.json": require("/Users/moro/develop/moai-folio/.cache/json/layout-index.json"),
  "dev-404-page.json": require("/Users/moro/develop/moai-folio/.cache/json/dev-404-page.json"),
  "404.json": require("/Users/moro/develop/moai-folio/.cache/json/404.json"),
  "about.json": require("/Users/moro/develop/moai-folio/.cache/json/about.json"),
  "contact.json": require("/Users/moro/develop/moai-folio/.cache/json/contact.json"),
  "index.json": require("/Users/moro/develop/moai-folio/.cache/json/index.json"),
  "page-2.json": require("/Users/moro/develop/moai-folio/.cache/json/page-2.json"),
  "works.json": require("/Users/moro/develop/moai-folio/.cache/json/works.json"),
  "404-html.json": require("/Users/moro/develop/moai-folio/.cache/json/404-html.json")
}