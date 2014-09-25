// # Globbing
// for performance reasons we're only matching one level down:
// '<%= config.src %>/templates/pages/{,*/}*.hbs'
// use this if you want to match all subfolders:
// '<%= config.src %>/templates/pages/**/*.hbs'

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
        dist: 'bower_components/bootstrap/dist'
      },
      jquery: {
        dist: 'bower_components/jquery/dist'
      },
      uservoice: process.env.USER_VOICE_KEY || null,
      ga: process.env.GA_KEY || null,
      newsletter: process.env.NEWSLETTER_SUBSCRIBE_ENDPOINT || null
    },

    watch: {
      assemble: {
        files: ['<%= config.src %>/{content,data,templates}/{,*/,*/*/}*.{md,hbs,yml}'],
        tasks: ['assemble']
      },
      less: {
        files: ['<%= config.src %>/assets/less/*.less'],
        tasks: ['less:app']
      },
      copy: {
        files: [ '<%= config.src %>/assets/{fonts,img,bpmn}/*' ],
        tasks: ['copy:app']
      },
      copy_attachments: {
        files: [ '<%= config.src %>/assets/attachments/**/*' ],
        tasks: [ 'copy:attachments' ]
      },
      livereload: {
        options: {
          livereload: '<%= connect.options.livereload %>'
        },
        files: [
          '<%= config.dist %>/{,*/}*.html',
          '<%= config.dist %>/assets/{,*/}*.css',
          '<%= config.dist %>/assets/{,*/}*.js',
          '<%= config.dist %>/assets/**/*.{png,jpg,jpeg,gif,webp,svg}'
        ]
      }
    },

    connect: {
      options: {
        port: 9012,
        livereload: 19013,
        // change this to '0.0.0.0' to access the server from outside
        hostname: 'localhost'
      },
      livereload: {
        options: {
          open: true,
          base: [
            '<%= config.dist %>'
          ]
        }
      }
    },

    assemble: {
      options: {
        app: '<%= config %>',
        flatten: true,
        marked: {
          process: true
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
          '<%= config.dist %>/': ['<%= config.src %>/templates/pages/*.hbs'],
          '<%= config.dist %>/about/': ['<%= config.src %>/templates/pages/about/*.hbs'],
          '<%= config.dist %>/license/': ['<%= config.src %>/templates/pages/license/*.hbs'],
          '<%= config.dist %>/roadmap/': ['<%= config.src %>/templates/pages/roadmap/*.hbs'],
          '<%= config.dist %>/getting-started/': ['<%= config.src %>/templates/pages/getting-started/*.hbs'],
          '<%= config.dist %>/legal/': ['<%= config.src %>/templates/pages/legal/*.hbs']
        }
      },
      blog: {
        options: {
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
          helpers: [
            'handlebars-helper-compose',
            'handlebars-helper-moment'
          ],
          permalinks: {
            structure: ':slug.html'
          }
        },
        files: {
          '<%= config.dist %>/blog/': [ '<%= config.src %>/templates/pages/blog/*.hbs' ],
          '<%= config.dist %>/blog/posts/': [ '<%= config.src %>/content/blog/*/*.{md,hbs}' ]
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

  grunt.registerTask('serve', [
    'clean',
    'less:app',
    'copy',
    'assemble',
    'connect:livereload',
    'watch'
  ]);

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
