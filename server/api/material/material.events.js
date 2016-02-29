/**
 * Material model events
 */

'use strict';

import {EventEmitter} from 'events';
var Material = require('../../sqldb').Material;
var MaterialEvents = new EventEmitter();

// Set max event listeners (0 == unlimited)
MaterialEvents.setMaxListeners(0);

// Model events
var events = {
  'afterCreate': 'save',
  'afterUpdate': 'save',
  'afterDestroy': 'remove'
};

// Register the event emitter to the model events
for (var e in events) {
  var event = events[e];
  Material.hook(e, emitEvent(event));
}

function emitEvent(event) {
  return function(doc, options, done) {
    MaterialEvents.emit(event + ':' + doc._id, doc);
    MaterialEvents.emit(event, doc);
    done(null);
  }
}

export default MaterialEvents;
