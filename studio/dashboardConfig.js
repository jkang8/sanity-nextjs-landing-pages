export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5e7d9ecc938fb9e39f5bc65f',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-wmakxdnd',
                  apiId: '9e47b8f7-e29a-4990-bbe6-a65b1e910a9a'
                },
                {
                  buildHookId: '5e7d9eccaa6a0ceaed668de9',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-974fqpdn',
                  apiId: 'c13da162-9ffc-4e1e-a882-59f27c9a1d6a'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/jkang8/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-974fqpdn.netlify.com', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
