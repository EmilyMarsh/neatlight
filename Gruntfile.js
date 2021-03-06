
/* vim: set expandtab tabstop=2 shiftwidth=2 softtabstop=2 cc=80: */

/**
 * @package     omeka
 * @subpackage  neatline-NeatLight
 * @copyright   2012 Rector and Board of Visitors, University of Virginia
 * @license     http://www.apache.org/licenses/LICENSE-2.0.html
 */

module.exports = function(grunt) {

  require('load-grunt-tasks')(grunt);

  grunt.initConfig({

    stylus: {
      dist: {
        files: {
          'css/style.css': 'css/style.styl'
        }
      }
    },

    watch: {
      dist: {
        files: 'css/style.styl',
        tasks: ['stylus']
      }
    }

  });

  grunt.registerTask('default', 'stylus');

};
