var gulp = require('gulp'),
	fileinclude = require('gulp-file-include');
 
gulp.task('konstrui', function(){
	gulp.src('fontkodo/cxefa.html')
		.pipe(fileinclude({
			prefix: '@@', basepath:'@file'
			}))
		.pipe(gulp.dest('rezulto'));
});
 
