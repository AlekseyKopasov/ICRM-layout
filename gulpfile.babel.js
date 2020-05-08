import gulp from 'gulp';
import svgstore from 'gulp-svgstore';
import rename from 'gulp-rename';

// SVG-sprite
gulp.task('sprite', () => gulp.src('src/assets/img/sprite/*.svg')
.pipe(svgstore({
	inlineSvg: true,
}))
.pipe(rename('sprite.svg'))
.pipe(gulp.dest('src/assets/img')));