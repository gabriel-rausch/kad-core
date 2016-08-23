goog.provide('kstatic.modules.fullimageparallax');

goog.require('goog.dom');
goog.require('goog.dom.classlist');
goog.require('goog.dom.forms');
goog.require('goog.events');
goog.require('goog.style');
goog.require('goog.events.EventType');
goog.require('goog.array');
goog.require('kstatic.module');

/**
 * Full image with parallax effect
 * @version 0.0.1
 * @constructor
 * @extends {kstatic.module}
 */
kstatic.modules.fullimageparallax = function(id, node, pubsub) {
  goog.base(this, id, node, pubsub);
};

goog.inherits(kstatic.modules.fullimageparallax, kstatic.module);
goog.exportSymbol('kstatic.modules.fullimageparallax', kstatic.modules.fullimageparallax);

kstatic.modules.fullimageparallax.prototype.start = function() {
  var self = this;

  self.pubsub.subscribe('window:scroll', function(scrollPosition) {
    var winHeight = self.getWindowHeight();
    var delta = 100 * scrollPosition.y / winHeight;
    console.log(delta);
    //self.node.querySelector('.mod.mod-image').style.backgroundPositionY = '0%';
  });
};
