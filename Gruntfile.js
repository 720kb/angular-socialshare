/*global module*/
(function setUp(module) {
  'use strict';

  module.exports = function doGrunt(grunt) {

    grunt.initConfig({
      'pkg': grunt.file.readJSON('package.json'),
      'confs': {
        'config': 'config',
        'js': 'assets/js',
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
      'connect': {
        'server': {
          'options': {
            'port': '<%= confs.serverPort %>',
            'base': '.',
            'keepalive': true
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

    grunt.loadNpmTasks('grunt-concurrent');
    grunt.loadNpmTasks('grunt-contrib-connect');
    grunt.loadNpmTasks('grunt-contrib-watch');

    grunt.registerTask('default', [
      'eslint',
      'concurrent:dev'
    ]);
  };
}(module));
