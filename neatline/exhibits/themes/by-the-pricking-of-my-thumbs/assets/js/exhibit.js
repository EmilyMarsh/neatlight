
/* vim: set expandtab tabstop=2 shiftwidth=2 softtabstop=2 cc=80: */

/**
 * @package     omeka
 * @subpackage  neatline-NeatLight
 * @copyright   2012 Rector and Board of Visitors, University of Virginia
 * @license     http://www.apache.org/licenses/LICENSE-2.0.html
 */

$(function() {

  var map = $('#neatline-map');

  var pos = function() {
    map.outerHeight($(window).height());
    Neatline.execute('MAP:updateSize');
  };

  $(window).resize(pos);
  pos();

});
