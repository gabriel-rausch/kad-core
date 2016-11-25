goog.provide('kstatic.modules.address');

goog.require('goog.dom');
goog.require('goog.dom.classlist');
goog.require('goog.dom.forms');
goog.require('goog.events');
goog.require('goog.style');
goog.require('goog.events.EventType');
goog.require('goog.array');
goog.require('goog.json');
goog.require('kstatic.module');

/**
 * Address / Contact page
 * @version 0.0.1
 * @constructor
 * @extends {kstatic.module}
 */
kstatic.modules.address = function(id, node, pubsub) {
  goog.base(this, id, node, pubsub);
};

goog.inherits(kstatic.modules.address, kstatic.module);
goog.exportSymbol('kstatic.modules.address', kstatic.modules.address);

kstatic.modules.address.prototype.start = function() {
  var self = this;

  goog.array.forEach(self.node.querySelectorAll('p > b'), function(locationTitel, index) {

    goog.dom.classlist.add(locationTitel, 'selectable');

    // change google maps location on click
    goog.events.listen(locationTitel, goog.events.EventType.CLICK, function() {
      document.getElementById('gmaps').contentWindow.changeLocation(index);
    });
  });
};
