import { defineConfigWithTheme } from 'vitepress'
import type { ThemeConfig } from 'vitepress-carbon'
import baseConfig from 'vitepress-carbon/config'

const ateneaSB =[
  //{ text: 'Markdown Examples', link: '/markdown-examples' },
  //{ text: 'Runtime API Examples', link: '/api-examples' }
];

// https://vitepress.dev/reference/site-config
export default defineConfigWithTheme<ThemeConfig>({
  extends: baseConfig,
  title: "The Black Square",
  description: "Desvelando los misterios detrás del desarrollo de software",
  srcDir: 'src',
  //base: '/vitepress-carbon-template/', if running on github-pages, set repository name here

  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    logo:'/img/Assets.xcassets/AppIcon.appiconset/40.png',
    nav: [
      { text: 'Inicio', link: '/' },
      { text: 'Atenea', link: '/atenea/' },
      { text: 'Hermes', link: '/hermes/' },
      { text: 'Hefesto', link: '/hefesto/' },
      { text: 'Recursos', link: '/recursos/' }
    ],

    search: {
      provider: 'local'
    },
    
    sidebar: 
      {
        '/': ateneaSB,
        '/atenea/': ateneaSB,
        '/hermes/': ateneaSB,
        '/efesto/': ateneaSB,
        '/recursos/': ateneaSB
      }
    ,

    socialLinks: [
      { icon: 'github', link: 'https://github.com/proteo5/' },
      { icon: 'twitter', link: 'https://twitter.com/proteo5' }
    ]
  }
})
