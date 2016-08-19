goog.provide('kstatic.modules.superhero');

goog.require('goog.dom');
goog.require('goog.dom.classlist');
goog.require('goog.dom.forms');
goog.require('goog.events');
goog.require('goog.style');
goog.require('goog.events.EventType');
goog.require('goog.array');
goog.require('kstatic.module');

/**
 * Superhero module (a landingpage)
 * @version 0.0.1
 * @constructor
 * @extends {kstatic.module}
 */
kstatic.modules.superhero = function(id, node, pubsub) {
  goog.base(this, id, node, pubsub);
};

goog.inherits(kstatic.modules.superhero, kstatic.module);
goog.exportSymbol('kstatic.modules.superhero', kstatic.modules.superhero);

kstatic.modules.superhero.prototype.start = function() {
  var self = this;

  self.pubsub.subscribe('window:resize', function() {
    self.setHeight();
  });

  // initial calculation
  self.setHeight();
};

/**
 * Calculate height
 */
kstatic.modules.superhero.prototype.setHeight = function() {
  var self = this;

  // set height if viewport size >= desktop
  if (goog.dom.getViewportSize().width >= self.viewports.desktop) {
    var heightHeader = goog.style.getSize(document.querySelector('.mod-header')).height;
    var viewportHeight = goog.dom.getViewportSize().height;
    self.node.style.height = (viewportHeight - heightHeader) + 'px';
  } else {
    self.node.style.height = '';
  }
};
