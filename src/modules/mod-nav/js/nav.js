goog.provide('kstatic.modules.nav');

goog.require('goog.dom');
goog.require('goog.dom.classlist');
goog.require('goog.dom.forms');
goog.require('goog.events');
goog.require('goog.events.EventType');
goog.require('goog.array');
goog.require('kstatic.module');

/**
 * Main navigation
 * @version 0.0.1
 * @constructor
 * @extends {kstatic.module}
 */
kstatic.modules.nav = function(id, node) {
  goog.base(this, id, node);
  this.navItemsWithChildren = [];
};

goog.inherits(kstatic.modules.nav, kstatic.module);
goog.exportSymbol('kstatic.modules.nav', kstatic.modules.nav);

kstatic.modules.nav.prototype.start = function() {
  var self = this;

  self.attachListeners();
};

/**
 * Attach listeners to nav elements
 */
kstatic.modules.nav.prototype.attachListeners = function() {
  var self = this;

  // attach mouseover events to all li-1 elements
  goog.array.forEach(self.node.querySelectorAll('.li-1'), function(li) {
    goog.dom.classlist.remove(li, 'no-js');

    goog.events.listen(li, goog.events.EventType.MOUSEOVER, function() {
      if (!goog.dom.classlist.contains(li, 'open')) {
        self.removeOpenState();
        if (li.querySelector('.ul-2') !== null) {
          goog.dom.classlist.add(li, 'open');
        }
      }
    });
  });

  // close subnav on leave header or hover on logo
  goog.events.listen(document.querySelector('.mod.mod-header'), goog.events.EventType.MOUSELEAVE, function() {
    self.removeOpenState();
  });
  goog.events.listen(document.querySelector('.mod.mod-header .logo'), goog.events.EventType.MOUSEOVER, function() {
    self.removeOpenState();
  });
};

/**
 * Attach hover events
 */
kstatic.modules.nav.prototype.removeOpenState = function() {
  var self = this;
  goog.array.forEach(self.node.querySelectorAll('.li-1'), function(li) {
    goog.dom.classlist.remove(li, 'open');
  });
};
