module.exports = {
  "publicPath": "admin",
  "outputDir": "html/admin",
  "pages": {
    "index": {
      "entry": "src/main.js",
      "template": "src/index.html",
      "filename": "index.html",
      "title": "Index Page",
      "chunks": [
        "chunk-vendors",
        "chunk-common",
        "index"
      ]
    }
  },
  "transpileDependencies": [
    "vuetify"
  ]
}