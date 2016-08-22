goog.provide('kstatic.modules.heromachines');

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
 * Hero machines
 * @version 0.0.1
 * @constructor
 * @extends {kstatic.module}
 */
kstatic.modules.heromachines = function(id, node, pubsub) {
  goog.base(this, id, node, pubsub);
  this.dom = {
    bigView: false,
    bigLink: false,
    bigImg: false
  };
};

goog.inherits(kstatic.modules.heromachines, kstatic.module);
goog.exportSymbol('kstatic.modules.heromachines', kstatic.modules.heromachines);

kstatic.modules.heromachines.prototype.start = function() {
  var self = this;
  self.dom.bigView = self.node.querySelector('.big-view');
  self.dom.bigLink = self.dom.bigView.querySelector('.txt a');
  self.dom.bigImg = self.dom.bigView.querySelector('.mod.mod-image');

  goog.array.forEach(self.node.querySelectorAll('.thumbnail'), function(thumbnail) {
    goog.events.listen(thumbnail, goog.events.EventType.MOUSEOVER, function() {
      var txt = thumbnail.querySelector('.link span').innerHTML;
      var srcset = goog.dom.dataset.get(thumbnail.querySelector('.mod.mod-image'), 'srcset');
      var href = goog.dom.dataset.get(thumbnail.querySelector('.link'), 'href');
      self.setBigContent(txt, srcset, href);
    });
  });
};

/**
 * Set new image in slideshow
 * @param txt
 * @param srcset
 * @param href
 */
kstatic.modules.heromachines.prototype.setBigContent = function(txt, srcset, href) {
  var self = this;
  //self.dom.bigLink.innerHTML = txt;
  self.dom.bigLink.setAttribute('href', href);
  goog.dom.dataset.set(self.dom.bigImg, 'srcset', srcset);
  self.pubsub.publish('image:refreshSrcset');
};
