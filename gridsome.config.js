// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

const tailwind = require('tailwindcss')
const purgecss = require('@fullhuman/postcss-purgecss')

const postcssPlugins = [
  tailwind(),
]

if (process.env.NODE_ENV === 'production') postcssPlugins.push(purgecss(require('./purgecss.config.js')))

module.exports = {
  siteUrl: 'https://goodhands.github.io',
  siteName: 'Samuel Olaegbe | Software Developer',
  plugins: [
    {
      use: '@gridsome/plugin-sitemap'
    },
    {
      use: '@gridsome/plugin-google-analytics',
      options: {
        id: 'UA-85677153-3'
      }
    },
    {
      use: '@gridsome/source-filesystem',
      options: {
        typeName: 'Post',
        path: 'src/content/posts/*.md',
        refs:{
          author: {
            typeName: 'Author',
            create: true
          },
          category: {
            typeName: 'Category',
            create: true
          }
        }
      }
    },
    {
      use: '@gridsome/source-filesystem',
      options: {
        typeName: 'Projects',
        path: 'src/content/projects/*.yaml',
      }
    }
  ],
  templates:{
    Post: '/:title',
    Author: '/author/:title',
    Projects: '/project/:name',
    Category: '/category/:title',
  },
  transformers: {
    remark: {
      // global remark options
      autolinkHeadings: true,
      slug: true,
      externalLinksTarget: '_blank',
      externalLinksRel: ['nofollow', 'noopener', 'noreferrer'],
      anchorClassName: 'icon icon-link',
      plugins: [
        ['@gridsome/remark-prismjs', {showLineNumbers: true}],
        'remark-slug',
        'remark-highlight.js'
      ]
    }
  },
  siteUrl: 'https://goodhands.github.io/',
  css: {
    loaderOptions: {
        postcss: {
            plugins: postcssPlugins,
        },
    },
  },
}
