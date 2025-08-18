export default {
  webpack: {
    configure: (webpackConfig) => {
      webpackConfig.resolve.extensions = ['.js', '.jsx', '.ts', '.tsx', '.json'];
      return webpackConfig;
    },
  },
};