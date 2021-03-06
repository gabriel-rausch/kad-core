goog.provide('kstatic.modules.image');

goog.require('goog.dom');
goog.require('goog.dom.classlist');
goog.require('goog.dom.dataset');
goog.require('goog.style');
goog.require('kstatic.module');

/**
 * Image module
 * @version 0.0.1
 * @constructor
 * @extends {kstatic.module}
 */
kstatic.modules.image = function(id, node, pubsub) {
  goog.base(this, id, node, pubsub);
  this.imgSrcs = [];
  this.type = 'cover';
};

goog.inherits(kstatic.modules.image, kstatic.module);
goog.exportSymbol('kstatic.modules.image', kstatic.modules.image);

kstatic.modules.image.prototype.start = function() {
  var self = this;
  self.setImgSrcs();
  self.attachEvents();
  self.setImage();
};

kstatic.modules.image.prototype.setImgSrcs = function() {
  var self = this;
  self.imgSrcs = goog.dom.dataset.get(self.node, 'srcset').split(',');
};

kstatic.modules.image.prototype.attachEvents = function() {
  var self = this;

  self.pubsub.subscribe('window:resize', function() {
    self.setImage();
  });

  self.pubsub.subscribe('image:refreshSrcset', function() {
    self.setImgSrcs();
    self.setImage();
  });
};

kstatic.modules.image.prototype.setImage = function() {
  var self = this;
  self.node.style.backgroundImage = 'url(' + self.getResponsiveImgUrl() + ')';
};

kstatic.modules.image.prototype.getResponsiveImgUrl = function() {
  var self = this;
  var selfSize = goog.style.getSize(self.node).height;
  if (goog.dom.classlist.contains(self.node, 'width')) {
    selfSize = goog.style.getSize(self.node).width;
  }

  // add pixel ratio
  if (window.devicePixelRatio && window.devicePixelRatio > 1) {
    selfSize = selfSize * window.devicePixelRatio;
  }

  // iterate through imgSizes
  var key = 0;
  for (var i = 0; i <= self.imgSizes.length; i++) {
    if (self.imgSizes[i] < selfSize) {
      // set size + 1 to provide an image in better quality than current size.
      // example: selfSize(800px) is bigger than imageSize(750px) than set next imgSize as a key (1000px)
      key = i + 1;
    }
  }

  // if key refers to high, than take biggest image in imgSizes list
  if (key >= self.imgSrcs.length) {
    key = self.imgSrcs.length - 1;
  }

  return self.imgSrcs[key];
};
