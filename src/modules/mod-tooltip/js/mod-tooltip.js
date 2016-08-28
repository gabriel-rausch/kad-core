goog.provide('kstatic.modules.tooltip');

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
 * Superhero module (a landingpage)
 * @version 0.0.1
 * @constructor
 * @extends {kstatic.module}
 */
kstatic.modules.tooltip = function(id, node, pubsub) {
  goog.base(this, id, node, pubsub);
  this.type = '';
  this.tooltips = [];
};

goog.inherits(kstatic.modules.tooltip, kstatic.module);
goog.exportSymbol('kstatic.modules.tooltip', kstatic.modules.tooltip);

kstatic.modules.tooltip.prototype.start = function() {
  var self = this;
  self.type = goog.dom.dataset.get(self.node, 'type');
  self.fetchData();
  self.attachEvents();
};

/**
 * Fetch data from dom element
 */
kstatic.modules.tooltip.prototype.fetchData = function() {
  var self = this;
  goog.array.forEach(self.node.querySelectorAll('.data table td'), function(item) {
    self.tooltips.push(item.innerHTML);
  });
};
/**
 * Create tooltip anker
 */
kstatic.modules.tooltip.prototype.attachEvents = function() {
  var self = this;
  goog.array.forEach(self.node.querySelectorAll('.tip'), function(tip, index) {

    goog.events.listen(tip, goog.events.EventType.MOUSEOVER, function() {
      goog.dom.classlist.add(tip, 'open');
      tip.querySelector('.tip-content').innerHTML = self.tooltips[index];
    });
    goog.events.listen(tip, goog.events.EventType.MOUSEOUT, function() {
      goog.dom.classlist.remove(tip, 'open');
      tip.querySelector('.tip-content').innerHTML = '';
    });
  });
};
