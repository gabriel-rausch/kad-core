goog.provide('kstatic.application');

goog.require('goog.dom');
goog.require('goog.dom.query');
goog.require('goog.dom.dataset');
goog.require('goog.events');
goog.require('goog.events.EventType');
goog.require('goog.module.ModuleLoader');
goog.require('goog.module.ModuleManager');

goog.require('kstatic.module');
goog.require('kstatic.modules.nav');
goog.require('kstatic.modules.header');
goog.require('kstatic.modules.image');
goog.require('kstatic.modules.eventwidget');
goog.require('kstatic.modules.newswidget');

/**
 * Initial class to handle the application and modules
 * @version 0.0.1
 * @final
 * @export
 * @constructor
 */
kstatic.application = function() {
  this.modInstances = [];
  this.id = 0;
};

/**
 * start application
 */
kstatic.application.prototype.start = function() {
  var self = this;
  self.registerModules();
};

/**
 * Run DOM, find and register modules
 */
kstatic.application.prototype.registerModules = function() {
  var self = this;

  goog.array.forEach(goog.dom.query('.mod:not([data-init="true"])'), function(node) {
    var classes = node.className.split(' ');
    goog.array.forEach(classes, function(cls) {
      if (cls.substr(0, 4) === 'mod-') {
        self.registerSingleModule(cls.substring(4), node);
      }
    });
  });
};

/**
 * Run DOM, find and register modules
 */
kstatic.application.prototype.registerSingleModule = function(modName, node) {
  var self = this;

  var ModClass = goog.getObjectByName('kstatic.modules.' + modName);
  var modInstance = new ModClass(self.id++, node);
  modInstance.start();
  self.modInstances.push(modInstance);
  goog.dom.dataset.set(node, 'init', true);
};

goog.exportSymbol('kstatic.application', kstatic.application);
