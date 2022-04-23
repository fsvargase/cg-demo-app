const withPlugins = require('next-compose-plugins');
const optimizedImages = require('next-optimized-images');
const withPWA = require('next-pwa')
const nextConfiguration = {
  target: 'serverless', //will output independent pages that don't require a monolithic server. It's only compatible with next start or Serverless deployment platforms (like ZEIT Now) — you cannot use the custom server API.
};

module.exports = withPlugins([
  [withPWA, {
    pwa: {
      disable: process.env.NODE_ENV === 'development',
      //dest: 'public',
      register: true,
      sw: '/sw.js'
    }}],
    [optimizedImages], nextConfiguration
]);
