const themeOptions = {
  siteName: 'Supported Databases',
  pageTitle: 'Supported Databases',
  menuTitle: 'SchemaHero',
  baseDir: 'databases',
  contentDir: 'source',
};

module.exports = {
  pathPrefix: '/databases',
  plugins: [
    {
      resolve: '../gatsby-theme-schemahero',
      options: {
        ...themeOptions,
        root: __dirname,
        subtitle: 'Supported Databases',
        description: 'Supported Databases',
        githubRepo: 'schemahero/schemahero-docs',
        sidebarCategories: {
          null: ['index'],
          Postgres: [
            'postgres/versions',
            'postgres/connecting',
            'postgres/column-types',
            'postgres/constraints',
          ],
          MySQL: [
            'mysql/versions',
            'mysql/connecting',
            'mysql/column-types',
            'mysql/constraints',
          ],
          CockroachDB: [
            'cockroachdb/versions',
            'cockroachdb/connecting',
          ]
        },
      },
    },
  ],
};
