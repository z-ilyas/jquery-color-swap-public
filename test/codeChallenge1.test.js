describe('basemode 1_selectors assignment', function() {
  before(function() {
    fixture.setBase('code-challenge');
  });

  beforeEach(function () {
    fixture.load('index.html');
  });

  afterEach(function () {
    fixture.cleanup();

  });

  describe('on page load', function(){
    it('should have a #create button on load', function() {
      // make sure DOM is loaded
      onReady();
      expect($('#create')).to.exist;
    });
  })

  describe('clicking on button on DOM', function(){
    it('should create a color-div on the DOM', function() {
      //make sure DOM is loaded
      onReady();
      //click on create button
      $('#create').click();

      expect($('.color-div')).to.exist;
    });


  })


  describe('clicking on button on DOM multiple times', function(){
    it('should create a color-div on the DOM', function() {
      //make sure DOM is loaded
      onReady();
      //click on create 3 times
      $('#create').click();
      $('#create').click();
      $('#create').click();

      //number of colorDiv
      var numOfColorDivs = $('.color-div').length;

      //There should be a color div for each of the 3 clicks.
      assert.equal(numOfColorDivs, 3, '3 divs, one for each click');
    });
  })

  describe('clicking on swap button ', function(){
    it('should change color of color-div to yellow', function() {
      //make sure DOM is loaded
      onReady();
      //click create and then swap the color
      $('#create').click();
      $('.swap').click();

      //new inline style should set background-color to yellow.
      var redDiv = $('.color-div').css('background-color') == 'rgb(255, 255, 0)';
      assert.equal(redDiv, true, 'background-color should be yellow');
    });

    it('should change color back if clicked twice', function() {
      //make sure DOM is loaded
      onReady();
      //click create and then swap the color twice
      $('#create').click();
      $('.swap').click(); // should be yellow
      $('.swap').click(); // should be red again

      //the background-color: red won't be detected if in css stylesheet.
      // check that background-color is not still yellow
      var divColor = $('.color-div').css('background-color');
      assert.equal(divColor, 'rgb(255, 0, 0)', 'background-color should be red');

    });

  })

  describe('clicking on delete button ', function(){

    it('should remove a color-div', function() {
      //make sure DOM is loaded
      onReady();
      //click on create 3 times
      $('#create').click();
      $('#create').click();
      $('.delete').last().click()

      //number of colorDiv
      var numOfColorDivs = $('.color-div').length;
      //There should be a color div for each of the 3 clicks.
      assert.equal(numOfColorDivs, 1, 'one color div left after deleting one');
    });
  })

  describe('color-div should have the creation number', function(){

    it('should have p tag number', function() {
      //make sure DOM is loaded
      numberOfClicks = 0
      onReady();

      //click on create button
      $('#create').click();


      var numberFromDiv = parseInt($('.color-div').children().text());

      assert.equal(numberFromDiv, 1, 'first created div should have 1');
    });

    it('should have p tag number for each time it create was clicked', function() {
      //make sure DOM is loaded
      numberOfClicks = 0
      onReady();
      //click on create button
      $('#create').click();
      $('#create').click();

      var firstCreated = parseInt($('.color-div').last().children().text());
      assert.equal(firstCreated, 3, '1st of 2 divs should have number 1');

      $('.delete').click();
      $('.delete').click();
      $('#create').click();

      var lastDivNumber = parseInt($('.color-div').last().children().text());
      assert.equal(lastDivNumber, 3, '3rd div created should have number 3');
    });
  })
});
