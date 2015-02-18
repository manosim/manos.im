module.exports = function (grunt) {

  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-shell');

  grunt.initConfig({

    shell: {
      generate: {
        command: 'env/bin/pelican content -s pelicanconf.py'
      },
      deploy: {
        command: 'pelican content -s publishconf.py'
      }
    },

    less: {
      options: {
        cleancss: true
      },
      main: {
        files: {
          'output/static/css/style.css': 'theme/static/less/style.less'
        }
      }
    },

    watch: {
      files: ['content/**/*.md','theme/**/*.*'],
      tasks: ['clean', 'less:main', 'shell:generate', 'copy:main'],
      options: {
        livereload: 35729,
      }
    },

    copy: {
      main: {
        expand: true,
        cwd: 'theme/static/',
        src: ['**', '!less/**'],
        dest: 'output/static/',
      },
    },

    connect: {
      server: {
        options: {
          port: 9000,
          livereload: 35729,
          base: 'output',
          open: true,
          debug: false
        }
      }
    },

    clean: {
      build: {
        src: ["output/*"]
      }
    }

  });

  grunt.registerTask('build', ['clean', 'less:main', 'shell:generate', 'copy:main']);
  grunt.registerTask('serve', ['clean', 'less:main', 'shell:generate', 'copy:main', 'connect:server', 'watch']);
  grunt.registerTask('deploy', ['clean', 'less:main', 'shell:deploy', 'copy:main']);

};