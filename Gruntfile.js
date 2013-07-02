module.exports = function(grunt) {

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

  // LESS CSS//
    less: {
      css: {
        src: 'source/css/main.less',
        dest: 'css/main.css'
      }
    },
    // MINIFICANDO CSS //
    cssmin: {
      dist: {
          src: ['css/main.css'],
          dest: 'css/main.min.css'
      }
    },
    // CONCATENA E MINIFICANDO JS //
    uglify: {
      options: {
        banner: '/*! <%= pkg.name %> - v<%= pkg.version %> - ' +
          '<%= grunt.template.today("yyyy-mm-dd") %> */'
      },
      main: {
        files: {
           'js/main.min.js': ['source/js/main.js']
          }
      },
      desktop: {
        files: {
          'js/desktop.min.js': [ 'source/js/vendor/jquery.min.js',
                                 'source/js/vendor/html5shiv.js',
                                 'source/js/vendor/jquery.expScrollParallax.js',
                                 'source/js/devices/desktop.js',
                                 'source/js/devices/analytics.js']
        }
      },
      mobile: {
        files: {
          'js/mobile.min.js': [ 'source/js/vendor/zepto.min.js',
                                 'source/js/devices/mobile.js',
                                 'source/js/devices/analytics.js']
        }
      }
    },
    htmlmin: {
    dist: {
      options: {
        removeComments: true,
        collapseWhitespace: true
      },
      files: {
        'index.html': 'source/html/index.html'
      }
    }
  }

  });

  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-htmlmin');

  // Default task(s).
  grunt.registerTask('default', ['less','cssmin','uglify','htmlmin']);

};