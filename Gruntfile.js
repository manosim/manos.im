module.exports = function (grunt) {

  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.initConfig({

    less: {
      options: {
        cleancss: true
      },
      main: {
        files: {
          'static/css/base.css': '_less/_base.less',
        }
      }
    },

    watch: {
      files: ['_less/*.less'],
      tasks: ['less'],
      options: {
        livereload: 35729,
      }
    },

    clean: {
      build: {
        src: ["_site/*"]
      }
    }

  });

  grunt.registerTask('build', ['less']);
  grunt.registerTask('default', ['build', 'watch']);

};
