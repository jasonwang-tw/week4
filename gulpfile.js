const gulp = require('gulp');
const pug = require('gulp-pug'); // 載入 gulp-pug 套件

gulp.task('pug', () => {
  return gulp
    .src('views/*.pug') // Pug 主檔案路徑
    .pipe(pug()) // 使用 gulp-pug 進行編譯
    .pipe(gulp.dest('public/')); // 編譯完成輸出路徑
});