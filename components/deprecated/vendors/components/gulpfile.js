var gulp = require('gulp');
var browserify = require('browserify');
var reactify = require('reactify');
var gutil = require('gulp-util');
var gulpif = require('gulp-if');
var sourceMap = require('vinyl-source-stream');
var streamify = require('gulp-streamify');
var uglify = require('gulp-uglify');
var notify = require('gulp-notify');
var watchify = require('watchify');
var rename = require('gulp-rename');

var dependencies = [
  'react',
  'classnames',
  'dropzone',
  'eonasdan-bootstrap-datetimepicker',
  'jquery',
  'moment',
  'numeral',
  'react-bootstrap',
  'react-router',
  'select2',
  'underscore'
];
var files = [
  "./examples/demo.js"
];

var createBundle = function (options) {

  var bundler = browserify({
    entries: options.input,
    debug: true,
    transform: [[reactify, {"harmony": true}]],
    cachePackage: {},
    fullPaths: false
  });

  (global.isWatching ? dependencies : []).forEach(function(dep) {
    bundler.external(dep);
  });

  var rebundle = function() {
    var startTime = (new Date()).getTime();
    var fileName = options.input.substr(options.input.lastIndexOf('/') + 1);
    bundler.bundle()
      .on('error', function() { console.log(arguments); })
      .pipe(sourceMap(fileName))
      .pipe(gulp.dest(global.dest))
      .pipe(streamify(uglify()))
      .pipe(rename({extname: '.min.js'}))
      .pipe(gulp.dest(global.dest))
      .on('end', function() {
        time = ((new Date()).getTime() - startTime) / 1000;
        var date = new Date();
        console.log(fileName + ' 已打包完成！用时 ' + time + '秒,'+'完成时间'+date.getHours()+':'+date.getMinutes()+':'+date.getSeconds());
      });
  };

  if (global.isWatching) {
    bundler = watchify(bundler);
    bundler.on('update', rebundle);
  }

  rebundle();

};

var createBundles = function(bundles) {
  bundles.forEach(function (bundle) {
    createBundle({
      input: bundle
    });
  });
};

var bundleVendors = function() {
  var vendorsBundler = browserify({
    debug: false,
    require: dependencies,
    transform: [[reactify, { global: true }]]
  });

  var start = new Date();
  vendorsBundler.bundle()
    .on('error', gutil.log)
    .pipe(sourceMap('vendors.js'))
    .pipe(gulpif(!global.isWatching, streamify(uglify())))
    .pipe(gulp.dest(global.dest))
    .pipe(notify(function() {
      console.log('vendors.js 已打包完成！用时 ' + ((Date.now() - start) / 1000) + '秒');
    }));
};

gulp.task('browserify', function() {
  createBundles(files);
  bundleVendors();
});

gulp.task('setWatch', function() {
  global.isWatching = true;
  global.dest = './dist/';
});

gulp.task('watch', ['setWatch', 'browserify']);
gulp.task('default', ['watch']);
