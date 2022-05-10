module.exports = {
  theme:"antdocs",
  title: "IconLoader.js",
  description: "一款优雅的图标交互js库",
  base: "/",
  head: [
    ["link",{ rel: "icon",href: "/assets/logo.png" }]
  ],
  markdown: {
    lineNumbers: false,
  },
  themeConfig: {
    smoothScroll: true,
    nav: require("./config/nav"),
    sidebar: require("./config/sidebar"),
    lastUpdated: "Last Updated",
    repo: "https://github.com/liming-xxw/iconloader.js",
    editLinks: false,
  },
};