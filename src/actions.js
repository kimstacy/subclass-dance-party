var lineUp = function() {
  var top = 20;
  var left = 20;
  var mainWidth = $('.main').width();
  for (let i = 0; i < dancers.length; i++) {
    dancers[i].position(top, left);
    if (left > mainWidth) {
      left = 20;
      top += 200;
    } else {
      left += 100;
    }
    var styleSettings = {
      top: top,
      left: left
    };
    dancers[i].css(styleSettings);
  }
};

var hideElement = function(node) {
  console.log(node);
  node.toggle();
};











