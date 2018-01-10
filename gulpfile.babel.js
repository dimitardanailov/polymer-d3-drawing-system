import gulp from 'gulp';

// The tasks don't have any dependencies anymore
gulp.task('styles', () => {});
gulp.task('scripts', () => {});

gulp.task('clean', function() {});

// Per default, start scripts and styles
gulp.task('default', gulp.series('clean', gulp.parallel('scripts', 'styles')));

