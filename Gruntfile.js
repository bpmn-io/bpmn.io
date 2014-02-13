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
        dist: 'bower_components/jquery'
      }
    },

    watch: {
      assemble: {
        files: ['<%= config.src %>/{content,data,templates}/{,*/}*.{md,hbs,yml}'],
        tasks: ['assemble']
      },
      less: {
        files: ['<%= config.src %>/assets/less/*.less'],
        tasks: ['less:app']
      },
      copy: {
        files: [ '<%= config.src %>/assets/{fonts,img}/*' ],
        tasks: ['copy:app']
      },
      livereload: {
        options: {
          livereload: '<%= connect.options.livereload %>'
        },
        files: [
          '<%= config.dist %>/{,*/}*.html',
          '<%= config.dist %>/assets/{,*/}*.css',
          '<%= config.dist %>/assets/{,*/}*.js',
          '<%= config.dist %>/assets/{,*/}*.{png,jpg,jpeg,gif,webp,svg}'
        ]
      }
    },

    connect: {
      options: {
        port: 9000,
        livereload: 35729,
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
      pages: {
        options: {
          flatten: true,
          assets: '<%= config.dist %>/assets',
          layoutdir: '<%= config.src %>/templates/layouts',
          layout: 'default.hbs',
          data: '<%= config.src %>/data/*.{json,yml}',
          partials: '<%= config.src %>/templates/partials/*.hbs',
          plugins: [
            'assemble-contrib-anchors',
            'assemble-contrib-permalinks',
            'assemble-contrib-sitemap',
            'assemble-contrib-toc',
            'assemble-markdown-data',
            'assemble-related-pages'
          ],
          helpers: [
            '<%= config.src %>/helpers/*.js'
          ]
        },
        files: {
          '<%= config.dist %>/': ['<%= config.src %>/templates/pages/*.hbs'],
          '<%= config.dist %>/blog/': ['<%= config.src %>/templates/pages/blog/*.hbs'],
          '<%= config.dist %>/about/': ['<%= config.src %>/templates/pages/about/*.hbs'],
        }
      }
    },

    copy: {
      app: {
        files: [
          // include fonts + images
          {
            expand: true,
            cwd: '<%= config.src %>/assets',
            src: ['fonts/*', 'img/*'],
            dest: '<%= config.dist %>/assets'
          },
          // include favicon
          {
            expand: true,
            cwd: '<%= config.src %>',
            src: ['favicon.ico'],
            dest: '<%= config.dist %>'
          },
          // include jquery
          {
            expand: true,
            cwd: '<%= config.jquery.dist %>',
            src: ['jquery.js'],
            dest: '<%= config.dist %>/assets/js'
          },
          // include bootstrap js
          {
            expand: true,
            cwd: '<%= config.bootstrap.dist %>',
            src: ['js/bootstrap.js'],
            dest: '<%= config.dist %>/assets'
          }
        ]
      }
    },

    less: {
      app: {
        files: {
          "<%= config.dist %>/assets/css/app.css": "<%= config.src %>/assets/less/app.less"
        }
      },
      dist: {
        files: {
          "<%= config.dist %>/assets/css/app.css": "<%= config.src %>/assets/less/app.less"
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
    'copy:app',
    'assemble',
    'connect:livereload',
    'watch'
  ]);

  grunt.registerTask('build', [
    'clean',
    'less:dist',
    'copy:app',
    'assemble'
  ]);

  grunt.registerTask('default', [
    'build'
  ]);

};
