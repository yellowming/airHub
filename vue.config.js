module.exports = {
  'publicPath': process.env.NODE_ENV === 'production' ? 'admin' : '',
  'outputDir': 'public/admin',
  'pages': {
    'index': {
      'entry': 'src/main.js',
      'template': 'src/index.html',
      'filename': 'index.html',
      'title': 'Index Page',
      'chunks': [
        'chunk-vendors',
        'chunk-common',
        'index'
      ]
    }
  },
  devServer: {
    proxy: 'http://airHub.test'
  },
  'transpileDependencies': [
    'vuetify'
  ]
}
