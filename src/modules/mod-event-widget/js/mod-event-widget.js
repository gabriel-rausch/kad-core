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
kstatic.modules.eventwidget = function(id, node, pubsub) {
  goog.base(this, id, node, pubsub);
  this.scrollLength = 400;
  this.scrollTimeout = false;
  this.dom = {
    navNext: false,
    navPrev: false,
    eventsInner: false
  };
  this.nextX = 0;
};

goog.inherits(kstatic.modules.eventwidget, kstatic.module);
goog.exportSymbol('kstatic.modules.eventwidget', kstatic.modules.eventwidget);

kstatic.modules.eventwidget.prototype.start = function() {
  var self = this;
  self.dom.navNext = self.node.querySelector('.nav.next');
  self.dom.navPrev = self.node.querySelector('.nav.prev');
  self.dom.eventsInner = self.node.querySelector('.events-inner');

  self.attacheEvents();
  self.handleArrows();
};

kstatic.modules.eventwidget.prototype.attacheEvents = function() {
  var self = this;

  // on resize
  self.pubsub.subscribe('window:scroll', function() {
    self.handleArrows();
  });

  // click to next
  goog.events.listen(self.dom.navNext, goog.events.EventType.CLICK, function() {
    self.moveNext();
  });

  // click to previous
  goog.events.listen(self.dom.navPrev, goog.events.EventType.CLICK, function() {
    self.movePrev();
  });

  // attach touch events
  // with hammerjs
  var touchTarget = new Hammer.Manager(self.dom.eventsInner, {
    'touchAction': 'auto',
    'recognizers': [
      [Hammer.Swipe, {'direction': Hammer.DIRECTION_HORIZONTAL}]
    ]
  });
  touchTarget.add(new Hammer.Swipe());

  // swipe to next
  touchTarget.on('swipeleft', function() {
    self.moveNext();
  });

  // swipe to previous
  touchTarget.on('swiperight', function() {
    self.movePrev();
  });
};

/**
 * Central method to move event list to show upcomming events
 */
kstatic.modules.eventwidget.prototype.moveNext = function() {
  var self = this;
  if (self.mqMatch('desktop')) {
    self.nextX += self.scrollLength;
  } else {
    self.nextX += goog.style.getSize(self.dom.eventsInner).width;
  }
  if (self.nextX > self.getMaxScrollWidth()) {
    self.nextX = self.getMaxScrollWidth();
  }
  self.scrollTo(self.dom.eventsInner, self.nextX, 500);
};

/**
 * Central method to move event list to show previous events
 */
kstatic.modules.eventwidget.prototype.movePrev = function() {
  var self = this;
  if (self.mqMatch('desktop')) {
    self.nextX -= self.scrollLength;
  } else {
    self.nextX -= goog.style.getSize(self.dom.eventsInner).width;
  }
  if (self.nextX < 0) {
    self.nextX = 0;
  }
  self.scrollTo(self.dom.eventsInner, self.nextX, 500);
};

/**
 * Handle arrows
 * show or hide navi arrows if these nav elements are active/inactive
 */
kstatic.modules.eventwidget.prototype.handleArrows = function() {
  var self = this;

  // arrow next
  if (self.dom.eventsInner.scrollLeft < self.getMaxScrollWidth()) {
    self.dom.navNext.classList.add('active');
  } else {
    self.dom.navNext.classList.remove('active');
  }

  // arrow next
  if (self.dom.eventsInner.scrollLeft > 0) {
    self.dom.navPrev.classList.add('active');
  } else {
    self.dom.navPrev.classList.remove('active');
  }
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
    } else {
      self.handleArrows();
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

kstatic.modules.eventwidget.prototype.getMaxScrollWidth = function() {
  var self = this;
  return self.dom.eventsInner.scrollWidth - self.dom.eventsInner.clientWidth;
};
