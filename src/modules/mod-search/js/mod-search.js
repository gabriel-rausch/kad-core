goog.provide('kstatic.modules.search');

goog.require('goog.dom');
goog.require('goog.dom.classlist');
goog.require('goog.dom.dataset');
goog.require('goog.style');
goog.require('kstatic.module');

/**
 * Search module
 * @version 0.0.1
 * @constructor
 * @extends {kstatic.module}
 */
kstatic.modules.search = function(id, node, pubsub) {
  goog.base(this, id, node, pubsub);
  this.imgSrcs = [];
  this.type = 'cover';
};

goog.inherits(kstatic.modules.search, kstatic.module);
goog.exportSymbol('kstatic.modules.search', kstatic.modules.search);

kstatic.modules.search.prototype.start = function() {
  var self = this;

  self.extendResults();
};

kstatic.modules.search.prototype.extendResults = function() {
  var self = this;

  goog.array.forEach(self.node.querySelectorAll('.tx-indexedsearch-res .tx-indexedsearch-res'), function(item) {
    var href = item.querySelector('.tx-indexedsearch-title a').getAttribute('href');
    var moreButton = document.createElement('div');
    moreButton.innerHTML = '<br><a href="' + href + '" class="link-arrow">Mehr</a>';
    item.querySelector('.tx-indexedsearch-descr').appendChild(moreButton);
  });
};
