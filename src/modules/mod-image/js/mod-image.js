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
  var key = 0;
  for (var i = 0; i <= self.imgSizes.length; i++) {
    if (self.imgSizes[i] < selfSize) {
      // set size - 1 to provide an image in better quality than current size.
      key = i + 1;
    }
  }
  if (key >= self.imgSizes.length) {
    key = self.imgSizes.length - 1;
  }
  return self.imgSrcs[key];
};
