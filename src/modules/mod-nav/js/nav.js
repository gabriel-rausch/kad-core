goog.provide('kstatic.modules.nav');

goog.require('goog.dom');
goog.require('goog.events');
goog.require('goog.events.EventType');
goog.require('kstatic.module');

/**
 * Main navigation for KADIA
 * @version 0.0.1
 * @constructor
 * @extends {kstatic.module}
 */
kstatic.modules.nav = function() {
  goog.base(this);
};

goog.inherits(kstatic.modules.nav, kstatic.module);
goog.exportSymbol('kstatic.modules.nav', kstatic.modules.nav);

kstatic.modules.nav.prototype.start = function() {
  var btn = document.querySelector('a');
  goog.events.listen(btn, 'click', function() {
    window.alert('okok');
  });
};
