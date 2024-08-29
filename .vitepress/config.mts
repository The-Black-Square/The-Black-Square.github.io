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
      { text: 'General', link: '/general/' },
      { text: 'Introducción', link: '/intro/' },
      { text: 'Recursos', link: '/recursos/' }
    ],

    search: {
      provider: 'local'
    },
    footer: {
      message: '<p style="display:flex" xmlns:cc="http://creativecommons.org/ns#" xmlns:dct="http://purl.org/dc/terms/">The Black Square by Alfredo Pinto Molina is licensed under:<a href="https://creativecommons.org/licenses/by-nc-sa/4.0/?ref=chooser-v1" target="_blank" rel="license noopener noreferrer" style="display:flex;">Creative Commons Attribution-NonCommercial-ShareAlike 4.0 International<img style="height:22px!important;margin-left:3px;vertical-align:text-bottom;" src="https://mirrors.creativecommons.org/presskit/icons/cc.svg?ref=chooser-v1" alt=""><img style="height:22px!important;margin-left:3px;vertical-align:text-bottom;" src="https://mirrors.creativecommons.org/presskit/icons/by.svg?ref=chooser-v1" alt=""><img style="height:22px!important;margin-left:3px;vertical-align:text-bottom;" src="https://mirrors.creativecommons.org/presskit/icons/nc.svg?ref=chooser-v1" alt=""><img style="height:22px!important;margin-left:3px;vertical-align:text-bottom;" src="https://mirrors.creativecommons.org/presskit/icons/sa.svg?ref=chooser-v1" alt=""></a></p>',
      copyright: '<span style="display:flex">Copyright © 2024 Alfredo Pinto Molina</span>'
    },
    sidebar: 
    {
      // This sidebar gets displayed when a user
      // is on `guide` directory.
      '/general/': [
        {
          text: 'General',
          items: [
            { text: 'Inicio', link: '/general/' },
            { text: 'Steve Jobs y la Caligrafía', link: '/general/0001' },
            { text: 'La comunicación (En progreso)', link: '/general/0002' },
            { text: 'El caso Wernher von Braun y Thomas Kelly', link: '/general/0003' }
          ]
        }
      ],
      '/intro/': [
        {
          text: 'Introducción',
          items: [
            { text: 'Inicio', link: '/intro/' },
          
           
          ]
        }
      ],
      '/recursos/': [
        {
          text: 'Recursos',
          items: [
            { text: 'Inicio', link: '/recursos/' }
          ]
        }
      ],
    }
  }
})
