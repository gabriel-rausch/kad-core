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
  self.initFooterNavi();
  self.initNewsletterForm();
};

kstatic.modules.footer.prototype.initFooterNavi = function() {
  var self = this;
  goog.array.forEach(self.node.querySelectorAll('.clickable'), function(element) {
    goog.events.listen(element, goog.events.EventType.CLICK, function(e) {
      e.preventDefault();
      e.stopPropagation();
      element.classList.toggle('active');
      element.nextElementSibling.classList.toggle('show');
    });
  });
};

kstatic.modules.footer.prototype.initNewsletterForm = function() {
  var self = this;
  var openForm = self.node.querySelector('.newsletter-open-form');
  var form = self.node.querySelector('.newsletter-form');

  goog.events.listen(openForm, goog.events.EventType.CLICK, function(e) {
    e.preventDefault();
    form.classList.add('show');
  });
};

