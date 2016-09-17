var gulp = require("gulp"),
    watch = require("gulp-watch"),
    ts = require("gulp-typescript");

var paths = {
    scripts: ['./ts/**/*.ts'],
    release: './release/scripts',
    pages: './*.html'
};

// Create typescript project
var tsProject = ts.createProject('tsconfig.json');

gulp.task('scripts', function() {
   var tsResult = tsProject.src(paths.scripts)
        .pipe(ts(tsProject));
        return tsResult.js.pipe(gulp.dest(paths.release));
});
gulp.task('copy-html', function() {
    return gulp.src(paths.pages)
        .pipe(gulp.dest("release"));
});

gulp.task('default', ['copy-html', 'scripts']);