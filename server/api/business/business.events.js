/**
 * Business model events
 */

'use strict';

var {EventEmitter} = require('events');
var Business = require('../../sqldb').Business;
var BusinessEvents = new EventEmitter();

// Set max event listeners (0 == unlimited)
BusinessEvents.setMaxListeners(0);

// Model events
var events = {
  'afterCreate': 'save',
  'afterUpdate': 'save',
  'afterDestroy': 'remove'
};

// Register the event emitter to the model events
for (var e in events) {
  var event = events[e];
  Business.hook(e, emitEvent(event));
}

function emitEvent(event) {
  return function(doc, options, done) {
    BusinessEvents.emit(event + ':' + doc._id, doc);
    BusinessEvents.emit(event, doc);
    done(null);
  }
}

module.exports = BusinessEvents;
