goog.provide('kstatic.modules.footer');

goog.require('goog.dom');
goog.require('goog.dom.classlist');
goog.require('goog.dom.dataset');
goog.require('goog.events');
goog.require('kstatic.module');

/**
 * footer module
 * @version 0.0.1
 * @constructor
 * @extends {kstatic.module}
 */
kstatic.modules.footer = function(id, node, pubsub) {
  goog.base(this, id, node, pubsub);
};

goog.inherits(kstatic.modules.footer, kstatic.module);
goog.exportSymbol('kstatic.modules.footer', kstatic.modules.footer);

kstatic.modules.footer.prototype.start = function() {
  var self = this;

  goog.array.forEach(self.node.querySelectorAll('.clickable'), function(element) {
    goog.events.listen(element, goog.events.EventType.CLICK, function(e) {
      e.preventDefault();
      e.stopPropagation();
      element.nextElementSibling.classList.toggle('show');
    });
  });
};
