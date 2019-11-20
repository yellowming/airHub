module.exports = {
  'publicPath': process.env.NODE_ENV === 'production' ? 'admin' : '',
  'outputDir': './admin',
  devServer: {
    proxy: 'http://airHub.test'
  },
  'transpileDependencies': [
    'vuetify'
  ]
}
