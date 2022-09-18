//有些插件自带，有些插件要手动安装配置, npmjs.com网页可查插件

const plugins = [
    "@vuepress/back-to-top", // 返回到到顶部插件  如何判断生效？
    '@vuepress/nprogress', //进度条插件

    [
    '@vuepress/active-header-links', //页面滚动时自动激活侧边栏链接的插件
     {
        sidebarLinkSelector: '.sidebar-link',
        headerAnchorSelector: '.header-anchor'
      }
    ],

    [
      '@vuepress/pwa',  //PWA 插件
      {
        serviceWorker: true,// 如果设置为 true，VuePress 将自动生成并注册一个 Service Worker，用于缓存页面的内容以供离线使用（仅会在生产环境中启用）
        // updatePopup: true
        updatePopup: {
            // 只有在你能够使用 SSL 部署您的站点时才能启用此功能，因为 service worker 只能在 HTTPs 的 URL 下注册
            "/zh/": {
              message: "发现新内容可用",
              buttonText: "刷新"
            }
          }
      }
    ],

    [
        "@vuepress/medium-zoom",  //?? 点击图片放大
        {
          selector: "img.custom"
          // options: {
          //   margin: 16
          // }
        }
      ],

      [
        "vuepress-plugin-comment", // valine留言插件
        {
          choosen: "valine",
          // options选项中的所有参数，会传给Valine的配置
          options: {
            el: "#valine-vuepress-comment",
            appId: "3axoX94n1eMN7gUkrwfPoQ7d-gzGzoHsz",
            appKey: "cbOrdXJgNJfgthfKqFSNaP1N"
          }
        }
      ]  

];

module.exports = plugins //导出

