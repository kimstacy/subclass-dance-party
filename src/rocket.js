var RocketDancer = function(top, left, timeBetweenSteps) {
  Dancer.call(this, top, left, timeBetweenSteps);
  this.$node.addClass('rocket-dancer');
  this.$node.append($('<img src="./img/rocket.gif">'));

};

RocketDancer.prototype = Object.create(Dancer.prototype);

RocketDancer.prototype.constructor = RocketDancer;

// RocketDancer.prototype.oldStep = RocketDancer.prototype.step;


RocketDancer.prototype.step = function() {
  // this.oldStep();
  // RocketDancer.prototype.step.call(this);
  this.$node.toggle();
};