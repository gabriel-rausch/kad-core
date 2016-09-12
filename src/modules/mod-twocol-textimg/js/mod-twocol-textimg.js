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
  this.infoData = false;
  this.dom = {
    img: false
  };
};

goog.inherits(kstatic.modules.twocoltextimg, kstatic.module);
goog.exportSymbol('kstatic.modules.twocoltextimg', kstatic.modules.twocoltextimg);

kstatic.modules.twocoltextimg.prototype.start = function() {
  var self = this;

  if (goog.dom.classlist.contains(self.node, 'info')) {
    self.initInfo();
  }
};

/**
 * Init info
 */
kstatic.modules.twocoltextimg.prototype.initInfo = function() {
  var self = this;

  self.infoData = goog.json.unsafeParse(goog.dom.dataset.get(self.node.querySelector('.data'), 'srcsets'));
  self.dom.img = self.node.querySelector('.mod-image');

  goog.array.forEach(self.node.querySelectorAll('.link-info'), function(linkinfo, index) {

    // click: show thumbnail
    goog.events.listen(linkinfo, goog.events.EventType.CLICK, function(e) {
      e.preventDefault();

      if (self.infoData['item' + index]) {
        var newSrcset = self.infoData['item' + index].urls.join(',');
        goog.dom.dataset.set(self.dom.img, 'srcset', newSrcset);
        self.pubsub.publish('image:refreshSrcset');
      }
    });
  });
};
