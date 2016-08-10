goog.provide('kstatic.modules.newswidget');

goog.require('goog.dom');
goog.require('goog.dom.classlist');
goog.require('goog.dom.dataset');
goog.require('kstatic.module');

/**
 * newswidget module
 * @version 0.0.1
 * @constructor
 * @extends {kstatic.module}
 */
kstatic.modules.newswidget = function(id, node) {
  goog.base(this, id, node);
};

goog.inherits(kstatic.modules.newswidget, kstatic.module);
goog.exportSymbol('kstatic.modules.newswidget', kstatic.modules.newswidget);

kstatic.modules.newswidget.prototype.start = function() {
  //
};
