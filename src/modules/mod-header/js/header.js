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
kstatic.modules.header = function(id, node) {
  goog.base(this, id, node);
  this.dom = {
    searchBtn: this.node.querySelector('.search-btn'),
    closeBtn: this.node.querySelector('.search-close')
  };
};

goog.inherits(kstatic.modules.header, kstatic.module);
goog.exportSymbol('kstatic.modules.header', kstatic.modules.header);

kstatic.modules.header.prototype.start = function() {
  var self = this;

  goog.events.listen(self.dom.searchBtn, 'click', function(e) {
    e.preventDefault();
    self.toggleSearchbar();
  });

  goog.events.listen(self.dom.closeBtn, 'click', function(e) {
    e.preventDefault();
    goog.dom.forms.setValue(self.node.querySelector('.search-input'), '');
    self.toggleSearchbar();
  });
};

kstatic.modules.header.prototype.toggleSearchbar = function() {
  var self = this;
  goog.dom.classlist.toggle(self.node, 'search-active');
  goog.dom.forms.focusAndSelect(self.node.querySelector('.search-input'));
};
