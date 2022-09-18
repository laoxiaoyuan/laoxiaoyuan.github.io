
const nav = require("./configs/nav");  // 引入nav,后缀名xx.js可以省略
const sidebar = require("./configs/sidebar");  // 引入sidebar,后缀名xx.js可以省略

module.exports = {
  title: 'lxyCoder网站', // 博客标题
  description: 'lxyCoder的网站,专注前端技术栈分享', // 博客描述,利于SEO
  keywords: "lxyCoder的技术博客,lxyCoder", // 关键字
  head: [   // 注入到当前页面的 HTML <head> 中的标签  与PWA插件有关
    ["link", { rel: "icon", href: "./public/images/itclancoder.jpeg" }], // 增加一个自定义的 favicon(网页标签的图标)
    ["meta", { rel: "keywords", content: "lxyCoder的技术博客,lxy" }],
    ["meta", { name: "Author", content: "知晓随笔" }],
    ["link", { rel: "manifest", href: "./public/js/manifest.json" }],
    ["meta", { name: "theme-color", content: "#3eaf7c" }],
    ["meta", { name: "apple-mobile-web-app-capable", content: "yes" }],
    [
      "meta",
      { name: "apple-mobile-web-app-status-bar-style", content: "black" }
    ],
    ["link", { rel: "stylesheet", href: "./public/css/style.css" }], // 这种方式也可以覆盖默认样式
    ["meta", { name: "msapplication-TileColor", content: "#000000" }]
  ],

  themeConfig: {
    // nav: [  //导航栏. 
    //   { text: '首页', link: '/' },
    //   { text: '前端', link: '/fontend/' },
    //   { text: '小程序', link: '/wechat/' },
    //   { text: '面试', link: '/interview/' },
    //   { text: '关于', link: '/about/' },
    // ]
    nav: nav, // 也可以直接就写sidebar,Es6中的简写,当键与键值同名时,可以直接写一个
    sidebar: 'auto',
    sidebar: sidebar,
  },

  plugins:require("./configs/plugin") // 外部插件配置,config.js里面写得太长了,阅读,修改起来,不好,有必要考虑拆分出去的


  }
