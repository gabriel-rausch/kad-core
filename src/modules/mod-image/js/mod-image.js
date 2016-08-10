goog.provide('kstatic.modules.image');

goog.require('goog.dom');
goog.require('goog.dom.classlist');
goog.require('goog.dom.dataset');
goog.require('kstatic.module');

/**
 * Image module
 * @version 0.0.1
 * @constructor
 * @extends {kstatic.module}
 */
kstatic.modules.image = function(id, node) {
  goog.base(this, id, node);
};

goog.inherits(kstatic.modules.image, kstatic.module);
goog.exportSymbol('kstatic.modules.image', kstatic.modules.image);

kstatic.modules.image.prototype.start = function() {
  var self = this;
  self.setData();
  self.setSize();

  if (goog.dom.classlist.contains(self.node, 'cover')) {
    self.createBackgroundImg();
  } else {
    self.createImgTag();
  }
};

kstatic.modules.image.prototype.setData = function() {
  var self = this;
  self.imgs = goog.dom.dataset.get(self.node, 'srcset').split(',');
};

kstatic.modules.image.prototype.setSize = function() {
  var self = this;
  self.screenSize = 0;
};

kstatic.modules.image.prototype.createBackgroundImg = function() {
  var self = this;
  self.node.style.backgroundImage = 'url(' + self.getResponsiveImgUrl() + ')';
};

kstatic.modules.image.prototype.createImgTag = function() {
  var self = this;
  var img = document.createElement('img');
  img.src = self.getResponsiveImgUrl();
  self.node.appendChild(img);
};

kstatic.modules.image.prototype.getResponsiveImgUrl = function() {
  var self = this;
  return self.imgs[self.screenSize];
};
