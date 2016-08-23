goog.provide('kstatic.modules.twocoltextimg');

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
 * Text / image combination with slideshow extention
 * @version 0.0.1
 * @constructor
 * @extends {kstatic.module}
 */
kstatic.modules.twocoltextimg = function(id, node, pubsub) {
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

goog.inherits(kstatic.modules.twocoltextimg, kstatic.module);
goog.exportSymbol('kstatic.modules.twocoltextimg', kstatic.modules.twocoltextimg);

kstatic.modules.twocoltextimg.prototype.start = function() {
  var self = this;

  if (goog.dom.classlist.contains(self.node, 'slideshow')) {
    self.initSlideshow();
  } else if (goog.dom.classlist.contains(self.node, 'info')) {
    self.initInfo();
  }
};

/**
 * Init slideshow
 */
kstatic.modules.twocoltextimg.prototype.initSlideshow = function() {
  var self = this;

  self.dom.navNext = self.node.querySelector('.nav.next');
  self.dom.navPrev = self.node.querySelector('.nav.prev');
  self.dom.slideshowInner = self.node.querySelector('.slideshow-inner');
  self.dom.slideshowImg = self.dom.slideshowInner.querySelector('.mod.mod-image');
  self.slideshowImgs = goog.json.unsafeParse(goog.dom.dataset.get(self.dom.slideshowInner, 'srcsets'));

  // attach event listeners
  goog.events.listen(self.dom.navNext, goog.events.EventType.CLICK, function() {
    self.slideshowItemKey++;
    if (self.slideshowItemKey >= self.slideshowImgs.length) {
      self.slideshowItemKey = 0;
    }
    self.slideshowSetImage(self.slideshowItemKey);
  });

  goog.events.listen(self.dom.navPrev, goog.events.EventType.CLICK, function() {
    self.slideshowItemKey--;
    if (self.slideshowItemKey < 0) {
      self.slideshowItemKey = self.slideshowImgs.length - 1;
    }
    self.slideshowSetImage(self.slideshowItemKey);
  });
};

/**
 * Set new image in slideshow
 * @param imgKey
 */
kstatic.modules.twocoltextimg.prototype.slideshowSetImage = function(imgKey) {
  var self = this;

  var newSrcset = self.slideshowImgs[imgKey].join(',');
  goog.dom.dataset.set(self.dom.slideshowImg, 'srcset', newSrcset);
  self.pubsub.publish('image:refreshSrcset');
};

/**
 * Init info
 */
kstatic.modules.twocoltextimg.prototype.initInfo = function() {
  var self = this;

  goog.array.forEach(self.node.querySelectorAll('.link-info'), function(linkinfo) {

    // click: show thumbnail
    goog.events.listen(linkinfo, goog.events.EventType.CLICK, function(e) {
      e.preventDefault();
      console.log('okok');
    });
  });
};
