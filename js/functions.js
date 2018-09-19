function sayHello(name) {
  return('Hello, ' + name + "!")

  // TODO: return a greeting string that greets
  // the person by name, e.g. "Hello, Emily!"
}

function sayHelloEverybody(threeNames) {

  var threeNames = ['Cole', ' Jared', ' and SFCM'];

  return('Hello ' + threeNames + "!" );

  // TODO: return a greeting string that greets
  // all three people in the threeNames array
  // e.g. "Hello, Emily, MaryClare, and Taurin!"
  // NOTE: inputs should be an array with exactly three items
}

function getClasses() {

  var classes = ['Computer Science', ' TTA', ' Film Music', ' Sound Design',
  ' Recording', ' Private Lessons', ' Business for the Media Composer']
  return(classes + ".")

  // TODO: return an array with a list of strings
  // naming the classes you are taking this semester
}

function labelOrder(fiveNumbers) {

  var numbers = [1,2,3,4,5];
  var newArray = ["","","","",""];

  newArray[0] = 'first: ' + numbers[0];
  newArray[1] = ' second: ' + numbers[1];
  newArray[2] = ' third: ' + numbers[2];
  newArray[3] = ' fourth: ' + numbers[3];
  newArray[4] = ' fifth: ' + numbers [4];

  return(newArray)

  // TODO: Given an array with five numbers, return a new array
  // of strings that have labels for the ordering.
  // e.g. if fiveNumbers is [1,2,3,4,5] your function should return:
  // ["first: 1", "second: 2", "third: 3", "fourth: 4", "fifth: 5"]
  // NOTE: inputs should be an array with exactly five items
}

function calculateVolume(w, l, h) {

    var w = 2;
    var l = 2;
    var h = 3;

    var volume = w * l * h;
    return(volume)


  // TODO: given a room's width, length, and height
  // write a function that returns the volume
}

function isOdd(n) {

  var evenOdd;

  if (n%2 == 0)
    evenOdd = false
  else
    evenOdd = true

    return(evenOdd)

}

  // TODO: given a number, return true if it is odd, false if it is even
  // HINT: the expression "Boolean(0)" is false, "Boolean(1)"" is true
  // DOUBLE HINT: Try using the modulus operator (%)

// ** CART PRICES ** //

const saleAmount = .25 // 25% off!
function getSalePrice(originalPrice) {

    var salePrice;
    salePrice = (originalPrice - (originalPrice*saleAmount));
    return(salePrice);

  // TODO: given a dollar price (e.g. 5.99), return
  // a price with the saleAmount discount applied
  // e.g. if originalPrice is 4.00, your function should return 3.00.
  // (Don't worry about rounding to the correct number of decimal places)
}

function getSalePrices(threeOriginalPrices) {

    var price1 = threeOriginalPrices[0];
    var price2 = threeOriginalPrices[1];
    var price3 = threeOriginalPrices[2];

    var salePrice1 = getSalePrice(price1);
    var salePrice2 = getSalePrice(price2);
    var salePrice3 = getSalePrice(price3);

    return [salePrice1, salePrice2, salePrice3];

  // TODO: given an array of prices for three items in a cart,
  // return a new array with the saleAmount discount applied to each.
  // TIP: see if you can reuse the getSalePrice function that you just wrote!
  // NOTE: inputs should be an array with exactly three items
}

 // ** COUNTING ** //

var counter = 0;
function incrementCounter() {
  // TODO: implement a function that increments (adds 1) to the counter variable
  // and then calls showCounter to update the interface with the new value.
  // Test your code by opening the developer console and calling incrementCounter.
  // The displayed answer for this question should increase by 1!
}
function showCounter() {
  // updates the counter element with the latest value
  document.getElementById('counter').textContent = counter;
}
