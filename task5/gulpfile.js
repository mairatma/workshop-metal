'use strict';

var metal = require('gulp-metal');

metal.registerTasks({
	bundleCssFileName: 'panel.css',
	bundleFileName: 'panel.js',
	mainBuildJsTasks: ['build:jquery'],
	moduleName: 'alloy-panel'
});
