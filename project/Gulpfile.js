var gulp = require("gulp");
connect = require("gulp-connect");
historyApiFallback = require("connect-history-api-fallback");

gulp.task('server', function(){
  connect.server({
    root: "/app",
    hostname: "0.0.0.0",
    port: "8086",
    livereloa: true,
    middleware: function(connect,opt){
      return [historyApiFallback];
    }
  });
});

var stylus = require("gulp-stylus");
nib =require("nib");
gulp.task('css',function(){
  gulp.src('/app/stlyesheets/main.styl')
  .pipe(stylus({use: nib()}))
  .pipe(gulp.dest('./app/stlyesheets'))
  .pipe(connect.reload());

});

gulp.task('html', function(){
  gulp.src('./app/**/*.html')
  .pipe(connect.reload());
})

gulp.task('watch', function(){
  gulp.watch(['/app/**/*.html'],['html']);
  gulp.watch(['/apps/stylesheets/**/*.styl'],['css'])
});

gulp.task('default',['server', 'watch']);
