
/* vim: set expandtab tabstop=2 shiftwidth=2 softtabstop=2 cc=80: */

/**
 * @package     omeka
 * @subpackage  neatline-NeatLight
 * @copyright   2012 Rector and Board of Visitors, University of Virginia
 * @license     http://www.apache.org/licenses/LICENSE-2.0.html
 */

$(function() {

  var exhibit = $('#neatline');

  var white = function() {
    exhibit.css('background', 'white');
  };

  var black = function() {
    exhibit.css('background', 'black');
  };

  Neatline.vent.on('MAP:move', function() {

    var zoom = Neatline.request('MAP:getMap').zoom;

    if (zoom < 14)                      white();
    else if (zoom >= 14 && zoom < 21)   black();
    else if (zoom >= 21)                white();

  });

});
