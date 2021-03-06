const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer')

module.exports = {
  plugins: [
    new BundleAnalyzerPlugin({
      analyzerMode: 'static',
      reportFilename: './report.html',
      defaultSizes: 'gzip',
      generateStatsFile: true,
    }),
  ],
}
