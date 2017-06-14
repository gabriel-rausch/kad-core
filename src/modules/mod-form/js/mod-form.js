goog.provide('kstatic.modules.form');

goog.require('goog.dom');
goog.require('goog.dom.classlist');
goog.require('goog.dom.forms');
goog.require('goog.dom.dataset');
goog.require('goog.events');
goog.require('goog.style');
goog.require('goog.events.EventType');
goog.require('goog.array');
goog.require('kstatic.module');

/**
 * Form module (at contact page)
 * @version 0.0.1
 * @constructor
 * @extends {kstatic.module}
 */
kstatic.modules.form = function(id, node, pubsub) {
  goog.base(this, id, node, pubsub);
};

goog.inherits(kstatic.modules.form, kstatic.module);
goog.exportSymbol('kstatic.modules.form', kstatic.modules.form);

kstatic.modules.form.prototype.start = function() {
  var self = this;

  // extend form elements (radio and checkbox) with DOM element
  goog.array.forEach(self.node.querySelectorAll('.radio, .checkbox'), function(element) {
    var labelContent = element.querySelector('label span');
    labelContent.innerHTML = '<span class="innerLabel"></span>' + labelContent.innerHTML;
  });

  // add required attr to elements
  goog.array.forEach(self.node.querySelectorAll('input, textarea'), function(element) {
    element.setAttribute('required', '');
  });
};
