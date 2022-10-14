/* eslint-disable import/no-extraneous-dependencies */
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});

module.exports = withBundleAnalyzer({
  i18n: {
    // The locales you want to support in your app
    locales: ["de", "en"],
    // The default locale you want to be used when visiting a non-locale prefixed path e.g. `/hello`
    defaultLocale: "en",
  },
  serverRuntimeConfig: {
    // Will only be available on the server side
    mySecret: process.env.FIRST_SECRET,
    secondSecret: process.env.SECOND_SECRET, // Pass through env variables
  },
  poweredByHeader: false,
  trailingSlash: true,
  basePath: '',
  // The starter code load resources from `public` folder with `router.basePath` in React components.
  // So, the source code is "basePath-ready".
  // You can remove `basePath` if you don't need it.
  reactStrictMode: true,
  locales: ['en-US', 'de', 'fr'],
  async redirects() {
    return [
      {
        source: '/Learning/Tracks/:tid',
        destination: '/Learning/Tracks/',
        permanent: false
      },
    ]
  },
});
