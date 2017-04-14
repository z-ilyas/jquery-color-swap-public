// Karma configuration
// Generated on Tue Dec 13 2016 14:28:51 GMT-0600 (CST)

module.exports = function(config) {
  config.set({

    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: '',

    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: ['mocha', 'chai', 'sinon', 'fixture'],

    // list of files / patterns to load in the browser
    files: [
      'assignment/1_selectors/index.html',
      'assignment/1_selectors/styles.css',
      'assignment/1_selectors/vendors/jquery.min.js',
      'assignment/1_selectors/script.js',

      // 'assignment/2_burrito-cat/index.html',
      // 'assignment/2_burrito-cat/styles.css',
      // 'assignment/2_burrito-cat/vendors/jquery.min.js',
      // 'assignment/2_burrito-cat/script.js',
      //
      // 'assignment/3_memory-game/index.html',
      // 'assignment/3_memory-game/styles.css',
      // 'assignment/3_memory-game/vendors/jquery.min.js',
      // 'assignment/3_memory-game/script.js',

      'test/**.js'
      // // '5-2/src/imgs/*.png', // TODO image failing to load in PhantomJS
    ],

    // list of files to exclude
    exclude: [
    ],

    // preprocess matching files before serving them to the browser
    // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
    preprocessors: {
      'assignment/1_selectors/index.html': ['html2js'],
      'assignment/2_burrito-cat/index.html': ['html2js'],
      'assignment/3_memory-game/index.html': ['html2js']
    },

    // test results reporter to use
    // possible values: 'dots', 'progress'
    // available reporters: https://npmjs.org/browse/keyword/karma-reporter
    reporters: ['progress', 'junit'],

    junitReporter: {
      outputDir: "test-output",
      outputFile: "test-results.xml",
      useBrowserName: false
    },

    // web server port
    port: 9876,


    // enable / disable colors in the output (reporters and logs)
    colors: true,


    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,

    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: false,

    // start these browsers
    // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
    browsers: ['PhantomJS'],

    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: true,

    // Concurrency level
    // how many browser should be started simultaneous
    concurrency: Infinity
  });
};
