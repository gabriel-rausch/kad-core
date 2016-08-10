goog.provide('kstatic.modules.eventwidget');

goog.require('goog.dom');
goog.require('goog.dom.classlist');
goog.require('goog.dom.dataset');
goog.require('goog.events');
goog.require('kstatic.module');

/**
 * eventwidget module
 * @version 0.0.1
 * @constructor
 * @extends {kstatic.module}
 */
kstatic.modules.eventwidget = function(id, node) {
  goog.base(this, id, node);
  this.scrollLength = 400;
  this.scrollTimeout = false;
  this.dom = {
    navNext: false,
    navPrev: false,
    eventsWrapper: false,
    eventsInner: false
  };
};

goog.inherits(kstatic.modules.eventwidget, kstatic.module);
goog.exportSymbol('kstatic.modules.eventwidget', kstatic.modules.eventwidget);

kstatic.modules.eventwidget.prototype.start = function() {
  var self = this;
  self.dom.navNext = self.node.querySelector('.nav.next');
  self.dom.navPrev = self.node.querySelector('.nav.prev');
  self.dom.eventsWrapper = self.node.querySelector('.events');
  self.dom.eventsInner = self.node.querySelector('.events-inner');

  self.attacheEvents();
};

kstatic.modules.eventwidget.prototype.attacheEvents = function() {
  var self = this;
  var nextX = 0;

  goog.events.listen(self.dom.navNext, goog.events.EventType.CLICK, function() {
    nextX = self.dom.eventsWrapper.scrollLeft + self.scrollLength;
    self.scrollTo(self.dom.eventsWrapper, nextX, 500);
  });

  goog.events.listen(self.dom.navPrev, goog.events.EventType.CLICK, function() {
    nextX = self.dom.eventsWrapper.scrollLeft - self.scrollLength;
    if (nextX < 0) {
      nextX = 0;
    }
    self.scrollTo(self.dom.eventsWrapper, nextX, 500);
  });
};

kstatic.modules.eventwidget.prototype.scrollTo = function(element, to, duration) {
  var self = this;
  var start = element.scrollLeft,
    change = to - start,
    increment = 20;

  var animateScroll = function(elapsedTime) {
    clearTimeout(self.scrollTimeout);
    elapsedTime += increment;
    var position = self.easeInOut(elapsedTime, start, change, duration);
    element.scrollLeft = position;
    if (elapsedTime < duration) {
      self.scrollTimeout = setTimeout(function() {
        animateScroll(elapsedTime);
      }, increment);
    }
  };

  animateScroll(0);
};

kstatic.modules.eventwidget.prototype.easeInOut = function(currentTime, start, change, duration) {
  currentTime /= duration / 2;
  if (currentTime < 1) {
    return change / 2 * currentTime * currentTime + start;
  }
  currentTime -= 1;
  return -change / 2 * (currentTime * (currentTime - 2) - 1) + start;
};
