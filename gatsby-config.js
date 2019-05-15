module.exports = {
  siteMetadata: {
    title: 'Skillshape',
    description: 'Skillshape Landing',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sass',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'bg',
        path: `${__dirname}/src/images/bg`,
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'features',
        path: `${__dirname}/src/images/features`,
        ignore: `${__dirname}/src/images/bg`,
      },
    },
    {
      resolve: 'gatsby-plugin-react-svg',
      options: {
        rule: {
          include: /icons/,
        },
      },
    },
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    'gatsby-plugin-eslint',
    // {
    //   resolve: 'gatsby-plugin-manifest',
    //   options: {
    //     name: 'gatsby-starter-default',
    //     short_name: 'starter',
    //     start_url: '/',
    //     background_color: '#663399',
    //     theme_color: '#663399',
    //     display: 'minimal-ui',
    //     icon: 'src/images/gatsby-icon.png'
    //   },
    // },
  ],
};
