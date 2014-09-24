/*global module, require*/
(function setUp(module, require) {
  'use strict';

  var banner = ['/*!',
      ' * Angular Socialshare v<%= pkg.version %>',
      ' *',
      ' * Released by 720kb.net under the MIT license',
      ' * www.opensource.org/licenses/MIT',
      ' *',
      ' * <%= grunt.template.today("yyyy-mm-dd") %>',
      ' * source link: //github.com/720kb/angular-socialshare',
      ' */\n\n'].join('\n')
    , modRewrite = require('connect-modrewrite');

  module.exports = function doGrunt(grunt) {

    grunt.initConfig({
      'pkg': grunt.file.readJSON('package.json'),
      'confs': {
        'dist': 'dist',
        'config': 'config',
        'js': 'src/js',
        'serverPort': 8000
      },
      'eslint': {
        'options': {
          'config': '<%= confs.config %>/eslint.json'
        },
        'target': [
          'Gruntfile.js',
          '<%= confs.js %>/**/*.js'
        ]
      },
      'uglify': {
        'options': {
          'sourceMap': true,
          'sourceMapName': '<%= confs.dist %>/angular-socialshare.sourcemap.map',
          'preserveComments': false,
          'report': 'gzip',
          'banner': banner
        },
        'minifyTarget': {
          'files': {
            '<%= confs.dist %>/angular-socialshare.min.js': [
              '<%= confs.js %>/angular-socialshare.js'
            ]
          }
        }
      },
      'connect': {
        'server': {
          'options': {
            'port': '<%= confs.serverPort %>',
            'base': '.',
            'keepalive': true,
            'middleware': function manageMiddlewares(connect, options) {
              var middlewares = []
                , directory = options.directory || options.base[options.base.length - 1];

              // enable Angular's HTML5 mode
              middlewares.push(modRewrite(['!\\.html|\\.js|\\.svg|\\.css|\\.png|\\.gif$ /index.html [L]']));

              if (!Array.isArray(options.base)) {
                options.base = [options.base];
              }
              options.base.forEach(function forEachOption(base) {
                // Serve static files.
                middlewares.push(connect.static(base));
              });

              // Make directory browse-able.
              middlewares.push(connect.directory(directory));

              return middlewares;
            }
          }
        }
      },
      'watch': {
        'dev': {
          'files': [
            'Gruntfile.js',
            '<%= confs.js %>/**/*.js'
          ],
          'tasks': [
            'eslint'
          ],
          'options': {
            'spawn': false
          }
        }
      },
      'concurrent': {
        'dev': {
          'tasks': [
            'connect:server',
            'watch:dev'
          ],
          'options': {
            'limit': '<%= concurrent.dev.tasks.length %>',
            'logConcurrentOutput': true
          }
        }
      }
    });

    grunt.loadNpmTasks('grunt-eslint');
    grunt.loadNpmTasks('grunt-contrib-uglify');

    grunt.loadNpmTasks('grunt-concurrent');
    grunt.loadNpmTasks('grunt-contrib-connect');
    grunt.loadNpmTasks('grunt-contrib-watch');

    grunt.registerTask('default', [
      'eslint',
      'concurrent:dev'
    ]);

    grunt.registerTask('prod', [
      'eslint',
      'uglify'
    ]);
  };
}(module, require));
