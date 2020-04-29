import webpack from 'webpack-stream';
import gulp from 'gulp';

import pug from 'gulp-pug';

import sass from 'gulp-sass';
import postcss from 'gulp-postcss';
import csso from 'gulp-csso';
import autoprefixer from 'autoprefixer';
import smoothscroll from 'postcss-smoothscroll-anchor-polyfill';
import normalize from 'node-normalize-scss';
import sourcemaps from 'gulp-sourcemaps';

import del from 'del';
import rename from 'gulp-rename';

import imagemin from 'gulp-imagemin';
import imageminPngquant from 'imagemin-pngquant';
import svgstore from 'gulp-svgstore';
import webp from 'gulp-webp';

import plumber from 'gulp-plumber';
import browserSync from 'browser-sync';
import webpackConfig from './webpack.config';

const server = browserSync.create();

gulp.task('pug', () => gulp.src('source/pug/pages/*.pug')
  .pipe(plumber())
  .pipe(pug({
    pretty: true,
  }))
  .pipe(gulp.dest('build')));

gulp.task('css', () => gulp.src('source/sass/style.scss')
  .pipe(plumber())
  .pipe(sourcemaps.init())
  .pipe(sass({
    includePaths: normalize.includePaths,
  }))
  .pipe(postcss([
    autoprefixer(),
    smoothscroll(),
  ]))
  .pipe(csso())
  .pipe(sourcemaps.write(''))
  .pipe(gulp.dest('build/css'))
  .pipe(server.stream()));

gulp.task('clean', () => del('build'));

gulp.task('copy', () => gulp.src([
  'source/fonts/**/*.{woff,woff2}',
  'source/img/**/*',
  'source/video/**/*',
  'source/json/**/*',
  '!source/img/sprite/*',
  '!source/img/sprite',
  'source/favicon.ico'
], {
  base: 'source',
})
  .pipe(gulp.dest('build')));

gulp.task('sprite', () => gulp.src('source/img/sprite/*.svg')
  .pipe(svgstore({
    inlineSvg: true,
  }))
  .pipe(rename('sprite.svg'))
  .pipe(gulp.dest('build/img')));

gulp.task('js', () => gulp.src('source/js/index.js')
  .pipe(webpack(webpackConfig))
  .pipe(gulp.dest('build/js')));

gulp.task('server', () => {
  server.init({
    server: 'build/',
    notify: false,
    open: true,
    cors: true,
    ui: false,
  });

  gulp.watch('source/sass/**/*.{scss,sass}', gulp.series('css', 'refresh'));
  gulp.watch('source/**/*.pug', gulp.series('pug', 'refresh'));
  gulp.watch('source/img/**/*', gulp.series('copy', 'sprite', 'pug', 'refresh'));
  gulp.watch('source/js/**/*', gulp.series('js', 'refresh'));
});

gulp.task('refresh', (done) => {
  server.reload();
  done();
});

// Таски для отпимизации изображений
gulp.task('images', () => gulp.src('build/img/**/*.{png,jpg,svg,webp}')
  .pipe(imagemin([
    imageminPngquant({quality: [0.6, 0.8]}),
    imagemin.jpegtran({progressive: true}),
    imagemin.svgo({
      plugins: [
        {removeViewBox: false},
      ],
    }),
  ]))
  .pipe(gulp.dest('build/img')));

gulp.task('svg', () => gulp.src('source/img/sprite/*.svg')
  .pipe(imagemin([
    imagemin.svgo({
      plugins: [
        {removeViewBox: false},
      ],
    }),
  ]))
  .pipe(gulp.dest('source/img/sprite')));

// Конвертация изображений в формат .webp
gulp.task('webp', () => gulp.src('build/img/**/*.{png,jpg}')
  .pipe(webp({quality: 90}))
  .pipe(gulp.dest('build/img')));

gulp.task('build', gulp.series(
    'clean',
    gulp.parallel(
        'copy',
        'css',
    ),
    gulp.parallel(
        'sprite',
        'images',
        'webp',
    ),
    gulp.parallel(
        'js',
        'pug',
    ),
));

gulp.task('start', gulp.series(
    'clean',
    gulp.parallel(
        'copy',
        'css',
    ),
    gulp.parallel(
        'sprite',
        'images',
        'webp',
    ),
    gulp.parallel(
        'pug',
        'js',
    ),
    'server',
));
