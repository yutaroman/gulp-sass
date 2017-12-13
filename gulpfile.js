'use strict';
/**
 * プラグイン
 */
var gulp = require('gulp');
var gulpLoadPlugins = require('gulp-load-plugins');
var $ = gulpLoadPlugins();
var runSequence = require('run-sequence');
var browserSync = require('browser-sync');

/**
 * 定数
 */
var PATH_DIST = 'dist';
var OPTION_SASS = {
  indentType: 'space',
  indentWidth: 2,
  outputStyle: 'expanded'
};
var OPTION_AUTOPREFIXER = {
  browsers: [
    'last 2 version',
    'Edge >= 13',
    'Explorer >= 11',
    'Safari >= 9',
    'Android >= 4.4',
    'iOS >= 8'
  ],
  cascade: false
};
var srcGlobs = {
  markup: [
    'src/**/*.html',
  ],
  style: [
    'src/**/*.{scss,css}',
  ],
  script: [
    'src/**/*.js',
  ],
  image: [
    'src/**/*.{png,jpg,gif,ico,svg}',
  ],
};
var plumberOptions = {
  errorHandler: function(error) {
    console.log(error.messageFormatted);
    this.emit('end');
  }
};

/**
 * 生成
 * $ build
 */
gulp.task('build:markup', function() {
  return gulp.src(srcGlobs.markup)
  .pipe($.plumber(plumberOptions))
  .pipe(gulp.dest(PATH_DIST));
});
gulp.task('build:style', function() {
  return gulp.src(srcGlobs.style)
  .pipe($.plumber(plumberOptions))
  .pipe($.sass(OPTION_SASS))
  .pipe($.autoprefixer(OPTION_AUTOPREFIXER))
  .pipe(gulp.dest(PATH_DIST));
});
gulp.task('build:script', function() {
  return gulp.src(srcGlobs.script)
  .pipe($.plumber(plumberOptions))
  .pipe(gulp.dest(PATH_DIST));
});
gulp.task('build:image', function() {
  return gulp.src(srcGlobs.image)
  .pipe($.plumber(plumberOptions))
  .pipe(gulp.dest(PATH_DIST));
});
gulp.task('build', [
  'build:markup',
  'build:style',
  'build:script',
  'build:image',
]);

/**
 * ローカルwebサーバーの起動
 * $ serve
 */
gulp.task('serve', function() {
  browserSync({
    host: 'localhost',
    port: 8000,
    server: {
      baseDir: PATH_DIST,
      directory: true
    }
  });
});

/**
 * ブラウザのオートリロード
 * $ reload
 */
gulp.task('reload', function() {
	return browserSync.reload();
});

/**
 * 変更ファイルの監視
 * $ watch
 */
gulp.task('watch', ['serve'], function() {
  gulp.watch(srcGlobs.markup, function() {
    runSequence('build:markup', 'reload');
  });
  gulp.watch(srcGlobs.style, function() {
    runSequence('build:style', 'reload');
  });
  gulp.watch(srcGlobs.script, function() {
    runSequence('build:script', 'reload');
  });
  gulp.watch(srcGlobs.image, function() {
    runSequence('build:image',  'reload');
  });
  gulp.watch(srcGlobs.other, function() {
    runSequence('build:other', 'reload');
  });
  gulp.watch(srcGlobs.vendor, function() {
    runSequence('build:vendor', 'reload');
  });
});

/**
 * デフォルト
 * $ gulp
 */
gulp.task('default', [
  'build', 'watch'
]);
