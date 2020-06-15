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
                  buildHookId: '5ee7605f4eb657c1c9caf39e',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-3-studio-ug7hyzye',
                  apiId: '0d0f1072-f3b7-435f-b35d-5f1bc1a0066d'
                },
                {
                  buildHookId: '5ee7605fae374b696bfbd755',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-3-web-9txoqwkb',
                  apiId: '17ee230b-1eb2-4178-97f5-14bfe446ef50'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/iamturns/sanity-nextjs-landing-pages-3',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-3-web-9txoqwkb.netlify.app', category: 'apps'}
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
