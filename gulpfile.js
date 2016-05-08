var gulp = require("gulp");
var imagemin = require("gulp-imagemin"); //压缩图片
gulp.task("images", function() {
  return gulp.src("data/**/*.png")
    .pipe(imagemin({
      optimizationLevel: 1, //类型：Number  默认：3  取值范围：0-7（优化等级）
      // progressive: true, //类型：Boolean 默认：false 无损压缩jpg图片
      // interlaced: true, //类型：Boolean 默认：false 隔行扫描gif进行渲染
      // multipass: true //类型：Boolean 默认：false 多次优化svg直到完全优化
    }))
})

gulp.task("default", ["images"], function() {
  console.log('图片压缩成功');
});
