// Story based on Humpty Dumpty
// Written for the sake of experimenting with body parts and how they might be modeled
// Author: Kitty Zeng, using Curveship.js

var title = "Humpty Dumpty Again";

// EXISTENTS: Places, Actors, Things in that order

place.wall = new Place();
place.ground = new Place();

actor.humpty = new Actor(place.wall, "male");
actor.soldier = new Actor(place.ground, "male");

thing.hBody = actor.humpty.getBody(); // will only have to talk about arms and legs in the events
thing.broom = new Thing(actor.soldier);
// how to define a new unique part and add it to the body?
thing.yolk = new Thing(thing.hBody); // then don't have to have another command to setParts
// how to remove a part from the body in any situation?
thing.shell = new Thing(thing.hBody);
// for the interaction between body parts from two different Actors in events:
thing.sBody = actor.soldier.getBody();

// EVENTS

ev.fall = new Event(actor.Humpty, null, temporal.from, place.wall);
ev.crash = new Event(actor.Humpty, null, temporal.into, place.ground);
ev.flingLeg = new Event(thing.hBody.leg); // parts should be removable somehow - becomes a Thing by itself?
ev.rush = new Event(actor.soldier, null, temporal.to, place.wall);
ev.crack = new Event(thing.hBody.shell); // at this point the shell should have been added as a body part
ev.spill = new Event(thing.hBody.yolk); // at this point the yolk should have been added as a body part
ev.pickup =  new Event(actor.solder, thing.leg, temporal.from, place.ground);
ev.kick = new Event(thing.leg, thing.sBody.head);

// functionality to think about:
// adding/removing body parts - are they Things before and after, and if so, how to implement that change?
// interaction between body parts - both within the same Actor and between two different Actors

var world = new World(place, actor, category, thing, ev);
