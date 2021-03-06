var gulp = require('gulp');
var clean = require('gulp-clean');
var order = require('gulp-order');
var concat = require('gulp-concat');
var rename = require('gulp-rename');
// js
var ngAnnotate = require('gulp-ng-annotate');
var uglify = require('gulp-uglify');
// typescript
var ts = require('gulp-typescript');
var sourcemaps = require('gulp-sourcemaps');
// browserify
var browserify = require('browserify');
var source = require('vinyl-source-stream');
// css
var stylus = require('gulp-stylus');
var autoprefixer = require('gulp-autoprefixer');
// for custom server with livereload
// Chrome is required LiveReload extension
// in Safari it works all by itself(without extension)
var livereload = require('gulp-livereload');
var server = require('./server-core.js');
var config = {
  port: 8237,
  status: 'dev',
  liveReloadPort: 35729,
  siteDir: 'src',
  stylusPath: ['./src/css/*.styl', './src/features/**/*.styl'],
  cssDistPath: './dist/css/',
  jsPath: ['./src/*.js', './src/features/*/*.js', './src/features/agile-board/agile-board__task/*.js'],
  jsDistPath: './dist/js/'
};
var livereloadServer;

gulp.task('server', function () {
  livereloadServer = livereload();
  /*
   * to work without manually disable / enable the plugin in the browser after the page loads
   * need to run livereload server before running the server express
   * */
  livereload.listen(config.liveReloadPort);
  server.listen(config);
});

gulp.task('js-dev', function () {
  //gulp.src('collapseCheckbox.js')
  //  .pipe(gulp.dest('test/js/'));
  var tsProject = ts.createProject('tsconfig.json');
  return tsProject.src() // instead of gulp.src(...)
    .pipe(sourcemaps.init())
    .pipe(ts(tsProject))
    .js
    .pipe(sourcemaps.write('./')) // write external source map
    .pipe(gulp.dest(function(file) {
      return file.base;
  }));
});

gulp.task('browserify', ['js-dev'], function() {
  return browserify('./src/app.js')
  .bundle()
  .pipe(source(config.siteDir + '/bundle.js'))
  .pipe(gulp.dest(function(file) {
    return file.base;
  }));
});

gulp.task('css-dev', function () {
  return gulp.src(config.stylusPath, function (er, files) {
    // files is an array of filenames.
    // If the `nonull` option is set, and nothing
    // was found, then files is ["**/*.js"]
    // er is an error object or null.
    console.log(files);
  })
  //.pipe(concat('app.styl')) // first concat in one file that mixins to be globally visible
  .pipe(stylus())
  .pipe(rename(function (path) {
    //path.dirname += "/ciao";
    //path.basename += "-goodbye";
    path.extname = '.css';
  }))
  .pipe(autoprefixer())
  .pipe(gulp.dest(function(file) {
    return file.base;
  }));
});

gulp.task('js-prod', function () {
  return gulp.src(config.jsPath, function (er, files) {
    // files is an array of filenames.
    // If the `nonull` option is set, and nothing
    // was found, then files is ["**/*.js"]
    // er is an error object or null.
    console.log(files);
  })
    .pipe(order([
        'app.module.js',
        'app.config.js',
        'app.service.js',
        'app.controller.js',
        'app.filter.js',
        '**/agile-board.module.js',
        '**/agile-board.service.js',
        '**/agile-board.directive.js',
        '**/agile-board.controller.js',
        '**/agile-board__task.directive.js'
      ]))
    .pipe(concat('app.concat.js')) // first concat in one file that mixins to be globally visible
    //.pipe(ngAnnotate()) // pre-minify AngularJS apps, BUT DON'T USE IF YOU MANUAL USE $inject
    // generally it is always better to use the manual $inject
    .pipe(uglify())
    .pipe(rename('app.min.js'))
    .pipe(gulp.dest(config.jsDistPath));
});

gulp.task('css-prod', function () {
  return gulp.src(config.stylusPath, function (er, files) {
    // files is an array of filenames.
    // If the `nonull` option is set, and nothing
    // was found, then files is ["**/*.js"]
    // er is an error object or null.
    console.log(files);
  })
  .pipe(concat('app.styl')) // first concat in one file that mixins to be globally visible
  .pipe(stylus({compress: true}))
  .pipe(rename('app.min.css'))
  .pipe(autoprefixer())
  .pipe(gulp.dest(config.cssDistPath));
});

gulp.task('watch', ['server'], function () {
  gulp.watch(['src/**/*.ts'], ['browserify']);
  gulp.watch(config.stylusPath, ['css-dev']);

  gulp.watch(['src/*/**', 'src/*']).on('change', function (file) {
    // tell the browser that the file was updated
    livereloadServer.changed(file.path);
  });
});

gulp.task('build-dev', ['browserify', 'css-dev'], function () {
  // place code for your default task here
});

gulp.task('build', ['js-prod', 'css-prod'], function () {
  // place code for your default task here
});

gulp.task('default', ['watch'], function () {
  // place code for your default task here
});
