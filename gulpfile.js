var gulp = require('gulp'),
  sass = require('gulp-sass'),
  browserify = require('browserify'),
  babelify = require('babelify'),
  uglify = require('gulp-uglify'),
  postcss = require('gulp-postcss'),
  autoprefixer = require('autoprefixer'),
  source = require('vinyl-source-stream'),
  buffer = require('vinyl-buffer'),
  rename = require('gulp-rename'),
  sourcemaps = require('gulp-sourcemaps');

var config = {
  outputDir: './dist/',
  mapDir: './maps/',
  js: {
    src: './src/js/index.js',
    outputFile: 'lightbox.min.js'
  },
  sass: {
    path: './src/scss/**/*.scss'
  }
};

// default task (called when run `gulp` from cli)
gulp.task('default', ['browserify', 'sass', 'html']);

// build minified js
gulp.task('browserify', function () {
  var bundler = browserify(config.js.src)
    .transform(babelify);

  bundle(bundler);
});

// build minified sass
gulp.task('sass', function () {
  return gulp.src(config.sass.path)
    .pipe(sourcemaps.init())
    .pipe(sass({outputStyle: 'compressed'})
      .on('error', sass.logError)
    )
    .pipe(rename({suffix: '.min'}))
    .pipe(postcss([ autoprefixer({ browsers: ['last 3 versions'] }) ]))
    .pipe(sourcemaps.write(config.mapDir))
    .pipe(gulp.dest(config.outputDir))
});

// html template
gulp.task('html', function () {
  gulp.src(['./src/index.html'])
    .pipe(gulp.dest(config.outputDir));
});

// bundle js
function bundle (bundler) {
  bundler
    .bundle()
    .pipe(source(config.js.src))
    .pipe(buffer())
    .pipe(sourcemaps.init())
    .pipe(uglify())
    .pipe(rename(config.js.outputFile))
    .pipe(sourcemaps.write(config.mapDir))
    .pipe(gulp.dest(config.outputDir));
}