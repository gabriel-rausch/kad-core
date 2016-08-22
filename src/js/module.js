goog.provide('kstatic.module');

goog.require('goog.dom');
goog.require('goog.dom.classlist');
goog.require('goog.dom.dataset');
goog.require('goog.events');

/**
 * Basic class for modules
 * @constructor
 */
kstatic.module = function(id, node, pubsub) {
  this.id = id;
  this.node = node;
  this.pubsub = pubsub;

  /**
   * Viewport definitions for breakpoints
   */
  this.viewports = {
    'tablet': 768,
    'desktop': 1024,
    'large': 1440,
    'large1920': 1920
  };

  /**
   * Image sizes
   */
  this.imgSizes = [380, 750, 1000, 1400, 1920];
};

/**
 * Testing method for modules 2
 */
kstatic.module.prototype.getRandom = function() {
  return Math.random();
};

/**
 * Test if viewport is in desktop mode
 */
kstatic.module.prototype.mqMatch = function(viewport) {
  var self = this;
  return goog.dom.getViewportSize().width >= self.viewports[viewport];
};

/**
 * Get Window Scroll Top
 */
kstatic.module.prototype.getWindowScrollTop = function() {
  return (window.pageYOffset !== undefined) ? window.pageYOffset : (document.documentElement || document.body.parentNode || document.body).scrollTop;
};

/**
 * Get Window Height
 */
kstatic.module.prototype.getWindowHeight = function() {
  var body = document.body,
      html = document.documentElement;

  return Math.max(body.scrollHeight, body.offsetHeight, html.clientHeight, html.scrollHeight, html.offsetHeight);
};

goog.exportSymbol('kstatic.module', kstatic.module);
