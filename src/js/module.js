goog.provide('kstatic.module');

/**
 * Basic class for modules
 * @constructor
 */
kstatic.module = function(id, node) {
  this.id = id;
  this.node = node;

  /**
  	 * Viewport definitions for breakpoints
  	 */
  this.viewports = {
    'tablet': 768,
    'desktop': 1024,
    'large': 1440,
    'large1920': 1920
  };
};

/**
 * Testing method for modules 2
 */
kstatic.module.prototype.getRandom = function() {
  return Math.random();
};

goog.exportSymbol('kstatic.module', kstatic.module);
