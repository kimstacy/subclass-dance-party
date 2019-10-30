var MechaDancer = function(top, left, timeBetweenSteps) {
  Dancer.call(this, top, left, timeBetweenSteps);
  this.$node.addClass('mecha-dancer');
  this.$node.append($('<img src="./img/mecha.gif">'));

};

MechaDancer.prototype = Object.create(Dancer.prototype);

MechaDancer.prototype.constructor = MechaDancer;

// MechaDancer.prototype.oldStep = MechaDancer.prototype.step;


MechaDancer.prototype.step = function() {
  // this.oldStep();
  // MechaDancer.prototype.step.call(this);
  this.$node.toggle();
};