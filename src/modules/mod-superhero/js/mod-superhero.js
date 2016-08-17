goog.provide('kstatic.modules.superhero');

goog.require('goog.dom');
goog.require('goog.dom.classlist');
goog.require('goog.dom.forms');
goog.require('goog.events');
goog.require('goog.events.EventType');
goog.require('goog.array');
goog.require('kstatic.module');

/**
 * Superhero module
 * @version 0.0.1
 * @constructor
 * @extends {kstatic.module}
 */
kstatic.modules.superhero = function(id, node) {
  goog.base(this, id, node);
};

goog.inherits(kstatic.modules.superhero, kstatic.module);
goog.exportSymbol('kstatic.modules.superhero', kstatic.modules.superhero);

kstatic.modules.superhero.prototype.start = function() {
  var self = this;
  if (goog.dom.getViewportSize().width >= self.viewports.desktop) {
    var heightHeader = document.querySelector('.mod-header').offsetHeight;
    var viewportHeight = goog.dom.getViewportSize().height;
    goog.array.forEach(self.node.querySelectorAll('.content'), function(con) {
      con.style.paddingTop = (viewportHeight - heightHeader) + 'px';
    });
  }
};
