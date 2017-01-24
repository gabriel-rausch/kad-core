goog.provide('kstatic.modules.totop');

goog.require('goog.dom');
goog.require('goog.dom.classlist');
goog.require('goog.dom.forms');
goog.require('goog.events');
goog.require('goog.style');
goog.require('goog.events.EventType');
goog.require('goog.array');
goog.require('goog.json');
goog.require('kstatic.module');

/**
 * ToTop - navigation element to jump to top in browser window
 * @version 0.0.1
 * @constructor
 * @extends {kstatic.module}
 */
kstatic.modules.totop = function(id, node, pubsub) {
  goog.base(this, id, node, pubsub);

  // minimum scroll position to show top link
  this.scrollMin = 400;
};

goog.inherits(kstatic.modules.totop, kstatic.module);
goog.exportSymbol('kstatic.modules.totop', kstatic.modules.totop);

kstatic.modules.totop.prototype.start = function() {
  var self = this;

  // ignore hash link and scroll via scrollTop
  goog.events.listen(self.node, goog.events.EventType.CLICK, function(e) {
    e.preventDefault();
    document.body.scrollTop = 0;
  });

  self.pubsub.subscribe('window:scroll', function() {
    self.handleVisibility();
  });

  // initial calculation
  self.handleVisibility();
};

/**
 * Handle visibility of arrow navigation
 */
kstatic.modules.totop.prototype.handleVisibility = function() {
  var self = this;

  // show arrow if scroll position is > 0
  if (document.body.scrollTop > self.scrollMin) {
    goog.dom.classlist.add(self.node, 'show');
  } else {
    goog.dom.classlist.remove(self.node, 'show');
  }
};
