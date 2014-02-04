'use strict';

module.exports = function(grunt) {

  grunt.loadNpmTasks('grunt-jasmine-node-coverage');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-watch');

  // Project configuration.
  grunt.initConfig({
    jasmine_node: {
      coverage: {
        excludes: []
      },
      options: {
        forceExit: true,
        match: '.',
        specFolders: ['specs'],
        extensions: 'js',
        specNameMatcher: 'spec',
        isVerbose: false,
        //junitreport: {
          //report: true,
          //savePath : './junit_reports/',
          //useDotNotation: true,
          //consolidate: true
        //}
      }
    },
    watch: {
      scripts: {
        files: ['**/**.js', '!coverage/lcov-report/prettify.js', 'node_modules/**'],
        tasks: ['default'],
        options: {
          spawn: true,
        },
      },
    },
    jshint: {
      files: ['GruntFile.js', 'specs/**.js', 'src/**.js'],
      options: {
        jshintrc: '.jshintrc',
      }
    }
  });

  // Default task.
  grunt.registerTask('default', ['jshint', 'test']);
  grunt.registerTask('test', 'jasmine_node');


  grunt.registerTask('timestamp', function() {
    grunt.log.subhead(Date());
  });

};
