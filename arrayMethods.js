// DO NOT MODIFY
var genericNumberArray = [1, 2, 3, 4, 5];
var colors = ['Blue', 'Red', 'Yellow', 'Charlie'];
var scrambledWords = ['win', 'the', 'for', 'burritos'];
var phoneNumber = [9, 0, 3, 5, 7, 6, 8];
var orderQueue = [{ takeOut: 'Ice Cream' }, { takeOut: 'Medium Salad'}, { takeOut: 'Burger'}];
var mixedNums = [5, 81, 40, 4, 805, 10, 76, 21, 3, 2, 7, 1, 7];
var mixedWords = ['Dont', 'You', 'Forget', 'About', 'Me'];
var fruitCollection = ['Apple', 'Scissors', 'Pug', 'Lady Bug', 'Banana', 'Pear'];
var gemBox = ['Ruby', 'Diamond', 'Diamond', 'Emerald', 'Moonstone', 'Pizza', 'Sneaker', 'Sapphire', 'Baby', 'Jeans', 'Soda Can', 'Boat'];
var upToTen = [1, 2, 9, 10];
var brownOnly = ['brown', 'brownish', 'ad8fy7iuhj23nrsf', 9813, {}, undefined,  'brown'];
var orderedValues = [4, 5, 6, 7, 8, 9, 10];
var friends = ['Todd', 'Jacoby', 'Miko', 'Joseph', 'Kevin', 'Todd C.'];
var monthNames = ['Jan', 'Feb', 'Mar', 'Apr'];
var bulkNumbers = [5, 5, 6, 6, 9, 9, 2, 2, 2, 5, 2];

// do your work below!

var nameArray = [];
nameArray.push("Justin","Lee");

// push missing nums
genericNumberArray.push(6,7,8,9,10);

//pop or take off last elm of arry

var popResult = colors.pop(3);

//reverse method

scrambledWords.reverse('');
phoneNumber.reverse();

// shift methods for Que

var nextOrder = orderQueue.shift();

// sorting 

mixedNums.sort();
mixedWords.sort();

// splice method

// array.splice(start)
// array.splice(start, deleteCount)
// array.splice(start, deleteCount, item1, item2, ...)

var notFruit = fruitCollection.splice(1,3);

gemBox.splice(5,2);
gemBox.splice(6,4);

upToTen.splice(0,4);
upToTen.unshift(1,2,3,4,5,6,7,8,9,10);



brownOnly.splice(1,5, "brown", "brown", "brown");

orderedValues.splice(0,7);




// unshift
// arr.unshift([element1[, ...[, elementN]]])

var orderedValuesNewLength = orderedValues.unshift(1,2,3,4,5,6,7,8,9,10);



// concat methods 
//	var new_array = old_array.concat(value1[, value2[, ...[, valueN]]])

var randomThingsArray = genericNumberArray.concat(colors)

var updatedOrders = orderQueue.concat({ takeOut: 'beer'}, { takeOut:'whisky'});


// join methods 

 var sentence = scrambledWords.join(" ");
 var myFruits = fruitCollection.join(' + ');


// slice

var favoriteFriends = friends.slice(1,3);
var owesMoney = friends.slice(3,6);

// to string

monthNameString = monthNames.toString();

// indexOf Method

var favoriteColor = colors.indexOf('Red');
var favoriteEvenNumber = mixedNums.indexOf(76);

//lastIndexOf()

var lastNine = bulkNumbers.lastIndexOf(9);
var lastFive = bulkNumbers.lastIndexOf(5);















