module.exports = {
  publicPath: '/',
  outputDir: 'xbblog-mobile',
  css: {
    loaderOptions: {
      stylus: {
        'resolve url': true,
        'import': [
          './src/theme'
        ]
      }
    }
  },
  pluginOptions: {
    'cube-ui': {
      postCompile: true,
      theme: true
    }
  },
  devServer: {
    proxy: {
      "/api": {
        // target: "http://127.0.0.1:4000/",
        target: "https://support.sweetsmartstrongshen.cc/",
        ws: false,
        changOrigin: true
      }
    }
  }
}
