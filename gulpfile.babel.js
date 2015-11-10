
'use strict';

var gulp  = require('gulp'),
    babel = require('gulp-babel'),
    del   = require('del'),
    fs    = require('fs');



gulp.task('clean', function(cb) {
  return del('./lib', cb);
});



gulp.task('make-directories', ['clean'], function() {

  try {
    fs.mkdirSync('./lib');
  } catch(e) {
    if (e.code !== 'EEXIST') {
      console.log('caught ' + JSON.stringify(e) + ' while making dirs');
    }
  }

  // yes, this is supposed to not return anything

});



gulp.task('babel', ['make-directories'], function() {

  return gulp.src('./src/timeranges.js')
    .pipe(babel({"presets": ["es2015"]}))
    .pipe(gulp.dest('./lib'));

});



gulp.task('default', ['babel'], function() {});
