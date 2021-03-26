// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
  siteName: 'Justin-blog-task',
  plugins: [
    {
      use: '@gridsome/source-strapi',
      options: {
        apiURL: process.env.GRIDSOME_API_URL,
        queryLimit: 1000, // Defaults to 100
        contentTypes: ['blog', 'project'],
        singleTypes: ['theme'],
        // Possibility to login with a Strapi user,
        // when content types are not publicly available (optional).
        // loginData: {
        //   identifier: '',
        //   password: ''
        // }
      }
    }
  ],
  templates: {
    StrapiProject: [
      {
        path: '/project/:id',
        component: './src/templates/ProjectPost.vue'
      }
    ],
    StrapiBlog: [
      {
        path: '/blog/:id',
        component: './src/templates/JournalPost.vue'
      }
    ]
  },
}
