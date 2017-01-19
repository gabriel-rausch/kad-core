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
  this.data = {};
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
  self.data = goog.json.unsafeParse(goog.dom.dataset.get(self.node, 'srcsets'));

  self.attachEvents();
};

/**
 * Attach listeners
 * For click and touch input
 */
kstatic.modules.slideshow.prototype.attachEvents = function() {
  var self = this;

  // click to next
  goog.events.listen(self.dom.navNext, goog.events.EventType.CLICK, function() {
    self.moveNext();
  });

  // click to previous
  goog.events.listen(self.dom.navPrev, goog.events.EventType.CLICK, function() {
    self.movePrev();
  });

  // attach touch events
  // with hammerjs
  var touchTarget = new Hammer.Manager(self.dom.slideshowInner, {
    'touchAction': 'auto'
  });
  touchTarget.add(new Hammer.Swipe());

  // swipe to next
  touchTarget.on('swipeleft', function() {
    self.moveNext();
  });

  // swipe to previous
  touchTarget.on('swiperight', function() {
    self.movePrev();
  });
};

/**
 * Central method to go to next image
 */
kstatic.modules.slideshow.prototype.moveNext = function() {
  var self = this;
  self.slideshowItemKey++;
  if (self.slideshowItemKey >= Object.keys(self.data).length) {
    self.slideshowItemKey = 0;
  }
  self.setImage(self.slideshowItemKey);
  self.setQuote(self.slideshowItemKey);
};

/**
 * Central method to go to prev image
 */
kstatic.modules.slideshow.prototype.movePrev = function() {
  var self = this;
  self.slideshowItemKey--;
  if (self.slideshowItemKey < 0) {
    self.slideshowItemKey = Object.keys(self.data).length - 1;
  }
  self.setImage(self.slideshowItemKey);
  self.setQuote(self.slideshowItemKey);
};

/**
 * Set new image in slideshow
 * @param imgKey
 */
kstatic.modules.slideshow.prototype.setImage = function(imgKey) {
  var self = this;

  var newSrcset = self.data['item' + imgKey].urls.join(',');
  goog.dom.dataset.set(self.dom.slideshowImg, 'srcset', newSrcset);
  self.pubsub.publish('image:refreshSrcset');
};

/**
 * Set new cite
 * @param imgKey
 */
kstatic.modules.slideshow.prototype.setQuote = function(imgKey) {
  var self = this;
  try {
    var alternative = self.data['item' + imgKey].alternative;
    var description = self.data['item' + imgKey].description;
    if (alternative && alternative !== '' && description && description !== '') {
      self.node.parentNode.parentNode.querySelector('.quote .description').innerHTML = description;
      self.node.parentNode.parentNode.querySelector('.quote .cite').innerHTML = alternative;
    }
  } catch (e) {
    console.log(e);
  }
};
