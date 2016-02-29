/**
 * Offer model events
 */

'use strict';

import {EventEmitter} from 'events';
var Offer = require('../../sqldb').Offer;
var OfferEvents = new EventEmitter();

// Set max event listeners (0 == unlimited)
OfferEvents.setMaxListeners(0);

// Model events
var events = {
  'afterCreate': 'save',
  'afterUpdate': 'save',
  'afterDestroy': 'remove'
};

// Register the event emitter to the model events
for (var e in events) {
  var event = events[e];
  Offer.hook(e, emitEvent(event));
}

function emitEvent(event) {
  return function(doc, options, done) {
    OfferEvents.emit(event + ':' + doc._id, doc);
    OfferEvents.emit(event, doc);
    done(null);
  }
}

export default OfferEvents;
