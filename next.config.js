const withPlugins = require('next-compose-plugins');
const optimizedImages = require('next-optimized-images');

const nextConfiguration = {
  // webpack: (config, { isServer }) => {
  //   if (!isServer) {
  //     config.resolve.alias['react-dom'] = '@hot-loader/react-dom';
  //   }
  //   return config;
  // },
};

module.exports = withPlugins([optimizedImages], nextConfiguration);