var BlobDancer = function(top, left, timeBetweenSteps) {
  Dancer.call(this, top, left, timeBetweenSteps);
  this.$node.addClass('blob-dancer');
  this.$node.append($('<img src="./img/blob.gif">'));

};

BlobDancer.prototype = Object.create(Dancer.prototype);

BlobDancer.prototype.constructor = BlobDancer;

// BlobDancer.prototype.oldStep = BlobDancer.prototype.step;


BlobDancer.prototype.step = function() {
  // this.oldStep();
  // BlobDancer.prototype.step.call(this);
  this.$node.toggle();
};
