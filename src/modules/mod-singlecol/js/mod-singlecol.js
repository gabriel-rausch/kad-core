goog.provide('kstatic.modules.singlecol');

goog.require('goog.dom');
goog.require('goog.dom.classlist');
goog.require('goog.dom.forms');
goog.require('goog.dom.dataset');
goog.require('goog.events');
goog.require('goog.style');
goog.require('goog.events.EventType');
goog.require('goog.array');
goog.require('kstatic.module');

/**
 * singlecol module
 * @version 0.0.1
 * @constructor
 * @extends {kstatic.module}
 */
kstatic.modules.singlecol = function(id, node, pubsub) {
  goog.base(this, id, node, pubsub);
  this.type = '';
  this.singlecols = [];
};

goog.inherits(kstatic.modules.singlecol, kstatic.module);
goog.exportSymbol('kstatic.modules.singlecol', kstatic.modules.singlecol);

kstatic.modules.singlecol.prototype.start = function() {
  var self = this;
  /**
   * Find text-elements which open next table (e.g. in Karriere > Ausbildung)
   */
  goog.array.forEach(self.node.querySelectorAll('.text-ausbildung'), function(element, index) {
    goog.events.listen(element, goog.events.EventType.CLICK, function() {
      goog.array.forEach(self.node.querySelectorAll('table table'), function(table, tableIndex) {
        if (tableIndex === index) {
          goog.dom.classlist.toggle(table, 'show');
        }
      });
    });
  });
};
