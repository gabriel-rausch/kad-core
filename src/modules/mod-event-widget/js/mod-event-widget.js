goog.provide('kstatic.modules.eventwidget');

goog.require('goog.dom');
goog.require('goog.dom.classlist');
goog.require('goog.dom.dataset');
goog.require('kstatic.module');

/**
 * eventwidget module
 * @version 0.0.1
 * @constructor
 * @extends {kstatic.module}
 */
kstatic.modules.eventwidget = function(id, node) {
  goog.base(this, id, node);
};

goog.inherits(kstatic.modules.eventwidget, kstatic.module);
goog.exportSymbol('kstatic.modules.eventwidget', kstatic.modules.eventwidget);

kstatic.modules.eventwidget.prototype.start = function() {
  console.log('started');
};
