'use strict';

module.exports = function(grunt) {

  require('time-grunt')(grunt);
  require('load-grunt-tasks')(grunt);
  require('google-closure-compiler').grunt(grunt);
  grunt.loadNpmTasks('grunt-autoprefixer');

  grunt.initConfig({
    'closure-compiler': {
      dev: {
        options: {
          'js': [
            'src/**/*.js',
            'node_modules/google-closure-library/**.js',
            '!src/js/libs/**/*.js',
            '!src/js/google-closure-library-externs/**/*.js'
          ],
          'entry_point': 'goog:kstatic.init',
          'js_output_file': 'dest/script.min.js',
          'compilation_level': 'SIMPLE', // SIMPLE, ADVANCED, WHITESPACE_ONLY
          'dependency_mode': 'STRICT',
          'language_in': 'ECMASCRIPT5_STRICT',
          'externs': [
          ]
        }
      }
    },

    copy: {
      markupFiles: {
        expand: true,
        flatten: true,
        src: ['src/**/*.html', 'src/**/*.php'],
        dest: 'dest/'
      },
      tsFiles: {
        expand: true,
        cwd: 'src/ts/',
        src: '**/*',
        dest: 'dest/ts'
      },
      imgFiles: {
        expand: true,
        cwd: 'src/img/',
        src: '**/*',
        dest: 'dest/img'
      },
      webfonts: {
        expand: true,
        cwd: 'src/css/',
        src: 'webfonts/*',
        dest: 'dest/'
      }
    },

    php: {
      dist: {
        options: {
          hostname: '127.0.0.1',
          port: 8888,
          base: './dest/',
          keepalive: true,
          open: false
        }
      }
    },

    concat: {
      options: {
      },
      less: {
        src: ['src/**/*.less', 'src/**/*.css'],
        dest: 'dest/screen.less'
      },
    },
    less: {
      options: {
        paths: ['less'],
        compress: true,
        strictMath: true,
        strictUnits: true
      },
      dev: {
        src: ['dest/screen.less'],
        dest: 'dest/screen.min.css'
      }
    },
    autoprefixer:{
      dist:{
        files:{
          'dest/screen.min.css': 'dest/screen.min.css'
        }
      },
      options: {
        browsers: [
          'last 2 versions',
          'ie 8',
          'ie 9'
          ]
      }
    },
    pixrem: {
      options: {
        rootvalue: '85%',
        replace: true
      },
      dist: {
        src: 'dest/screen.min.css',
        dest: 'dest/screen-IE.min.css'
      }
    },

    uglify: {
      options: {
        mangle: true
      },
      dev: {
        src: [
          'node_modules/hammerjs/hammer.min.js',
          'src/js/libs/**/*.js',
          'dest/script.min.js'],
        dest: 'dest/script.min.js'
      }
    },

    jshint: {
      all: ['Gruntfile.js', 'src/**/*.js', '!src/js/libs/**/*.js', '!src/js/google-closure-library-externs/**/*.js'],
      options: {
        jshintrc: true
      }
    },

    jscs: {
      src: ['Gruntfile.js', 'src/**/*.js', '!src/js/libs/**/*.js'],
      options: {
        config: '.jscsrc'
      }
    },

    'ftp_push': {
      options: {
        host: 'home18762614.1and1-data.host',
        username: 'u6864484',
        password: 'ho4you',
        dest: '/kadiade2016/typo3conf/ext/ktempl/',
        port: 21,
        incrementalUpdates: false
      },
      markupFiles: {
        files: [
          {
            expand: true,
            cwd: 'dest/',
            src: ['**/*.html', '**/*.php']
          }
        ]
      },
      scriptFiles: {
        files: [
          {
            expand: true,
            cwd: 'dest/',
            src: '**/*.js'
          }
        ]
      },
      cssFiles: {
        files: [
          {
            expand: true,
            cwd: 'dest/',
            src: '**/*.css'
          }
        ]
      },
      tsFiles: {
        files: [
          {
            expand: true,
            cwd: 'dest/',
            src: '**/*.ts'
          }
        ]
      },
      miscFiles: {
        files: [
          {
            expand: true,
            cwd: 'dest/',
            src: ['**', '!*', '!**/*.ts']
          }
        ]
      }
    },
    focus: {
      watch: {
        include: ['statics', 'scripts', 'styles', 'ts']
      },
      watchAndPush: {
        include: ['staticsAndPush', 'scriptsAndPush', 'stylesAndPush', 'tsAndPush']
      }
    },

    watch: {
      options: {
        spawn: false,
        livereload: true
      },
      statics: {
        files: ['./src/**/*.html', './src/**/*.php'],
        tasks: ['copy'],
        options: {
          livereload: 35729
        }
      },
      scripts: {
        files: ['./src/**/*.js'],
        tasks: ['scripts'],
        options: {
          livereload: 35730
        }
      },
      styles: {
        files: ['./src/**/*.less'],
        tasks: ['concat', 'less', 'autoprefixer', 'ie8'],
        options: {
          livereload: 35731
        }
      },
      ts: {
        files: ['./src/**/*.ts'],
        tasks: ['copy'],
        options: {
          livereload: 35732
        }
      },

      staticsAndPush: {
        files: ['./src/**/*.html', './src/**/*.php'],
        tasks: ['copy', 'ftp_push:markupFiles'],
        options: {
          livereload: 35726
        }
      },
      scriptsAndPush: {
        files: ['./src/**/*.js'],
        tasks: ['scripts', 'ftp_push:scriptFiles'],
        options: {
          livereload: 35727
        }
      },
      stylesAndPush: {
        files: ['./src/**/*.less'],
        tasks: ['concat', 'less', 'autoprefixer', 'ie8', 'ftp_push:cssFiles'],
        options: {
          livereload: 35728
        }
      },
      tsAndPush: {
        files: ['./src/**/*.ts'],
        tasks: ['copy', 'ftp_push:tsFiles'],
        options: {
          livereload: 35729
        }
      }
    },

    clean: ['./dest/**']
  });

  grunt.registerTask('ie8', ['pixrem']);
  grunt.registerTask('scripts', ['jshint', 'jscs', 'closure-compiler', 'uglify']);
  grunt.registerTask('push', ['ftp_push']);
  grunt.registerTask('default', ['run', 'focus:watch']);

  // most wanted task runner
  // as well as: grunt watchLocal | watchAndPush
  grunt.registerTask('watchLocal', ['focus:watch']);
  grunt.registerTask('watchAndPush', ['focus:watchAndPush']);
  grunt.registerTask('run', ['clean', 'scripts', 'concat', 'less', 'ie8', 'autoprefixer', 'copy']);
};
