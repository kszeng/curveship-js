// Casual Narrator for The Simulated Bank Robbery - a Curveship-js example
//  Copyright 2021 Nick Montfort
//
// Copying and distribution of this file, with or without modification,
// are permitted in any medium without royalty provided the copyright
// notice and this notice are preserved. This file is offered as-is,
// without any warranty.
//
// Adapted from the original Curveship, now called Curveship-py 0.6.

var spin = {
  // i: teller,
};

var toldBy = "a casual, very oblique narrator";

names = {};

names.vestibule = new Names("that bulletproof booth", "the vestibule");
names.lobby = new Names("the lobby");
names.guardPost = new Names("the guard post");
names.street = new Names("the sidewalk outside the bank", "the sidewalk");

names.teller = new Names("a lady working for the bank", "the bank teller");
names.robber = new Names("a nervous man", "the pretend robber");
names.guard = new Names("this burly guard", "the guard");

names.slip = new Names("a deposit slip");
names.fakeMoney = new Names("some fake money");
names.bag = new Names("a black bag", "the bag");
names.mask = new Names("a Dora the Explorer mask", "the mask");
names.fakeGun = new Names("a gunShaped object", "the fake gun");
names.pistol = new Names("a pistol");

vp = {};

vp.read = new VerbPh("read");
vp.snooze = new VerbPh("snooze");
vp.reread = new VerbPh("reread");
vp.coverFace = new VerbPh("put on");
vp.type = new VerbPh("type");
vp.play = new VerbPh("play Solitaire");
vp.beginRobbing = new VerbPh("pretend to rob");
vp.wave = new VerbPh("wave to");
vp.threaten = new VerbPh("threaten");
vp.laugh = new VerbPh("laugh");
vp.wake = new VerbPh("wake up");
vp.seeThreat = new VerbPh("see");
vp.leavePost = new VerbPh("leave");
vp.grabFake = new VerbPh("bag");
vp.turn = new VerbPh("turn");
vp.shoot1 = new VerbPh("shoot");
vp.shoot2 = new VerbPh("shoot");
vp.fall = new VerbPh("fall");
vp.die = new VerbPh("die");
vp.dropGun = new VerbPh("drop");
vp.regret = new VerbPh("regret");
vp.cry = new VerbPh("cry");
vp.stare = new VerbPh("stare at");

function run() { narrate(title, toldBy, world, spin, names, vp); }
