console.log('JS loaded');

var numberOfClicks = 0;

var onReady = function() {
  console.log('the doc is ready');

};

// When the DOM is loaded, our code in the onReady function will run.
$(document).ready(onReady);
