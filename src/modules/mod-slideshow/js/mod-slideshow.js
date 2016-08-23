goog.provide('kstatic.modules.slideshow');

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
 * Slideshow
 * @version 0.0.1
 * @constructor
 * @extends {kstatic.module}
 */
kstatic.modules.slideshow = function(id, node, pubsub) {
  goog.base(this, id, node, pubsub);
  this.dom = {
    navNext: false,
    navPrev: false,
    slideshowInner: false,
    slideshowImg: false
  };
  this.slideshowImgs = [];
  this.slideshowItemKey = 0;
};

goog.inherits(kstatic.modules.slideshow, kstatic.module);
goog.exportSymbol('kstatic.modules.slideshow', kstatic.modules.slideshow);

kstatic.modules.slideshow.prototype.start = function() {
  var self = this;

  self.dom.navNext = self.node.querySelector('.nav.next');
  self.dom.navPrev = self.node.querySelector('.nav.prev');
  self.dom.slideshowInner = self.node.querySelector('.slideshow-inner');
  self.dom.slideshowImg = self.dom.slideshowInner.querySelector('.mod-image');
  self.slideshowImgs = goog.json.unsafeParse(goog.dom.dataset.get(self.node, 'srcsets'));

  // attach event listeners
  goog.events.listen(self.dom.navNext, goog.events.EventType.CLICK, function() {
    self.slideshowItemKey++;
    if (self.slideshowItemKey >= self.slideshowImgs.length) {
      self.slideshowItemKey = 0;
    }
    self.setImage(self.slideshowItemKey);
  });

  goog.events.listen(self.dom.navPrev, goog.events.EventType.CLICK, function() {
    self.slideshowItemKey--;
    if (self.slideshowItemKey < 0) {
      self.slideshowItemKey = self.slideshowImgs.length - 1;
    }
    self.setImage(self.slideshowItemKey);
  });
};

/**
 * Set new image in slideshow
 * @param imgKey
 */
kstatic.modules.slideshow.prototype.setImage = function(imgKey) {
  var self = this;

  var newSrcset = self.slideshowImgs[imgKey].join(',');
  goog.dom.dataset.set(self.dom.slideshowImg, 'srcset', newSrcset);
  self.pubsub.publish('image:refreshSrcset');
};
