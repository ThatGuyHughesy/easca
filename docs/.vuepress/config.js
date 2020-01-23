module.exports = {
  base: "/easca/",
  locales: {
    "/": {
      lang: "en-US",
      title: "Easca",
      description: "A simple Vue theme and component library built on Bootstrap"
    }
  },
  themeConfig: {
    repoLabel: "Contribute!",
    repo: "https://github.com/ThatGuyHughesy/easca",
    docsDir: "docs",
    editLinks: true,
    docsBranch: "dev",
    editLinkText: "Help us improve this page!",
    search: false,
    locales: {
      "/": {
        label: "English",
        selectText: "Languages",
        lastUpdated: "Last Updated",
        serviceWorker: {
          updatePopup: {
            message: "New content is available.",
            buttonText: "Refresh"
          }
        },
        nav: [
          { text: "Getting Started", link: "/guide" },
          { text: "Components", link: "/components/" },
          {
            text: "GitHub",
            link: "https://github.com/ThatGuyHughesy/easca"
          }
        ],
        sidebar: {
          "/components/": [
            {
              title: "Components",
              collapsable: false,
              children: ["Bootstrap", "Sidebar"]
            }
          ]
        }
      }
    }
  }
};
