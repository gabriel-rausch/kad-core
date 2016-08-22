goog.provide('kstatic.modules.twocoltextimg');

goog.require('goog.dom');
goog.require('goog.dom.classlist');
goog.require('goog.dom.forms');
goog.require('goog.events');
goog.require('goog.style');
goog.require('goog.events.EventType');
goog.require('goog.array');
goog.require('kstatic.module');

/**
 * Text / image combination with slideshow extention
 * @version 0.0.1
 * @constructor
 * @extends {kstatic.module}
 */
kstatic.modules.twocoltextimg = function(id, node, pubsub) {
  goog.base(this, id, node, pubsub);
  this.dom = {
    navNext: false,
    navPrev: false
  };
};

goog.inherits(kstatic.modules.twocoltextimg, kstatic.module);
goog.exportSymbol('kstatic.modules.twocoltextimg', kstatic.modules.twocoltextimg);

kstatic.modules.twocoltextimg.prototype.start = function() {
  var self = this;
  if (goog.dom.classlist.contains(self.node, 'slideshow')) {
    self.dom.navNext = self.node.querySelector('.nav.next');
    self.dom.navPrev = self.node.querySelector('.nav.prev');

    goog.events.listen(self.dom.navNext, goog.events.EventType.CLICK, function() {
      console.log('next');
    });

    goog.events.listen(self.dom.navPrev, goog.events.EventType.CLICK, function() {
      console.log('prev');
    });
  }
};
