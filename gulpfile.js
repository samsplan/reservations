const gulp = require("gulp");
const ts = require("gulp-typescript");
const del = require('del');

const swagger = ['src/swagger/swagger.json'];

const tsProject = ts.createProject("tsconfig.json");

gulp.task('clean:dist', function () {
    return del([
        'dist/*'
    ]);
});

gulp.task('build:ts', function() {
    return tsProject.src()
        .pipe(tsProject())
        .js.pipe(gulp.dest("dist"));
});

gulp.task('copy:swagger', function() {
    return gulp.src(swagger)
    .pipe(gulp.dest('dist/swagger'));
  });

gulp.task("default", gulp.series('clean:dist', gulp.parallel('build:ts', 'copy:swagger')));
