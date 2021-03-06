var build = 'dist/';
module.exports = {
  src: 'src',
  dist: build,
  settings: {
    //outputStyle: 'compressed',
    //sourceMap: true,
    outFile: build + 'chayns.css',
    sourceComments: false,
    errLogToConsole: true,
    imagePath: 'images' // Used by the image-url helper
  },
  server: {
    server: {
      baseDir: './'
    },
    logPrefix: 'chayns'
  }
};
