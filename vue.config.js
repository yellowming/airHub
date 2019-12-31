module.exports = {
  publicPath: process.env.NODE_ENV === 'production' ? 'admin' : '',
  outputDir: './admin',
  pages: {
    index: {
      entry: 'src/main.js',
      template: 'src/assets/index.html',
    }
  },
  devServer: {
    proxy: 'http://airHub.test'
  },
  'transpileDependencies': [
    'vuetify'
  ]
}
