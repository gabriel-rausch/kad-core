goog.provide('kstatic.modules.header');

goog.require('goog.dom');
goog.require('goog.dom.classlist');
goog.require('goog.dom.forms');
goog.require('goog.events');
goog.require('goog.events.EventType');
goog.require('kstatic.module');

/**
 * Main navigation for KADIA
 * @version 0.0.1
 * @constructor
 * @extends {kstatic.module}
 */
kstatic.modules.header = function() {
  goog.base(this);
};

goog.inherits(kstatic.modules.header, kstatic.module);
goog.exportSymbol('kstatic.modules.header', kstatic.modules.header);

kstatic.modules.header.prototype.start = function() {
  /*var self = this;

  goog.events.listen(document.querySelector('.search-btn'), 'click', function(e) {
    e.preventDefault();
    self.toggleSearchbar();
  });

  goog.events.listen(document.querySelector('.search-close'), 'click', function(e) {
    e.preventDefault();
    self.toggleSearchbar();
  });*/
};

kstatic.modules.header.prototype.toggleSearchbar = function() {
  goog.dom.classlist.toggle(document.querySelector('.mod-header'), 'search-active');
  goog.dom.forms.focusAndSelect(document.querySelector('.search-input'));
};
