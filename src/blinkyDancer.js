var EarthDancer = function(top, left, timeBetweenSteps) {
  Dancer.call(this, top, left, timeBetweenSteps);
  Dancer.call(this, top, left, timeBetweenSteps);
  this.$node.addClass('blinky-dancer');
  this.$node.append($('<img src="./img/earth.gif">'));

};

EarthDancer.prototype = Object.create(Dancer.prototype);

EarthDancer.prototype.constructor = EarthDancer;

EarthDancer.prototype.oldStep = EarthDancer.prototype.step;

EarthDancer.prototype.step = function() {
  // this.oldStep();
  // EarthDancer.prototype.step.call(this);
  this.$node.toggle();
};

/*
var makeBlinkyDancer = function(top, left, stepTime) {
  var blinkyDancer = new Dancer(top, left, stepTime);

  // we plan to overwrite the step function below, but we still want the superclass step behavior to work,
  // so we must keep a copy of the old version of this function

  var oldStep = blinkyDancer.step;

  blinkyDancer.step = function() {
    // call the old version of step at the beginning of any call to this new version of step
    oldStep();
    // toggle() is a jQuery method to show/hide the <span> tag.
    // See http://api.jquery.com/category/effects/ for this and
    // other effects you can use on a jQuery-wrapped html tag.
    blinkyDancer.$node.toggle();
  };

  return blinkyDancer;
};
*/
