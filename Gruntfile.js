// # Globbing
// for performance reasons we're only matching one level down:
// '<%= config.src %>/pages/{,*/}*.hbs'
// use this if you want to match all subfolders:
// '<%= config.src %>/pages/**/*.hbs'

module.exports = function(grunt) {

  'use strict';

  require('load-grunt-tasks')(grunt);

  require('time-grunt')(grunt);

  // Project configuration.
  grunt.initConfig({

    config: {
      src: 'src',
      dist: 'dist',
      bootstrap: {
        dist: 'node_modules/bootstrap/dist'
      },
      jquery: {
        dist: 'node_modules/jquery/dist'
      },
      ga: process.env.GA_KEY || null
    },

    assemble: {
      options: {
        app: '<%= config %>',
        flatten: true,
        marked: {
          process: true,
          langPrefix: 'hljs language-',
          highlight: function(code, lang) {
            var hjs = require('highlight.js');

            var result;
            if (lang) {
              result = hjs.highlight(lang, code);
            } else {
              result = hjs.highlightAuto(code);
            }

            return result.value;
          }
        },
        assets: '<%= config.dist %>/assets',
        layoutdir: '<%= config.src %>/templates/layouts',
        layout: 'default.hbs',
        data: '<%= config.src %>/data/*.{json,yml}',
        partials: '<%= config.src %>/templates/partials/*.hbs',
        plugins: [
          'assemble-contrib-permalinks'
        ],
        helpers: [
          '<%= config.src %>/helpers/**/*.js'
        ]
      },
      main: {
        files: {
          '<%= config.dist %>/': ['<%= config.src %>/pages/*.hbs'],
          '<%= config.dist %>/l/': ['<%= config.src %>/links/*.html'],
          '<%= config.dist %>/about/': ['<%= config.src %>/pages/about/*.hbs'],
          '<%= config.dist %>/modeler/': ['<%= config.src %>/pages/modeler/*.hbs'],
          '<%= config.dist %>/license/': ['<%= config.src %>/pages/license/*.hbs'],
          '<%= config.dist %>/roadmap/': ['<%= config.src %>/pages/roadmap/*.hbs'],
          '<%= config.dist %>/status/': ['<%= config.src %>/pages/status/*.hbs'],
          '<%= config.dist %>/legal/': ['<%= config.src %>/pages/legal/*.hbs'],
          '<%= config.dist %>/toolkit/bpmn-js/': ['<%= config.src %>/pages/toolkit/bpmn-js/*.hbs'],
          '<%= config.dist %>/toolkit/bpmn-js/download/': ['<%= config.src %>/pages/toolkit/bpmn-js/download/*.hbs'],
          '<%= config.dist %>/toolkit/bpmn-js/examples/': ['<%= config.src %>/pages/toolkit/bpmn-js/examples/*.hbs'],
          '<%= config.dist %>/toolkit/bpmn-js/walkthrough/': ['<%= config.src %>/pages/toolkit/bpmn-js/walkthrough/*.hbs'],
          '<%= config.dist %>/toolkit/dmn-js/': ['<%= config.src %>/pages/toolkit/dmn-js/*.hbs'],
          '<%= config.dist %>/toolkit/dmn-js/download/': ['<%= config.src %>/pages/toolkit/dmn-js/download/*.hbs'],
          '<%= config.dist %>/toolkit/form-js/': ['<%= config.src %>/pages/toolkit/form-js/*.hbs'],
          '<%= config.dist %>/toolkit/form-js/download/': ['<%= config.src %>/pages/toolkit/form-js/download/*.hbs'],
          '<%= config.dist %>/toolkit/cmmn-js/': ['<%= config.src %>/pages/toolkit/cmmn-js/*.hbs'],
          '<%= config.dist %>/toolkit/cmmn-js/download/': ['<%= config.src %>/pages/toolkit/cmmn-js/download/*.hbs']
        }
      },
      blog: {
        options: {
          helpers: [
            'handlebars-helper-compose',
            'handlebars-helper-moment'
          ],
          permalinks: {
            structure: ':slug.html'
          }
        },
        files: {
          '<%= config.dist %>/blog/': [ '<%= config.src %>/pages/blog/*.hbs' ],
          '<%= config.dist %>/blog/posts/': [ '<%= config.src %>/blog/*/*.{md,hbs}' ]
        }
      }
    },

    copy: {
      attachments: {
        files: [ {
          expand: true,
          cwd: '<%= config.src %>/assets/attachments',
          src: [ '**/*' ],
          dest: '<%= config.dist %>/assets/attachments'
        }]
      },
      app: {
        files: [
          // include fonts + images + js
          {
            expand: true,
            cwd: '<%= config.src %>/assets',
            src: ['favicon.ico', 'fonts/*', 'img/**/*', 'js/**/*', 'bpmn/**/*'],
            dest: '<%= config.dist %>/assets'
          },
          // include jquery
          {
            expand: true,
            cwd: '<%= config.jquery.dist %>',
            src: ['jquery.min.js'],
            dest: '<%= config.dist %>/assets/js'
          },
          // include bootstrap js
          {
            expand: true,
            cwd: '<%= config.bootstrap.dist %>',
            src: ['js/bootstrap.min.js'],
            dest: '<%= config.dist %>/assets'
          }
        ]
      }
    },

    less: {
      options: {
        paths: [ 'node_modules' ]
      },
      app: {
        files: {
          '<%= config.dist %>/assets/css/app.css': '<%= config.src %>/assets/less/app.less'
        }
      },
      dist: {
        files: {
          '<%= config.dist %>/assets/css/app.css': '<%= config.src %>/assets/less/app.less'
        },
        options: {
          compress: true
        }
      }
    },

    // Before generating any new files,
    // remove any previously-created files.
    clean: ['<%= config.dist %>/**/*']

  });

  grunt.loadNpmTasks('assemble');

  grunt.registerTask('build', [
    'clean',
    'less:dist',
    'copy',
    'assemble'
  ]);

  grunt.registerTask('default', [
    'build'
  ]);

};
