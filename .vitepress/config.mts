import { defineConfigWithTheme } from 'vitepress'
import type { ThemeConfig } from 'vitepress-carbon'
import baseConfig from 'vitepress-carbon/config'


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
      // This sidebar gets displayed when a user
      // is on `guide` directory.
      '/atenea/': [
        {
          text: 'Atenea',
          items: [
            { text: 'Inicio', link: '/atenea/' }
          ]
        }
      ],
      '/hermes/': [
        {
          text: 'Hermes',
          items: [
            { text: 'Inicio', link: '/hermes/' },
            { text: 'Introducción', link: '/hermes/intro' }
           
          ]
        }
      ],
      '/hefesto/': [
        {
          text: 'Hefesto',
          items: [
            { text: 'Inicio', link: '/hefesto/' }
          ]
        }
      ],
    }
  }
})
