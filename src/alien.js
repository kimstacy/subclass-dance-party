var Alien = function(top, left, timeBetweenSteps) {
  Dancer.call(this, top, left, timeBetweenSteps);
  this.$node.addClass('alien-dancer');
  this.$node.append($('<img src="./img/alien.gif">'));
};

Alien.prototype = Object.create(Dancer.prototype);
Alien.prototype.constructor = Alien;

// Alien.prototype.oldStep = Alien.prototype.step;


Alien.prototype.step = function() {
  // this.oldStep();
  // Alien.prototype.step.call(this);
  this.$node.toggle();
};