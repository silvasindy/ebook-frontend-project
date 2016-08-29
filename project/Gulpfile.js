console.log("entrooooooooo");
var gulp = require("gulp");
connect = require("gulp-connect");
historyApiFallback = require("connect-history-api-fallback");

gulp.task('server', function() {
    console.log("server ");
  connect.server({
    root: './app',
    hostname: '0.0.0.0',
    port: 8087,
    livereload: true,
    middleware: function(connect, opt) {
      return [ historyApiFallback ];
    }
  });
});
var stylus = require('gulp-stylus'),
    nib    = require('nib');
gulp.task('css', function() {
  gulp.src('./app/stylesheets/main.styl')
    .pipe(stylus({ use: nib() }))
    .pipe(gulp.dest('./app/stylesheets'))
    .pipe(connect.reload());
});


gulp.task('html', function(){
  console.log("html ");
  gulp.src('./app/**/*.html')
  .pipe(connect.reload());
})

gulp.task('watch', function(){
console.log("watch ");
  gulp.watch(['./app/**/*.html'],['html']);
  gulp.watch(['./app/stylesheets/**/*.styl'],['css'])
});

gulp.task('default',['server', 'watch']);
